import React from 'react';
import {
   Text,
   View,
   Image,
   TouchableOpacity
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { icons, SIZES, COLORS } from '../contants';

const Header = ({ currentLocation }: any) => {
   return (
      <View
         style={{
            flexDirection: 'row',
            height: 50
         }}
      >
         <TouchableOpacity
            style={{
               width: 50,
               justifyContent: 'center',
               paddingHorizontal: 6
            }}>
            <Image
               source={icons.nearby}
               style={{
                  width: 30,
                  height: 30
               }} />
         </TouchableOpacity>
         <View style={tw`flex-1 items-center justify-center`}>
            <View
               style={{
                  height: '70%',
                  width: '100%',
                  backgroundColor: COLORS.lightGray3,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: SIZES.radius
               }}
            >
               <Text style={tw`text-gray-500 text-lg`}>
                  {currentLocation.streetName}
               </Text>
            </View>
         </View>
         <TouchableOpacity
            style={{
               width: 50,
               justifyContent: 'center',
               paddingHorizontal: 6
            }}>
            <Image
               source={icons.basket}
               resizeMode="contain"
               style={{
                  width: 30,
                  height: 30
               }} />
         </TouchableOpacity>
      </View>

   )
}

export default Header;
