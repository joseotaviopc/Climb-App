import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

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
import { theme } from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { Modal } from "../Modal";
import { LocalProps } from "../../components/Local";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState<LocalProps>({} as LocalProps);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleModalSelect(modalSelect: LocalProps) {
    setModal(modalSelect);
    setOpenModal(false);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar escalada" />

          <View style={styles.content}>
            <Text style={styles.label}>Categoria</Text>

            <CategorySelect
              hasCheckBox
              setCategory={setCategory}
              categorySelected={Number(category)}
            />

            <View style={styles.form}>
              <GestureHandlerRootView>
                <RectButton onPress={handleOpenModal}>
                  <View
                    style={styles.select}
                    accessible
                    accessibilityRole="button"
                  >
                    {modal.icon ? <GuildIcon /> : <View style={styles.image} />}

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
                    <SmallInput maxLength={2} />
                    <Text style={styles.divider}>/</Text>
                    <SmallInput maxLength={2} />
                  </View>
                </View>
                <View>
                  <Text style={styles.label}>Hora e minuto</Text>

                  <View style={styles.column}>
                    <SmallInput maxLength={2} />
                    <Text style={styles.divider}>:</Text>
                    <SmallInput maxLength={2} />
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
              />
            </View>

            <View style={styles.footer}>
              <Button title="Agendar"></Button>
            </View>
          </View>
        </Background>
      </ScrollView>

      <ModalView visible={openModal}>
        <Modal handleModalSelect={handleModalSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
