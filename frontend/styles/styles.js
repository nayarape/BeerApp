import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDE7', // fundo bem clarinho
    padding: 16,
  },
  input: {
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#388E3C',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#F1F8E9',
    marginBottom: 12,
    borderRadius: 12,
    elevation: 4, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 16,
    bottom: 16,
    backgroundColor: '#FBC02D',
  },
  mapButton: {
    position: 'absolute',
    margin: 16,
    left: 16,
    bottom: 16,
    backgroundColor: '#388E3C',
  },
});
