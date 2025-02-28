import { Text, View, StyleSheet } from "react-native";

const NotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Notes </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    flex: 1,
    padding: 20,
  },
});

export default NotesScreen;
