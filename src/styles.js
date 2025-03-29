import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  commonButton: {
    backgroundColor: '#4A4434',
    paddingVertical: 12,
    borderRadius: 999, // 완전 둥글게
    alignItems: 'center',
    marginTop: 24,
    marginLeft: 20,
  },
  commonButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
