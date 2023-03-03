import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import {REACT_APP_API_CATEGORIES_URL} from '@env';
import CategorieCard from '../../components/CategorieCard';

export default Categories = ({navigation})=>{
  const {error, loading, data} = useFetch(REACT_APP_API_CATEGORIES_URL + "categories.php");
  const newData = data.categories;

  const handleCategoriesSelect=(strCategory)=>{
    navigation.navigate("MealsPage", {strCategory});
  };
  
  const renderCategories = ({item}) => <CategorieCard categorie={item} onSelect={()=>handleCategoriesSelect(item.strCategory)}/>;
  
  if(loading){
    return <Loading />
  };
  if(error){
    return <Error />
  };
    return (
      <SafeAreaView>
        <FlatList data={newData} renderItem={renderCategories}></FlatList>
      </SafeAreaView>
      )
}
