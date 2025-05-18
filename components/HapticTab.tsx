import * as Haptics from 'expo-haptics';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export function HapticTouchable(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      {...props}
      onPressIn={(e) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        props.onPressIn?.(e);
      }}
    />
  );
}
