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
import { store } from "../redux/store";
import { SET_RESTAURANT_LIST } from "../redux/type";
import moment from "moment";


class EditRestaurantScreen extends Component {
  state = {};
  constructor(props){
    super(props);
    this.state = {
        restaurant: props.route.params.restaurant,
    }  
  }
  
  editRestaurant = (text,location) =>{
    let restaurant_list = this.props.restaurant_list
    restaurant_list  = restaurant_list.map((restaurant)=>{
        if(this.state.restaurant._id == restaurant._id){
          restaurant['name'] = text
          restaurant['location'] = location
          restaurant['date'] = moment()
            return restaurant
        }
        else{
            return restaurant
        }
    })
    store.dispatch({type:SET_RESTAURANT_LIST,payload:restaurant_list})
    this.props.navigation.navigate('Restaurant')
  }

  
   
  componentDidMount(){
   
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
                                     name={this.state.restaurant.name} 
                                     location={this.state.restaurant.location} 
                                     date={"Today"}
                                     done={(name,location)=>{this.editRestaurant(name,location)}}/>
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

export default  connect(mapStateToProps,null)(EditRestaurantScreen);