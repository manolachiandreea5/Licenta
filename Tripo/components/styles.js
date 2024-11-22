import styled from 'styled-components';
import { StyleSheet } from 'react-native';

// colors
export const Colors = {
  primary: '#8572FF',
  black: 'black',
  white: 'white',
};

const { primary, black, white } = Colors;

// Stylesheet for other components
export const styles = StyleSheet.create({
  titleFirstPage:{
    fontSize: 48,
    fontWeight: '600',
    color: white,
  },
  subtitleFirstPage:{
    fontSize: 20,
    fontWeight: '600',
    color: white,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: white,
    paddingTop: 48,
  },
  buttonContainer: {
    marginVertical: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    marginTop: 16,
    color: black,
  },
  button: {
    backgroundColor: primary,
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 16,
    width: 233,
    shadowColor: black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: black,
    borderRadius: 30,
    overflow: 'hidden',
    width: '80%', 
  },
  
  activeTab: {
    backgroundColor: primary,
    paddingVertical: 8, 
    paddingHorizontal: 25, 
    borderRadius: 30, 
    margin: 2, 
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  
  inactiveTab: {
    paddingVertical: 8,
    paddingHorizontal: 25, 
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  
  tabTextActive: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  tabTextInactive: {
    color: black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16, 
    marginBottom: 32, 
    textAlign: 'left', 
    alignSelf: 'flex-start', 
    marginLeft: '5%', 
  },
  inputContainer: {
    marginVertical: 8,
    width: '90%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    color: black,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    color: black,
  },
  forgotPasswordContainer: {
    width: '90%', 
    alignItems: 'flex-end', 
    alignSelf: 'center', 
    marginVertical: 8,
  },
  forgotPasswordText: {
    color: primary,
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: black,
    paddingVertical: 12,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
    marginTop: 16,
  },
  signInButtonText: {
    color: white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});