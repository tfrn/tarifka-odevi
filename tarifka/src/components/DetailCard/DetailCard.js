import React from 'react';
import {View, Text, Image } from 'react-native';
import Style from './DetailCard.style';

function DetailCard({meal}) {
  return (
        <View style={Style.container}>
            <Image style={Style.image} source={{uri: meal.strMealThumb}}></Image>
            <View style={Style.body_container}>
                <Text style={Style.title}>{meal.strMeal}</Text>
                <Text style={Style.prepareRecipe}>{meal.strInstructions}</Text>
            </View>
        </View>
  )
}

export default DetailCard;
