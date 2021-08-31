import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {config} from './routes/config';

import {HomeScreen} from './screens/Home';
import {BillingScreen} from './screens/Billing';
import LinksScreen from './screens/LinksScreen';

import Config from 'react-native-config';
import StorybookUI from '../storybook';

const linking = {
  prefixes: ['https://app.reactivelions.com', 'billing-app://'],
  config,
};

const Stack = createStackNavigator();

const App = () => {
  const loadStorybook = Config.LOAD_STORYBOOK && Config.LOAD_STORYBOOK === 'true';
  return (<Text style={{ flex: 1, alignSelf: 'center', marginTop: 60 }}>{`Thieu Mao ${Config.LOAD_STORYBOOK}`}</Text>);
  if (!loadStorybook) {
    return (
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Billing" component={BillingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { loadStorybook && <Stack.Screen name="LinksScreen" component={LinksScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// export default Config.LOAD_STORYBOOK && Config.LOAD_STORYBOOK === 'true' ? StorybookUI : App;
