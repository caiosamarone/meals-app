import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "utils/mock/dummyData";

const renderCategoryItem = (item) => {
  retr;
};

const Categories = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
