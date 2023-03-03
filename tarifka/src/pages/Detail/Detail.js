import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import {REACT_APP_API_CATEGORIES_URL} from '@env';
import DetailCard from '../../components/DetailCard';

export default Detail = ({route})=>{
  const {idMeal} = route.params;
  const {error, loading, data} = useFetch(REACT_APP_API_CATEGORIES_URL + "lookup.php?i=" + idMeal);
  const newData = data.meals;

  const renderDetail = ({item}) => <DetailCard meal={item}/>;
  
  if(loading){
    return <Loading />
  };
  if(error){
    return <Error />
  };

    return (
    <SafeAreaView>
      <FlatList data={newData} renderItem={renderDetail}></FlatList>
    </SafeAreaView>
    )
}
