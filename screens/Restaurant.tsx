import React from 'react'
import { SafeAreaView, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import RestaurantHeader from '../components/RestaurantHeader';
import FoodInformation from '../components/FoodInformation';
import RestaurantOrder from '../components/RestaurantOrder';

const Restaurant = ({ route }: any) => {
   const { item, currentLocation } = route.params;
   const [restaurant, setRestaurant] = React.useState(null);
   const [currentLoc, setCurrentLoc] = React.useState(null);
   const [orderItems, setOrderItems] = React.useState([]);
   const scrollX = new Animated.Value(0);

   const navigation = useNavigation<any>();

   React.useEffect(() => {
      if (item && currentLocation) {
         setRestaurant(item);
         setCurrentLoc(currentLocation);
      } else {
         navigation.goBack();
      }
   }, []);

   function editOrder(action: any, menuId: any, price: any) {
      let orderList: any = orderItems.slice()
      let item: any = orderList.filter((a: any) => a.menuId == menuId)

      if (action == "+") {
         if (item.length > 0) {
            let newQty = item[0].qty + 1
            item[0].qty = newQty
            item[0].total = item[0].qty * price
         } else {
            const newItem = {
               menuId: menuId,
               qty: 1,
               price: price,
               total: price
            }
            orderList.push(newItem)
         }

         setOrderItems(orderList)
      } else {
         if (item.length > 0) {
            if (item[0]?.qty > 0) {
               let newQty = item[0].qty - 1
               item[0].qty = newQty
               item[0].total = newQty * price
            }
         }

         setOrderItems(orderList)
      }
   }

   return (
      <SafeAreaView style={tw`flex-1 bg-gray-100`}>
         <RestaurantHeader
            restaurant={restaurant} />
         <FoodInformation
            restaurant={restaurant}
            scrollX={scrollX}
            editOrder={editOrder}
            orderItems={orderItems}
         />
         <RestaurantOrder
            restaurant={restaurant}
            orderItems={orderItems}
            currentLocation={currentLoc}
            navigation={navigation}
            scrollX={scrollX}
         />
      </SafeAreaView>
   )
}

export default Restaurant;
