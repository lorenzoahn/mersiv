import { View, Image, TouchableOpacity } from "react-native";

const Cooking2 = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate("Cooking Confirmation");
  }
  return(
    <TouchableOpacity style={{flex: 1}} onPress={handlePress}>
      <Image source={require("../../assets/cooking2.png")} style={{width: "100%", height: "100%"}} />
    </TouchableOpacity>
  )
}

export default Cooking2