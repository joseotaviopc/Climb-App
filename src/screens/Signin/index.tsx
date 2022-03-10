import React from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import IllustrationImg from "../../assets/illustration.png";

import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert("error");
    }
  }

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

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com email" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}
