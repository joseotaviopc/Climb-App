import React from "react";
import { Pressable, Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";
import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";

import { LocalProps } from "../Local";
import { GuildIcon } from "../GuildIcon";
import { theme } from "../../global/styles/theme";
import { categories } from "../../utils/categories";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export type AppointmentProps = {
  id: string;
  guild: LocalProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(
    (item) => item.id === Number(data.category)
  );
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;
  const navigation = useNavigation();

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  return (
    <RectButton {...rest}>
      <Pressable onPress={handleAppointmentDetails}>
        <View style={styles.container}>
          <LinearGradient
            style={styles.guildIconContainer}
            colors={[secondary50, secondary70]}
          >
            <GuildIcon />
          </LinearGradient>

          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>{data.guild.name}</Text>

              <Text style={styles.category}>{category.title}</Text>
            </View>

            <View style={styles.footer}>
              <View style={styles.dateInfo}>
                <CalendarSvg />
                <Text style={styles.date}>{data.date}</Text>
              </View>

              <View style={styles.playersInfo}>
                <PlayerSvg fill={owner ? primary : on} />
                <Text style={[styles.player, { color: owner ? primary : on }]}>
                  {owner ? "Local" : "Visitante"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </RectButton>
  );
}
