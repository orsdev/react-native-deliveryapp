import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SIZES, COLORS, icons } from "../contants";

const RestaurantList = ({ item, onPress, getCategoryNameById }: any) => {
   return (
      <TouchableOpacity
         style={{
            marginBottom: SIZES.padding * 2,
         }}
         onPress={onPress}
      >
         <View style={{
            marginBottom: SIZES.padding
         }}>
            <Image
               source={item.photo}
               resizeMode="cover"
               style={{
                  width: '100%',
                  height: 200,
                  borderRadius: SIZES.radius
               }}
            />
            <View
               style={{
                  position: 'absolute',
                  bottom: 0,
                  width: SIZES.width * 0.3,
                  height: 50,
                  backgroundColor: COLORS.white,
                  borderTopRightRadius: SIZES.radius,
                  borderBottomLeftRadius: SIZES.radius,
                  alignItems: 'center',
                  justifyContent: 'center'
               }}>
               <Text style={{
                  fontSize: 16
               }}>{item.duration}</Text>
            </View>
         </View>
         <Text style={{
            fontSize: 16,
            lineHeight: 30
         }}>
            {item.name}
         </Text>
         <View
            style={{
               marginTop: SIZES.padding,
               flexDirection: 'row',
               alignItems: 'center'
            }}>
            <Image
               source={icons.star}
               resizeMode="cover"
               style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.primary,
                  marginRight: 10
               }}
            />
            <Text style={{
               fontSize: 16
            }}>{item.rating}</Text>
            <View style={{
               flexDirection: 'row',
               marginLeft: 10
            }}>
               {
                  item.categories.map((categoryId: any) => {
                     return (
                        <View
                           style={{ flexDirection: 'row' }}
                           key={categoryId}
                        >
                           <Text style={{ fontSize: 16 }}>
                              {getCategoryNameById(categoryId)}</Text>
                           <Text style={{ fontSize: 16, color: COLORS.darkgray }}> . </Text>
                        </View>
                     )
                  })
               }
               {
                  [1, 2, 3].map((priceRating) => (
                     <Text
                        key={priceRating}
                        style={{
                           fontSize: 16,
                           color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                        }}
                     >$</Text>
                  ))
               }
            </View>
         </View>
      </TouchableOpacity>
   );
};

export default RestaurantList;
