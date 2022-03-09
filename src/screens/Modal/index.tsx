import React from "react";
import { View, FlatList } from "react-native";

import { Local, LocalProps } from "../../components/Local";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type Props = {
  handleModalSelect: (Modal: LocalProps) => void; // CHECK
};

export function Modal({ handleModalSelect }: Props) {
  const locals = [
    {
      id: "1",
      name: "Pracinha",
      icon: "image.png",
      owner: true,
    },
    {
      id: "2",
      name: "Bananal",
      icon: null,
      owner: false,
    },
    {
      id: "3",
      name: "Oriente",
      icon: null,
      owner: true,
    },
    {
      id: "4",
      name: "Bananal",
      icon: null,
      owner: false,
    },
    {
      id: "5",
      name: "Oriente",
      icon: null,
      owner: true,
    },
    {
      id: "6",
      name: "Bananal",
      icon: null,
      owner: false,
    },
    {
      id: "7",
      name: "Oriente",
      icon: null,
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={locals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Local data={item} onPress={() => handleModalSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.locals}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 80 }}
      />
    </View>
  );
}
