import { React } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Home from './Pages/Home/';
import Details from './pages/Details';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator 
      initialRouteName='Home' 
      screenOptions={{ 
        headerShown: false, 
        showLabel: false,
        activeTintColor: '#FCFCFC',
        inactiveTintColor: '#C79AEC',
        tabStyle:{
          backgroundColor: '#9D4EDD',
          borderTopColor: 'transparent',
          paddingBottom: 5,
          paddingTop: 5,
        }
      }}>
          
      <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
          tabBarIcon: ({}) => (
            <FontAwesomeIcon icon={'fa-solid fa-house'}/>
          )
        }}
      />
      <Tab.Screen 
          name="Details" 
          component={Details} 
          options={{
          tabBarIcon: ({}) => (
            <FontAwesomeIcon icon={'fa-solid fa-film'}/>
          )
        }}
      />
    </Tab.Navigator>
  );
}