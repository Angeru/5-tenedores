import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import Favorites from "../screens/Search"

const Stack = createStackNavigator();

export default function SearchStack(){
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="search"
                component={Favorites}
                options={{title:" Buscar"}}
            />
        </Stack.Navigator>
    )
}
