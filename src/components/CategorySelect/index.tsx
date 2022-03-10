import React from "react";
import { ScrollView } from "react-native";

import { categories } from "../../utils/categories";
import { styles } from "./styles";

import { Category } from "../Category";

type Props = {
  categorySelected: number;
  hasCheckBox?: boolean;
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}: Props) {
  return (
    // ScrollView para poucos itens
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id.toString())}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
}
