<<<<<<< HEAD
import { useEffect } from "react";
import { View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
=======
import { View } from "react-native";
>>>>>>> 50bbbd2b94170bee444effe4417d7eb96d9ade1c

interface Props {
  progress?: number;
}

export function ProgressBar({ progress = 0 }: Props) {
<<<<<<< HEAD
  const sharedProgress = useSharedValue(progress);
  const style = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`
    }
  })

  useEffect(() => {
    sharedProgress.value = withTiming(progress)
  }, [progress])

  return (
    <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <Animated.View 
        className="h-3 rounded-xl bg-violet-600"
        style={style}
=======
  return (
    <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <View 
        className="h-3 rounded-xl bg-violet-600"
        style={{ width: `${progress}%` }}
>>>>>>> 50bbbd2b94170bee444effe4417d7eb96d9ade1c
      />
    </View>
  )
}