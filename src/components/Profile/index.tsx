import React from "react";
import { Text, View } from "react-native";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
  const { user } = useAuth();
  console.log(user);

  return (
    <View style={styles.container}>
      <Avatar urlImage={user.avatar} />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá, </Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        {/* Gerar um vetor pra frases aleatórias */}
        <Text style={styles.message}>Hoje é dia de cadena!</Text>
      </View>
    </View>
  );
}
