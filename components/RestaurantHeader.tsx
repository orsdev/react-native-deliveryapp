import React from 'react';
import {
   Text,
   View,
   Image,
   TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

import { icons, SIZES, COLORS } from '../contants';

const RestaurantHeader = ({ restaurant }: any) => {
   const navigation = useNavigation<any>();

   return (
      <View
         style={{
            flexDirection: 'row',
            paddingVertical: 50,
            paddingHorizontal: 10,
         }}
      >
         <TouchableOpacity
            style={{
               width: 50,
               justifyContent: 'center',
               paddingHorizontal: 6,
            }}
            onPress={() => navigation.goBack()}
         >
            <Image
               source={icons.back}
               resizeMode="contain"
               style={{
                  width: 30,
                  height: 30
               }} />
         </TouchableOpacity>
         <View style={tw`flex-1 items-center justify-center bg-gray-200 rounded-full`}>
            <View
               style={{
                  height: 50,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: SIZES.padding * 3,
                  borderRadius: SIZES.radius
               }}
            >
               <Text style={tw`text-gray-500 text-lg`}>
                  {restaurant?.name}
               </Text>
            </View>
         </View>
         <TouchableOpacity
            style={{
               width: 50,
               justifyContent: 'center',
               paddingHorizontal: SIZES.padding * 2
            }}>
            <Image
               source={icons.list}
               resizeMode="contain"
               style={{
                  width: 30,
                  height: 30
               }} />
         </TouchableOpacity>
      </View>

   )
}

export default RestaurantHeader;
