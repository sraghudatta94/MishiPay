import React, { Component, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  LayoutAnimation
} from "react-native";
import {connect} from 'react-redux';
import { useResponsiveScreenWidth, useDimensionsChange,useResponsiveHeight, responsiveHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import AntDesign from 'react-native-vector-icons/AntDesign';
import RestaurantViewComponent from "../components/RestaurantViewComponent";


class RestaurantScreen extends Component {
  state = {};
  constructor(props){
    super(props);
    this.state = {
        restaurant_list:props.restaurant_list
    }  
  }
  
  componentDidMount(){
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
        // do something
            this.setState({restaurant_list:this.props.restaurant_list})
      });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }
  


  gotoRestaurantDetailView = (restaurant) =>{
    this.props.navigation.navigate('ViewRestaurant',{restaurant:restaurant})
  }
  

  gotoAddNewRestaurant = () =>{
    this.props.navigation.navigate('AddRestaurant')
  }

  renderRestaurantView =(item,index) =>{
    return <RestaurantViewComponent key={index}
                                location={item.location}
                                name={item.name} 
                                date={item.date}
                                onPress={()=>this.gotoRestaurantDetailView(item)}/>
  }

  _keyExtractor=(item , index) => item._id.toString();

  render() {
      
    const Body = () =>{
      useDimensionsChange(
        useCallback(({ window, screen }) => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        }, [])
      );
      
      return <View style={{marginHorizontal:useResponsiveScreenWidth(5)}}>
                 <View style={{marginTop:useResponsiveHeight(3)}}>
                 {this.state.restaurant_list.length==0?<Text style={{fontSize:14,textAlign:'center',marginTop:'50%',color:'#7C7C7C',alignSelf:'center'}}>
                     No restaurant available
                 </Text>:null}
                 <FlatList data={this.state.restaurant_list}
                           extraData={this.state}
                           ItemSeparatorComponent={()=><View style={{height:10}}/>}
                           renderItem={({item,index})=>this.renderRestaurantView(item,index)}
                           keyExtractor={this._keyExtractor}/>
                 
                 </View>
                 
             </View>
    }

    const PlusButton = () =>{
      useDimensionsChange(
        useCallback(({ window, screen }) => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        }, [])
      );
      return <TouchableOpacity onPress={()=>this.gotoAddNewRestaurant()} style={{justifyContent:'center',alignItems:'center',height:responsiveScreenWidth(10),width:responsiveScreenWidth(10),
                          position:'absolute',bottom:responsiveScreenWidth(5),right:responsiveScreenWidth(5),
                          borderRadius:responsiveScreenWidth(10),backgroundColor:'#197DF6'}}>
                          <AntDesign name="plus" color="#FFF" size={20}/>
             </TouchableOpacity>
    }

    return (
      <SafeAreaView style={{flex:1}}>
            
            <ScrollView>
            
            <Body />
            
            </ScrollView>
            <PlusButton />
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

export default  connect(mapStateToProps,null)(RestaurantScreen);