import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 30},
  input: {
    backgroundColor: colors.alabaster,
    marginLeft: 8,
    color: colors.charcoalGray,
    fontSize: 16,
    width: '90%',
    lineHeight: 22,
    textAlignVertical: 'center',
  },
  inputView: {
    backgroundColor: colors.alabaster,
    height: 45,
    marginTop: 30,
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Results: {
    fontSize: 16,
    lineHeight: 21.6,
    paddingBottom: 15,
  },
  errorView: {justifyContent: 'center', flex: 1, alignItems: 'center'},
  errorText: {
    color: colors.red,
    fontSize: 21,
  },
});
