import { StyleSheet } from "react-native"
import { getBottomSpace } from "react-native-iphone-x-helper"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    width: '100%',
    height: 234,
    marginBottom:30,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  title: {
    paddingHorizontal: 24,
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading
  },
  subtitle: {
    paddingHorizontal: 24,
    lineHeight: 24,
    fontSize: 13,
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    backgroundColor: theme.colors.secondary100,
    opacity: .7,
  },
  detailsContent: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  members: {
    marginTop: 27,
  },
  footer: {
    marginTop: 24,
    paddingVertical: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: getBottomSpace(),
    width: '75%'
  }
})