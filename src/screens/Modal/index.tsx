import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import { Local, LocalProps } from "../../components/Local";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";

import { styles } from "./styles";
import { api } from "../../services/api";

type Props = {
  handleModalSelect: (Modal: LocalProps) => void; // CHECK
};

export function Modal({ handleModalSelect }: Props) {
  const [locals, setLocals] = useState<LocalProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get("/users/@me/guilds");

    setLocals(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
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
      )}
    </View>
  );
}
