import { Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View styl={styles.container}>
      <Text style={styles.text}>
        {" "}
        Here We Have Been For a long time And You Know That
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#008080",
    color: "green",
  },
  text: {
    color: "white",
    backgroundColor: "green",
    padding: "25px",
  },
});

export default HomeScreen;
