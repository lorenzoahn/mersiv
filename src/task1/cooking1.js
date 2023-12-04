import { View, Image, TouchableOpacity } from "react-native";

const Cooking1 = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate("Cooking2");
  }
  return(
    <TouchableOpacity style={{flex: 1}} onPress={handlePress}>
      <Image source={require("../../assets/cooking1.jpg")} style={{width: "100%", height: "100%"}} />
    </TouchableOpacity>
  )
}

export default Cooking1