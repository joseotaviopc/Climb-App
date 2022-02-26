import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity, // Elemento de clique
  TouchableOpacityProps,
} from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

// todas as props de TouchableOpacityProps mais as de title
type Props = TouchableOpacityProps & {
  // ou => interface Props {}
  title: string;
};

// ...rest passa todas as outras props
export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
