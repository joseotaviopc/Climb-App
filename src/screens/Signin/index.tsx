import React from "react";
import { View, Text, Image, Button } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import IllustrationImg from "../../assets/illustration.png";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function SignIn() {
  // const { primary } = theme.colors;

  const navigation = useNavigation();

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
