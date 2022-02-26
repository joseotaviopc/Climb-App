import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background, // Uso de cores globais
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.color.heading,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.color.heading,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 64,
  },
  
});