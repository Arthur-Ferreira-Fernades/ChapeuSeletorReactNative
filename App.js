import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Pages/Home';
import PerguntasArea from './src/Pages/PerguntasArea';
import PerguntaCursosExatas from './src/Pages/PerguntaCursosExatas';
import PerguntaCursosHumanas from './src/Pages/PerguntaCursosHumanas';
import Resposta from './src/Pages/Resposta';
import DesempataDsEle from './src/Pages/DesempataDsEle';
import DesempataDsLog from './src/Pages/DesempataDsLog';
import DesempataLogEle from './src/Pages/DesempataLogEle';
import DesempataMarkRh from './src/Pages/DesempataMarkRh';
import DesempataMarkTuri from './src/Pages/DesempataMarkTuri';
import DesempataRhTuri from './src/Pages/DesempataRhTuri';

const Stack = createNativeStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name = "PerguntasArea" component={PerguntasArea}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name = "PerguntaCursosExatas" component={PerguntaCursosExatas}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name = "PerguntaCursosHumanas" component={PerguntaCursosHumanas}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name = "Resposta" component={Resposta}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name = "DesempataDsEle" component={DesempataDsEle}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name = "DesempataDsLog" component={DesempataDsLog}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name = "DesempataLogEle" component={DesempataLogEle}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name = "DesempataMarkRh" component={DesempataMarkRh}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name = "DesempataMarkTuri" component={DesempataMarkTuri}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name = "DesempataRhTuri" component={DesempataRhTuri}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
