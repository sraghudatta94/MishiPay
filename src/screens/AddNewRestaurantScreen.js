import React, { Component, useCallback } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  LayoutAnimation
} from "react-native";
import {connect} from 'react-redux';
import { useResponsiveScreenWidth, useDimensionsChange,useResponsiveHeight, responsiveHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import AddNewRestaurantComponent from "../components/AddNewRestaurantComponent";
import moment from "moment";
import { store } from "../redux/store";
import { SET_RESTAURANT_LIST } from "../redux/type";


class AddNewRestaurantScreen extends Component {
  state = {};
  constructor(props){
    super(props);
    this.state = {

    }  
  }
  
  componentDidMount(){
   
  } 

  addNewRestaurant = (name,location) =>{
    let new_restaurant = {name:name,location:location,date:moment(),_id: moment().toISOString()}
    let restaurant_list = this.props.restaurant_list 
    restaurant_list.unshift(new_restaurant)  
    store.dispatch({type:SET_RESTAURANT_LIST,payload:restaurant_list})
    this.props.navigation.navigate('Restaurant')
  }

  render() {
    const Body = () =>{
      useDimensionsChange(
        useCallback(({ window, screen }) => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        }, [])
      );
      
      return <View style={{marginHorizontal:useResponsiveScreenWidth(5)}}>
                 <View style={{marginTop:useResponsiveHeight(3)}}>
                   <AddNewRestaurantComponent user_name={"John Doe"} 
                                     message={""} 
                                     date={"Today"}
                                     done={(text,location)=>{this.addNewRestaurant(text,location)}}/>
                 </View>
                 
             </View>
    }

    

    return (
      <SafeAreaView style={{flex:1}}>
            
            <ScrollView keyboardShouldPersistTaps="handled">
            
            <Body />
            
            </ScrollView>
            
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

      
});


const mapStateToProps = (state) => {
	return {
        restaurant_list : state.restaurant.restaurant_list,
    
	}
}

export default  connect(mapStateToProps,null)(AddNewRestaurantScreen);