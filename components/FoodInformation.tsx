import React from 'react';
import {
   Text,
   View,
   Image,
   TouchableOpacity,
   Animated
} from 'react-native';
import { icons, SIZES, COLORS } from '../contants';

const FoodInformation = ({ restaurant, scrollX, editOrder, orderItems }: any) => {

   function getOrderQty(menuId: any) {
      let orderItem: any = orderItems.filter((a: any) => a.menuId == menuId);

      if (orderItem.length > 0) {
         return orderItem[0].qty;
      }

      return 0;
   }

   return (
      <Animated.ScrollView
         horizontal
         pagingEnabled
         scrollEventThrottle={16}
         snapToAlignment="center"
         showsHorizontalScrollIndicator={false}
         onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } }
         ], { useNativeDriver: false })}
      >
         {
            restaurant?.menu.map((item: any, index: number) => (
               <View
                  key={"menu-" + index}
                  style={{ alignItems: 'center' }}>
                  <View
                     style={{ height: '50%' }}>
                     <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                           width: SIZES.width,
                           height: '100%'
                        }}
                     />

                     <View
                        style={{
                           flexDirection: 'row',
                           position: 'absolute',
                           width: SIZES.width,
                           justifyContent: 'center',
                           height: 50,
                           bottom: -20
                        }}
                     >
                        <TouchableOpacity
                           style={{
                              width: 50,
                              backgroundColor: COLORS.white,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderBottomLeftRadius: 25,
                              borderTopLeftRadius: 25
                           }}
                           onPress={() => editOrder('-', item.menuId, item.price)}>
                           <Text
                              style={{ fontSize: 25 }}
                           >-</Text>
                        </TouchableOpacity>
                        <View
                           style={{
                              width: 50,
                              backgroundColor: COLORS.white,
                              alignItems: 'center',
                              justifyContent: 'center'
                           }}>
                           <Text style={{ fontSize: 20 }}>
                              {getOrderQty(item.menuId)}
                           </Text>
                        </View>
                        <TouchableOpacity
                           style={{
                              width: 50,
                              backgroundColor: COLORS.white,
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderBottomRightRadius: 25,
                              borderTopRightRadius: 25
                           }}
                           onPress={() => editOrder('+', item.menuId, item.price)}
                        >
                           <Text style={{ fontSize: 25 }}
                           >+</Text>
                        </TouchableOpacity>
                     </View>
                  </View>

                  <View
                     style={{
                        width: SIZES.width,
                        alignItems: 'center',
                        marginTop: 15,
                        paddingHorizontal: SIZES.padding * 2
                     }}
                  >
                     <Text
                        style={{
                           marginVertical: 10,
                           textAlign: 'center',
                           fontSize: 22
                        }}>{item.name} - {item.price.toFixed(2)}</Text>
                     <Text
                        style={{
                           fontSize: 18,
                           textAlign: 'center'
                        }}>
                        {item.description}
                     </Text>
                  </View>

                  <View
                     style={{
                        flexDirection: 'row',
                        marginTop: 5
                     }}
                  >
                     <Image
                        source={icons.fire}
                        style={{
                           width: 20,
                           height: 20,
                           marginRight: 10
                        }}
                     />
                     <Text style={{
                        fontSize: 18,
                        color: COLORS.darkgray
                     }}>{item.calories.toFixed(2)} cal</Text>
                  </View>
               </View>
            ))
         }
      </Animated.ScrollView>
   )
}

export default FoodInformation;
