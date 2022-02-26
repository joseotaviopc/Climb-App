import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./style";

export function Signin() {
  // const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          sua escalada {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para escalar as vias {`\n`}
          favoritas com seus amigos
        </Text>

        <ButtonIcon title="Entrar com email" activeOpacity={0.7} />
      </View>
    </View>
  );
}
