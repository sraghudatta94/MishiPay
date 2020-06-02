import React, { Component, useCallback } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  LayoutAnimation,
  Alert
} from "react-native";
import {connect} from 'react-redux';
import { useResponsiveScreenWidth, useDimensionsChange,useResponsiveHeight, responsiveHeight, responsiveScreenWidth, useResponsiveWidth } from "react-native-responsive-dimensions";
import AntDesign from 'react-native-vector-icons/AntDesign';
import RestaurantDetailComponent from "../components/RestaurantDetailComponent";
import { store } from "../redux/store";
import { SET_RESTAURANT_LIST } from "../redux/type";


class ViewRestaurantScreen extends Component {
  state = {};
  constructor(props){
    super(props);
    this.state = {
      restaurant: props.route.params.restaurant,
        
    }  
  }

  deleteConfirm = () =>{
    let restaurant_list = this.props.restaurant_list
    restaurant_list  = restaurant_list.filter((restaurant)=>{
        if(this.state.restaurant._id == restaurant._id){
            return false
        } 
        else{
            return true
        }
    })
    store.dispatch({type:SET_RESTAURANT_LIST,payload:restaurant_list})
    this.props.navigation.navigate('Restaurant')
  }

  deleteRestaurant = () =>{
    Alert.alert(
        'Delete Restaurant',
        'Are you sure want to delete it ?',
        [
          
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => this.deleteConfirm()},
        ],
        {cancelable: false},
      );
  }

  renderHeaderRight = () =>{
      return <View style={{flexDirection:'row'}}>
                <View style={{marginRight:15}}> 
                    <AntDesign onPress={()=>{this.props.navigation.navigate('EditRestaurant',{restaurant:this.state.restaurant})}} name="edit" size={25} />
                </View>
                <View style={{marginRight:15}}> 
                    <AntDesign onPress={()=>{this.deleteRestaurant()}} name="delete" size={25} />
                </View>
            </View>
  }
  
  componentDidMount(){
    this.props.navigation.setOptions({
        
        headerRight:props=> this.renderHeaderRight()
           
          
      })
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
                   <RestaurantDetailComponent 
                                     location = {this.state.restaurant.location} 
                                     name={this.state.restaurant.name} 
                                     date={this.state.restaurant.date}/>
                 </View>
                 
             </View>
    }

    

    return (
      <SafeAreaView style={{flex:1}}>
            
            <ScrollView>
            
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

export default  connect(mapStateToProps,null)(ViewRestaurantScreen);