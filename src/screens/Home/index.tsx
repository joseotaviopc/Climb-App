import React, { useState } from "react";
import { Button, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function Home() {
  const [category, setCategory] = useState("");
  const { primary } = theme.colors;

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Pracinha",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/03 às 19:00h",
      description: "É hoje que vamos pegar uma pracinha clássica!",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Peixoto",
        icon: null,
        owner: true,
      },
      category: "2",
      date: "24/03 às 07:00h",
      description: "Peixotin, sequin sequin!",
    },
    {
      id: "3",
      guild: {
        id: "1",
        name: "Peixoto",
        icon: null,
        owner: true,
      },
      category: "2",
      date: "24/03 às 07:00h",
      description: "Peixotin, sequin sequin!",
    },
    {
      id: "4",
      guild: {
        id: "1",
        name: "Peixoto",
        icon: null,
        owner: true,
      },
      category: "2",
      date: "24/03 às 07:00h",
      description: "Peixotin, sequin sequin!",
    },
    {
      id: "5",
      guild: {
        id: "1",
        name: "Peixoto",
        icon: null,
        owner: true,
      },
      category: "2",
      date: "24/03 às 07:00h",
      description: "Peixotin, sequin sequin!",
    },
    {
      id: "6",
      guild: {
        id: "1",
        name: "Peixoto",
        icon: null,
        owner: true,
      },
      category: "2",
      date: "24/03 às 07:00h",
      description: "Peixotin, sequin sequin!",
    },
    {
      id: "7",
      guild: {
        id: "1",
        name: "Peixoto",
        icon: null,
        owner: true,
      },
      category: "2",
      date: "24/03 às 07:00h",
      description: "Peixotin, sequin sequin!",
    },
  ];

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
        {/* <View style={styles.button}>
          <Button title="+" onPress={handleAppointmentCreate} color={primary} />
        </View> */}
      </View>

      <View style={styles.category}>
        <CategorySelect
          hasCheckBox
          categorySelected={Number(category)}
          setCategory={handleCategorySelect}
        />
      </View>

      <ListHeader title="Escaladas agendadas" subtitle="Total 6" />

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Appointment data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
    </Background>
  );
}
