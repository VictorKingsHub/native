import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import ImagePost from "@/assets/images/splash-icon.png";
import { router, useRouter } from "expo-router";

const HomeScreen = () => {
  const route = useRouter();

  return (
    <View styl={styles.container}>
      <Image source={ImagePost} style={styles.image} />
      <Text style={styles.text}> Welcome to Note App</Text>
      <Text style={styles.subTitle}> Caption Yout Thoughts </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/notes")}
      >
        Get Started
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "teal",
    color: "green",
  },
  text: {
    color: "white",
    backgroundColor: "green",
    padding: "25px",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    backgroundColor: "teal",
    padding: 20,
  },
  button: {
    backgroundColor: "teal",
    color: "yellow",
  },
});

export default HomeScreen;
