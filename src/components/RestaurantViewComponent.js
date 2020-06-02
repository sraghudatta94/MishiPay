import React, { Component,useCallback } from "react";

import {
    View,
    Text,
    LayoutAnimation,
    TouchableOpacity
  } from "react-native";
import { useDimensionsChange, useResponsiveHeight, useResponsiveWidth } from "react-native-responsive-dimensions";
import { FontSize } from "../config/dimensions";

export default RestaurantViewComponent = (props) =>{
    useDimensionsChange(
      useCallback(({ window, screen }) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }, [])
    );
    return <TouchableOpacity  onPress={()=>props.onPress()}>
                <View style={{flex:1,borderRadius:5,borderWidth:1,borderColor:'#197DF6',flexDirection:'row',height:useResponsiveWidth(15)}}>
                    {/* <View style={{backgroundColor:'#197DF6',flex:1.5,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#FFF',fontSize:FontSize(14)}}>
                            {moment(props.date).format('DD')}
                        </Text>
                        <Text style={{color:'#FFF',fontSize:FontSize(14)}}>
                            {moment(props.date).format('MMM')}
                        </Text>
                    </View> */}
                    <View style={{flex:8.5,justifyContent:'center',paddingLeft:useResponsiveWidth(5)}}>
                      
                        <Text style={{color:'#7C7C7C',fontSize:FontSize(14)}}>
                         Name: {props.name}
                          
                        </Text>

                        <Text style={{color:'#7C7C7C',fontSize:FontSize(14)}}>
                         Location: {props.location}
                          
                        </Text>
                      
                    </View>
                </View>
           </TouchableOpacity>
}