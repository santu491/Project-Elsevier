import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  cardView: {
    backgroundColor: colors.alabaster,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21.6,
  },
  details: {
    fontSize: 16,
    lineHeight: 21.6,
  },
});
