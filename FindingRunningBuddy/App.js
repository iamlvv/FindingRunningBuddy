import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const Stack = createNativeStackNavigator();

function HomeScreen(navigation) {
  return (
    <View className='items-center'>
      <Text>This is the HomeScreen</Text>
    </View>
  )
}

function OnboardingPage({ navigation }) {
  return (
    <View className="flex flex-1">
      <Onboarding
        className='items-center'
        bottomBarHeight={60}
        bottomBarColor='#fff'
        showSkip={false}
        showNext={false}
        showDone={false}
        loop={true}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('./images/welcome.png')} className='' />,
            title: <Text className='font-bold text-2xl mb-10'>Welcome</Text>,
            subtitle: <View>
              <Text className='text-center mb-10'>Find a buddy to run together?</Text>


            </View>,
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('./images/match.png')} className='w-52 h-52' />,
            title: <Text className='font-bold text-2xl mb-5'>Match</Text>,
            subtitle: <View>
              <Text className='text-center ml-5 mr-5 mb-14'>We match you with people that have a large array of similar interests.</Text>

            </View>,
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('./images/enjoy.png')} className='w-52 h-52' />,
            title: <Text className='font-bold text-2xl mb-5'>Enjoy</Text>,
            subtitle: <View>
              <Text className='text-center ml-5 mr-5 mb-14'>Sign up today and enjoy the first month of premium benefits on us.</Text>

            </View>,
          }
        ]}
      />
      <TouchableOpacity className='bg-red-600 px-28 py-4 rounded-2xl ml-5 mr-5'
        onPress={() => navigation.navigate('Home')}
      >
        <Text className='text-white text-center'>Get Started</Text>
      </TouchableOpacity>
      <View className='mt-5 mb-5'>
        <Text className='text-center'>Already have an account? <Text className='font-bold'>Sign in</Text></Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="onboard" component={OnboardingPage}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerLeft: () => <></>,
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

