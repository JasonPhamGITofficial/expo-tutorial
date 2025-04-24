import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageView";
import Button from "@/components/Buttons";

const PlaceholderImage = require("../../assets/images/background-image.png")

export default function Index() {
  return (
    <View style = {styles.container}>
      <View style = {styles.imageContainer}>
        {/* <Image source = {PlaceholderImage} style={styles.image} /> */}
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style = {styles.footerContainer}>
        <Button label="Choose a photo" theme ="primary"/>
        <Button label="Choose this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});