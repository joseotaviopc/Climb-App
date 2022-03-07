import React from "react";
import {
  GestureHandlerRootView,
  RectButton,
  RectButtonProps,
} from "react-native-gesture-handler";
import {
  Text,
  Image,
  View,
  // TouchableOpacity, // Elemento de clique(trocado por RectButton)
  // TouchableOpacityProps,
} from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

// todas as props de TouchableOpacityProps mais as de title
type Props = RectButtonProps & {
  // ou => interface Props {}
  title: string;
  // title?: string (a propriedade não é obrigatória)
};

// ...rest passa todas as outras props
export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <GestureHandlerRootView>
      <RectButton style={styles.container} {...rest}>
        <View style={styles.iconWrapper}>
          <Image source={DiscordImg} style={styles.icon} />
        </View>

        <Text style={styles.title}>{title}</Text>
      </RectButton>
    </GestureHandlerRootView>
  );
}
