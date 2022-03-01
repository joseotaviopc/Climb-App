import React from "react";
import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props) {
  const { secondary30, secondary50 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary30, secondary50]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
