import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import LandingPage from './LandingPage';
import List from './List';
import TestStrip from './TestStrip';
class HomeScreen extends React.Component {
    render() {  
        return(  
            <View>  
                <Text>This is Screen</Text>  
            </View>  
        )  
    }  
}  

HomeScreen.navigationOptions= {
    tabBarIcon:()=>(  
        <Text style={{ color: 'white', flex: 1 }}>Ceramic</Text>
    )
};
const CatagoryTab = createMaterialTopTabNavigator(
    {
        Ceramic: {
            screen: List,

        },
        Porceline: HomeScreen,
        Woodeffect: HomeScreen,
        Splash: HomeScreen,

      },
    {  
        tabBarOptions: {
            scrollEnabled: true,
            activeTintColor: 'white',
            style: {  
                backgroundColor:'black'  
            },
            headerShown: false
        },
    }  
)  
const AppNavigator = createStackNavigator({
  Home: {
    screen: LandingPage,
  },
  TabDemo: {
      screen: CatagoryTab
  },
  TestStrip: {
      screen: TestStrip,
  }
});

export default createAppContainer(AppNavigator);