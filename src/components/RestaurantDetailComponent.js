import React, { Component,useCallback } from "react";

import {
    View,
    Text,
    LayoutAnimation,
  } from "react-native";
import { useDimensionsChange, useResponsiveHeight, useResponsiveWidth } from "react-native-responsive-dimensions";
import { FontSize } from "../config/dimensions";

export default RestaurantDetailComponent = (props) =>{
    useDimensionsChange(
      useCallback(({ window, screen }) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }, [])
    );
    return <View >
                <View style={{flex:1,flexDirection:'row',height:useResponsiveHeight(15)}}>
                    
                    <View style={{flex:1,}}>
                      
                        <Text style={{color:'#000',fontSize:FontSize(16)}}>Name:</Text>
                        <Text style={{color:'#7C7C7C',fontSize:FontSize(14)}}>
                          {props.name}
                        </Text>
                        <Text style={{marginTop:useResponsiveWidth(5),color:'#000',fontSize:FontSize(16)}}>Location:</Text>
                        <Text style={{color:'#7C7C7C',fontSize:FontSize(14)}}>
                          {props.location}
                        </Text>
                      
                    </View>
                </View>
           </View>
}