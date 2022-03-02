import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import {
  Button,
  FlatList,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";

import { Background } from "../../components/Background";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Arthur",
      avatar_url: "https://github.com/joseotaviopc.png",
      status: "online",
    },
    {
      id: "2",
      username: "José",
      avatar_url: "https://github.com/joseotaviopc.png",
      status: "ofline",
    },
    {
      id: "3",
      username: "Halan",
      avatar_url: "https://github.com/joseotaviopc.png",
      status: "online",
    },
  ];
  const navigation = useNavigation();
  const { primary } = theme.colors;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <Pressable onPress={navigation.goBack()}>
            <BorderlessButton>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          </Pressable>
        }
      ></Header>

      <ImageBackground style={styles.banner} source={BannerImg}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Esportiva</Text>
          <Text style={styles.subtitle}>
            Dia de puxar corda, malhar os braços e se divertir.!
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.detailsContent}>
        <ListHeader title="Pessoas" subtitle="3" />

        <FlatList
          data={members}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Member data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.members}
        />

        <View style={styles.footer}>
          <Button title="Confirmar escalada" color={primary} onPress={null} />
        </View>
      </View>
    </Background>
  );
}
