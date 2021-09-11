import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SIZES, COLORS } from "../contants";

const MainCategories = ({ item, onPress, selectedCategory }) => {
  return (
    <TouchableOpacity
      style={{
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        backgroundColor:
          selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: "center",
        marginRight: SIZES.padding,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            selectedCategory?.id == item.id ? COLORS.white : COLORS.lightGray,
        }}
      >
        <Image
          source={item.icon}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </View>
      <Text
        style={{
          marginTop: SIZES.padding,
          color: selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
          fontSize: 16,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default MainCategories;
