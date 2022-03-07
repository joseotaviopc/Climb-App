import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginTop: 12,
  },
  content: {
    paddingHorizontal: 24,
  },
  matches: {
    marginTop: 24,
  },
});