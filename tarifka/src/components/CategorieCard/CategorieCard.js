import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Style from './CategorieCard.style';
function CategorieCard({categorie, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style={Style.container}>
            <Image style={Style.image} source={{uri: categorie.strCategoryThumb}}></Image>
            <View style={Style.body_container}>
                <Text style={Style.title}>{categorie.strCategory}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default CategorieCard;
