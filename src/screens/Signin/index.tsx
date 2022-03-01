import React from "react";
import { View, Text, Image } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";

export function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}e organize {`\n`}
          sua escalada
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para escalar as vias {"\n"}
          favoritas com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com email"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}
