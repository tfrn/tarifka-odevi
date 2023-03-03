import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Style from './MealCard.style';

function MealCard({meal, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style={Style.container}>
            <Image style={Style.image} source={{uri: meal.strMealThumb}}></Image>
            <View style={Style.body_container}>
                <Text style={Style.title}>{meal.strMeal}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default MealCard;
