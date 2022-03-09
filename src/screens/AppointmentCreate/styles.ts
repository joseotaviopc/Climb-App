import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    marginHorizontal: 24
  },
  adjustcategory: {
    marginHorizontal: -24
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    marginVertical: 15
  },
  form: {
    // paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    flexDirection: 'row',
    width: '100%',
    height: 68,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 24,
    overflow: 'hidden'
  },
  selectBody: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight
  },
  caractersLimit:{
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
    marginVertical: 15
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56
  }
});