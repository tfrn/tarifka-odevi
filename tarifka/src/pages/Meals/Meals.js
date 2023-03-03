import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import {REACT_APP_API_CATEGORIES_URL} from '@env';
import MealCard from '../../components/MealCard';

export default Meals = ({route, navigation})=>{
  const {strCategory} = route.params;
  const {error, loading, data} = useFetch(REACT_APP_API_CATEGORIES_URL + "filter.php?c=" + strCategory);
  const newData = data.meals;

  const handleMealsSelect=(idMeal)=>{
    navigation.navigate("DetailPage", {idMeal});
  };
  const renderMeals = ({item}) => <MealCard meal={item} onSelect={()=>handleMealsSelect(item.idMeal)}/>;
  
  if(loading){
    return <Loading />
  };
  if(error){
    return <Error />
  };
    return (
      <SafeAreaView>
      <FlatList data={newData} renderItem={renderMeals}></FlatList>
    </SafeAreaView>
    )
}
