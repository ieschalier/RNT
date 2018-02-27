import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Easing,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native'
import {
  Transitioner,
  addNavigationHelpers,
  StackRouter,
  createNavigationContainer,
  createNavigator,
} from 'react-navigation'

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
})

export class FlipNavigation extends React.Component {
  renderScene = sceneProps => (scene) => {
    const { navigation, router } = this.props
    const { routes } = navigation.state
    const { position } = sceneProps
    const { index } = scene

    const animatedRotate = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: ['-180deg', '0deg', '180deg'],
    })

    const animatedOpacity = position.interpolate({
      inputRange: [index - 1, index - 0.9, index, index + 0.9, index + 1],
      outputRange: [0, 0, 1, 0, 0],
    })

    const animation = {
      opacity: animatedOpacity,
      transform: [
        {
          perspective: Dimensions.get('window').height,
        },
        {
          rotateY: animatedRotate,
        },
      ],
    }

    const Scene = router.getComponentForRouteName(scene.route.routeName)

    return (
      <Animated.View key={index} style={[styles.view, animation]}>
        <Scene
          navigation={addNavigationHelpers({
            ...navigation,
            state: routes[index],
          })}
        />
      </Animated.View>
    )
  }

  // eslint-disable-next-line no-unused-vars
  renderScenes = (props, prevProps) => (
    <View style={{ flex: 1 }}>
      {props.scenes.map(this.renderScene(props))}
    </View>
  )

  render() {
    return (
      <Transitioner
        configureTransition={() => ({
          duration: 500,
          easing: Easing.out(Easing.ease),
        })}
        navigation={this.props.navigation}
        render={this.renderScenes}
      />
    )
  }
}

FlipNavigation.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({}).isRequired,
}

export default (routes) => {
  const Router = StackRouter(routes)
  const Navigator = createNavigator(Router)(FlipNavigation)
  const FlipTransitioner = createNavigationContainer(Navigator)

  return FlipTransitioner
}
