import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "utils/mock/dummyData";

const MealOverview = () => {
  return (
    <View style={styles.container}>
      <Text>Meal Ovewview screen</Text>
    </View>
  );
};

export default MealOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
