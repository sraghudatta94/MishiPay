import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    LineChart,
    BarChart,
    PieChart,
   
  } from "react-native-chart-kit";
import { FontSize } from "../config/dimensions";
const file1 = require('./../assets/file1.json')

let has_online_delivery = 0
let excellent = 0
let Very_Good = 0
let is_delivering_now = 0
let no_rating = 0
file1.forEach((json)=>{
    if(json.restaurants){
        json.restaurants.forEach((restaurant)=>{
            //console.log("estaurant.has_online_delivery",restaurant.restaurant.has_online_delivery)
            if(restaurant.restaurant.has_online_delivery == 1){
                has_online_delivery=has_online_delivery+1
            }
            if(restaurant.restaurant.user_rating && restaurant.restaurant.user_rating.rating_text == 'Very Good'){
                Very_Good=Very_Good+1
    
            }
            if(restaurant.restaurant.user_rating && (restaurant.restaurant.user_rating.rating_text == 'excellent' || restaurant.restaurant.user_rating.rating_text == 'Excellent')){
                excellent=excellent+1
    
            }
            if(!restaurant.restaurant.user_rating){
                no_rating = no_rating+1
            }
            if(restaurant.restaurant.is_delivering_now == 1){
                is_delivering_now=is_delivering_now+1
            }
            
        })
    }
    
})

const screenWidth = Dimensions.get("window").width;

const lineChartConfig = {
    backgroundGradientFrom: "#FFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#f2efeb",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

class StatisticsScreen extends Component {
  state = {};
  constructor(props){
    super(props);
    console.log("has_on_de",has_online_delivery,Very_Good,excellent,is_delivering_now)
    this.state = {
        lineChartData :{
            labels: ["Delivery", "Excellent", "V good", "Delivery Now",],
            datasets: [
                {
                data: [has_online_delivery, excellent, Very_Good, is_delivering_now],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
                }
            ],
        },
        barChartData:{
            labels: ["Delivery", "Excellent", "V good", "Delivery Now",],
            datasets: [
                {
                    data: [has_online_delivery, excellent, Very_Good, is_delivering_now],
                }
            ]
        },
        pieChartData:[
            {
              name: "Excellent",
              population: excellent,
              color: "rgba(131, 167, 234, 1)",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "Very Good",
              population: Very_Good,
              color: "yellow",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "No rating",
              population: no_rating,
              color: "red",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            }
          ]
    }  
    
  }

  renderHeaderLeft = () =>{
    return <Ionicons name="ios-menu" size={25} />
  }
  
  

  componentDidMount(){
    
    console.log("has_online_delivery",has_online_delivery,Very_Good,excellent,is_delivering_now)

  } 

  navigate =(screenName) => {
      this.props.navigation.navigate(screenName)
  }
 
  render() {
    return (
      <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ScrollView>
            

                <Text style={{fontSize:FontSize(14),marginTop:20}}>Line Chart</Text>

                <LineChart
                data={this.state.lineChartData}
                width={screenWidth}
                height={220}
                chartConfig={{
                    backgroundColor: "#000",
                    backgroundGradientFrom: "#FFF",
                    backgroundGradientTo: "#f2efeb",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      borderRadius: 16
                    },
                    propsForDots: {
                      r: "6",
                      strokeWidth: "2",
                      stroke: "#ffa726"
                    }
                  }}
                />

                <Text style={{fontSize:FontSize(14),marginTop:20}}> Bar Chart</Text>

                <BarChart
                style={{}}
                data={this.state.barChartData}
                width={screenWidth}
                height={220}
                yAxisLabel=""
                chartConfig={lineChartConfig}
                verticalLabelRotation={0}
                />

                <Text style={{fontSize:FontSize(14),marginTop:20}}> Pie Chart</Text>

                <PieChart
                data={this.state.pieChartData}
                width={screenWidth}
                height={220}
                chartConfig={lineChartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
                />

            </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
 
});


export default StatisticsScreen;