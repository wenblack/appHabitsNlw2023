import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";
<<<<<<< HEAD
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
=======
>>>>>>> 50bbbd2b94170bee444effe4417d7eb96d9ade1c

interface Props extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function Checkbox({ title, checked = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      { checked 
        ?
<<<<<<< HEAD
        <Animated.View 
          className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
          entering={ZoomIn}
          exiting={ZoomOut}
        >
=======
        <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
>>>>>>> 50bbbd2b94170bee444effe4417d7eb96d9ade1c
          <Feather 
            name="check"
            size={20}
            color={colors.white}
          />
<<<<<<< HEAD
        </Animated.View>
=======
        </View>
>>>>>>> 50bbbd2b94170bee444effe4417d7eb96d9ade1c
        : 
        <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
      }

      <Text className="text-white text-base ml-3 font-semibold">
        {title}
      </Text>
    </TouchableOpacity>
  )
}