import * as React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RestaurantScreen from './screens/RestaurantScreen';
import AddNewRestaurantScreen from './screens/AddNewRestaurantScreen';
import ViewRestaurantScreen from './screens/ViewRestaurantScreen';
import EditRestaurantScreen from './screens/EditRestaurantScreen';
import StatisticsScreen from './screens/StatisticsScreen';

const RestaurantStack = createStackNavigator();

const RestaurantStackScreen = () =>(
    <RestaurantStack.Navigator>
                          <RestaurantStack.Screen name="Restaurant" component={RestaurantScreen} options={{headerShown:false,title:'Personal Journal'}}/>
                          <RestaurantStack.Screen name="AddRestaurant" component={AddNewRestaurantScreen} options={{title:'Add Restaurant'}}/>
                          <RestaurantStack.Screen name="ViewRestaurant" component={ViewRestaurantScreen} options={{title:'View Restaurant'}}/>
                          <RestaurantStack.Screen name="EditRestaurant" component={EditRestaurantScreen} options={{title:'Edit Restaurant'}}/>
    </RestaurantStack.Navigator>

)

const BottomTabs = createBottomTabNavigator();

const BottomNavigator = () =>(
    <BottomTabs.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let img 
            if (route.name === 'Restaurants') {
                img = require('./assets/restaurant.png')
            }
            else if (route.name === 'Statistics') {
                img = require('./assets/analysis.png')
            }
            
            return <Image style={{height:24,width:24}} source={img} resizeMode="contain"/>
        }
    })}>

        <BottomTabs.Screen name="Restaurants" component={RestaurantStackScreen}  />
        <BottomTabs.Screen name="Statistics" component={StatisticsScreen} />

    </BottomTabs.Navigator>

)




export const RootScreen = BottomNavigator