import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    flexDirection: 'row'
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight
  },
  signOut: {
    position: 'absolute',
    bottom: 0,
    height: 170,
    width: '100%',
    backgroundColor: theme.colors.secondary80,
    alignItems: 'center'
  },
  titleSignOut: {
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.heading,
    paddingTop: 29,
    paddingBottom: 28
  },
  play: {
    color: theme.colors.primary
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonNo: {
    width: 160,
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 8,
    borderColor: theme.colors.secondary30
  },
  buttonNoText: {
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    height: '100%',
    color: theme.colors.heading,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  buttonYes: {
    width: 160,
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8
  },
  buttonYesText: {
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    height: '100%',
    color: theme.colors.heading,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  image: {
    height: 46,
    width: 46,
    marginRight: 23
  }
});