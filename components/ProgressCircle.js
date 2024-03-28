import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { isEmpty } from "../utilities/sharedFunctions";
import Svg, { Circle, CircleProps } from "react-native-svg";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated"


const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// * React Native SVG: https://docs.expo.dev/versions/latest/sdk/svg/
// * React Native Animated Donut Chart with React Native SVG and Animated API: https://www.youtube.com/watch?v=x2LtzCxbWI0

const ProgressCircle = (props) => {

  let radius = isEmpty(props) === false && isEmpty(props.radius) === false ? props.radius : 150;
  let progress = isEmpty(props) === false && isEmpty(props.progress) === false ? props.progress : 0.50;
  let progressColor = isEmpty(props) === false && isEmpty(props.progressColor) === false ? props.progressColor : "#ee0f55";
  let strokeWidth = isEmpty(props) === false && isEmpty(props.strokeWidth) === false ? props.strokeWidth : 25;

  let innerRadius = ((radius - strokeWidth) / 2);
  let circumference = (2 * Math.PI * radius);

  const fill = useSharedValue(0);

  useEffect(() => {

    fill.value = withTiming(progress, {duration: 1500});

  }, [progress]);


  const animatedProps = useAnimatedProps(() => ({

    strokeDasharray:[circumference * fill.value, circumference]

  }));


  const circleDefaultProps = {
    r: innerRadius,
    cx: radius,
    cy: radius,
    originX: radius,
    originY: radius,
    strokeWidth: strokeWidth,
    stroke: progressColor,
    strokeLinecap: "round",
    rotation: "-90",
  };


  return (
    <View > 

        <Svg style={{width: radius * 2, height: radius * 2, alignSelf: "center"}}>
            {/* Background */}
            <Circle {...circleDefaultProps} opacity={0.2} />

            {/* Foreground */}
            <AnimatedCircle animatedProps={animatedProps} {...circleDefaultProps} />
        </Svg>

    </View>
  );

}

export default ProgressCircle;
