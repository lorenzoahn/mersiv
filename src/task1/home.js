import { View, Image, TouchableOpacity } from "react-native";

const Home = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate("Cooking1");
  }
  return(
    <TouchableOpacity style={{flex: 1}} onPress={handlePress}>
      <Image source={require("../../assets/homescreen.jpg")} style={{width: "100%", height: "100%"}} />
    </TouchableOpacity>
  )
}

export default Home