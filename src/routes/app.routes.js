import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Aa } from "../pages/telaA";
import { B } from "../pages/telaB";
import { C } from "../pages/telaC";
import { D } from "../pages/telaD";



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawerA() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Aa" component={Aa} />
      <Drawer.Screen name="B" component={B} />
      <Drawer.Screen name="C" component={C} />
      <Drawer.Screen name="D" component={D} />
    </Drawer.Navigator>
  );
}

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="MyDrawerA" component={MyDrawerA} />
            <Tab.Screen name="A" component={Aa} />
            <Tab.Screen name="B" component={B} />
            <Tab.Screen name="C" component={C} />
            <Tab.Screen name="D" component={D} />
        </Tab.Navigator>
    );
}