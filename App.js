
import React from 'react';
import Navigation from "./app/navigations/Navigation"
import { firebaseApp } from "./app/utils/firebase"
import * as firebase from "firebase"
import {LogBox} from "react-native"


LogBox.ignoreLogs(['Setting a timer','Animated: `useNativeDriver` was']);
export default function App() {
  
  return <Navigation/>
}
