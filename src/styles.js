import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  flexColumn: {
    flexDirection: 'column'
  },
  flexRow: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  img: {
    flex:1,
    width: "70%",
    height: null,
    resizeMode: 'contain',
  },
  button: {
    borderRadius: 15,
    padding: 6,
    width: "85%",
    height: "auto",
    aspectRatio: 380/70,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  navButton: {
    borderRadius: 15,
    padding: 6,
    width: "35%",
    height: null,
    aspectRatio: 141/57,
    margin: 10,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: '#E15F41'
  },
  prevButton: {
    backgroundColor: '#ffff',
    borderColor: '#00000',
    borderWidth:"2px"

  },
  RegisterButton: {
    backgroundColor: '#E15F41'
  },
  SignInButton: {
    backgroundColor: '#E1AE41'
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8F9BB3',
  },
  textInput: {
    borderColor: '#4169E1',
    borderWidth:"5px",
    borderRadius:22,
    width: "85%",
  },
  banner: {
    backgroundColor: "#4169E1",
    borderBottomStartRadius: 35, 
    borderBottomEndRadius: 35,
    height: "25%",
    justifyContent:"flex-end",
    alignItems:"center",
    paddingBottom: 30
  },
  bannerText: {
    color:"white",
    fontSize: "30em"
  },
  normsText: {
    color: "black",
    fontSize: "20em"
  }
});

export default styles;