import React from "react";
import { View, Text, Image, Button } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function SignIn({ navigation }) {
  const { primary } = theme.colors;

  return (
    <Background>
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

          {/* <Button
            color={primary}
            title="Entrar"
            onPress={() => navigation.navigate("Home")}
          /> */}

          <ButtonIcon
            title="Entrar com email"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </Background>
  );
}
