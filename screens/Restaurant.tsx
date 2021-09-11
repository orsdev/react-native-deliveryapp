import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import RestaurantHeader from '../components/RestaurantHeader';
import FoodInformation from '../components/FoodInformation';

const Restaurant = ({ route }: any) => {
   const { item, currentLocation } = route.params;
   const [restaurant, setRestaurant] = React.useState(null);
   const [currentLoc, setCurrentLoc] = React.useState(null);

   const navigation = useNavigation<any>();

   React.useEffect(() => {
      if (item && currentLocation) {
         setRestaurant(item);
         setCurrentLoc(currentLocation);
      } else {
         navigation.goBack();
      }
   }, []);

   return (
      <SafeAreaView style={tw`flex-1 bg-gray-100`}>
         <RestaurantHeader
            restaurant={restaurant} />
         <FoodInformation
            restaurant={restaurant}
         />
      </SafeAreaView>
   )
}

export default Restaurant;
