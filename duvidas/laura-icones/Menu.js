import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import Home from './pages/Home';
import MotoPark from './pages/MotoPark';
import NovaMoto from './pages/NovaMoto';
import Perfil from './pages/Perfil';
 

const Tab = createBottomTabNavigator();
 
export default function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#F6FFF9',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          height: 65,
          position: 'absolute',
        },
        tabBarIcon: ({ focused }) => {
          const iconSize = focused ? 28 : 24;
          const isMotoPark = route.name === 'MotoPark';
 
          return (
            <View
              style={{
                backgroundColor: focused ? '#00B031' : 'transparent',
                padding: 10,
                borderRadius: 50,
                marginTop: 20,
                marginBottom: '2%',
              }}
            >
              
<FontAwesome
                name="motorcycle"
                size={iconSize}
                color={focused ? '#F6FFF9' : '#009B30'}
              />
              
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MotoPark" component={MotoPark} />
      <Tab.Screen name="NovaMoto" component={NovaMoto} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}