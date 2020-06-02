import React, { Component,useCallback, useState } from "react";

import {
    View,
    TextInput,
    LayoutAnimation,
    Button
  } from "react-native";
import { useDimensionsChange, useResponsiveHeight, useResponsiveWidth } from "react-native-responsive-dimensions";
import { FontSize } from "../config/dimensions";

export default AddNewRestaurantComponent = (props) =>{
    const [restaurantName,setRestaurantName] = useState(props.name) 
    const [location,setLocation] = useState(props.location) 

    useDimensionsChange(
      useCallback(({ window, screen }) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }, [])
    );
    return <View>
                <View style={{flex:1,borderRadius:5,borderWidth:1,borderColor:'#197DF6',flexDirection:'row',height:useResponsiveWidth(14)}}>
                    
                    <View style={{flex:8.5,}}>
                      
                        <TextInput placeholder={"Name"} onChangeText={(text)=>setRestaurantName(text)} multiline={true} value={restaurantName} style={{color:'#7C7C7C',fontSize:FontSize(14)}} />
                    
                    </View>
                </View>
                <View style={{flex:1,borderRadius:5,borderWidth:1,borderColor:'#197DF6',flexDirection:'row',marginTop:useResponsiveWidth(4),height:useResponsiveWidth(14)}}>
                    
                    <View style={{flex:8.5,}}>
                      
                        <TextInput placeholder={"Location"} onChangeText={(text)=>setLocation(text)}  value={location} style={{color:'#7C7C7C',fontSize:FontSize(14)}} />
                    
                    </View>
                </View>
                <View style={{marginTop:useResponsiveHeight(2)}}>
                <Button title={"DONE"} onPress={()=>props.done(restaurantName,location)}/>

                </View>
           </View>
}