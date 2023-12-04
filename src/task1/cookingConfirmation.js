import { View, Image, TouchableOpacity } from "react-native";

const CookingConfirmation = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate("Home");
  }
  return(
    <TouchableOpacity style={{flex: 1}} onPress={handlePress}>
      <Image source={require("../../assets/cookingConfirmation.png")} style={{width: "100%", height: "100%"}} />
    </TouchableOpacity>
  )
}

export default CookingConfirmation