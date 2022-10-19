import { CATEGORIES as MOCK_CATEGORIES } from 'utils/mock/dummyData';
import { FlatList } from 'react-native';
import CategoryGridTile from './CategoryGridTile';
import { useNavigation } from '@react-navigation/native';

function Categories({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('MealOverview');
  };

  const renderCategoryItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={MOCK_CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default Categories;
