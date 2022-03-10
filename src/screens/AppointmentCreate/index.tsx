import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

import { CategorySelect } from "../../components/CategorySelect";
import { Background } from "../../components/Background";
import { SmallInput } from "../../components/SmallInput";
import { GuildIcon } from "../../components/GuildIcon";
import { ModalView } from "../../components/ModalView";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { LocalProps } from "../../components/Local";
import { theme } from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { Modal } from "../Modal";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState<LocalProps>({} as LocalProps);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleModalSelect(modalSelect: LocalProps) {
    setModal(modalSelect);
    setOpenModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      modal,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate("Home");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar escalada" />

          <View style={styles.content}>
            <Text style={styles.label}>Categoria</Text>

            <View style={styles.adjustcategory}>
              <CategorySelect
                hasCheckBox
                setCategory={handleCategorySelect}
                categorySelected={Number(category)}
              />
            </View>

            <View style={styles.form}>
              <GestureHandlerRootView>
                <RectButton onPress={handleOpenModal}>
                  <View
                    style={styles.select}
                    accessible
                    accessibilityRole="button"
                  >
                    {modal.icon ? (
                      <GuildIcon guildId={modal.id} iconId={modal.icon} />
                    ) : (
                      <View style={styles.image} />
                    )}

                    <View style={styles.selectBody}>
                      <Text style={styles.label}>
                        {modal.name ? modal.name : "Selecione um local"}
                      </Text>
                    </View>

                    <Feather
                      name="chevron-right"
                      color={theme.colors.heading}
                      size={18}
                    />
                  </View>
                </RectButton>
              </GestureHandlerRootView>

              <View style={styles.field}>
                <View>
                  <Text style={styles.label}>Dia e mês</Text>

                  <View style={styles.column}>
                    <SmallInput maxLength={2} onChangeText={setDay} />
                    <Text style={styles.divider}>/</Text>
                    <SmallInput maxLength={2} onChangeText={setMonth} />
                  </View>
                </View>
                <View>
                  <Text style={styles.label}>Hora e minuto</Text>

                  <View style={styles.column}>
                    <SmallInput maxLength={2} onChangeText={setHour} />
                    <Text style={styles.divider}>:</Text>
                    <SmallInput maxLength={2} onChangeText={setMinute} />
                  </View>
                </View>
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>Descrição</Text>

                <Text style={styles.caractersLimit}>Máx 100 caracteres</Text>
              </View>
              <TextArea
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
                onChangeText={setDescription}
              />
            </View>

            <View style={styles.footer}>
              <Button title="Agendar" onPress={handleSave}></Button>
              {/* REALIZAR VALIDAÇÕES */}
            </View>
          </View>
        </ScrollView>
      </Background>

      <ModalView visible={openModal} closeModal={handleCloseModal}>
        <Modal handleModalSelect={handleModalSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
