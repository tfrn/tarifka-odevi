import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="CategoriesPage" component={Categories} options={{
          title:"Categories",
          headerStyle:{backgroundColor:"#64b5f6"},
          headerTitleStyle:{color:"white"},
          headerTintColor:{color:"white"},
        }}></Stack.Screen>
            <Stack.Screen name="MealsPage" component={Meals} options={{
          title:"Meals",
          headerStyle:{backgroundColor:"#64b5f6"},
          headerTitleStyle:{color:"white"},
          headerTintColor:{color:"white"},
        }}></Stack.Screen>
            <Stack.Screen name="DetailPage" component={Detail} options={{
          title:"Detay",
          headerStyle:{backgroundColor:"#64b5f6"},
          headerTitleStyle:{color:"white"},
          headerTintColor:{color:"white"},
        }}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;
