import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';


const data = [
    {
      id: '123',
      icon: 'home',
      location: 'Home',
      destination: 'Webster St, Palo Alto, CA',
    },
    {
      id: '456',
      icon: 'briefcase',
      location: 'Work',
      destination: 'San Francisco, California, CA',
    },
    {
      id: '789',
      icon: 'airplane',
      location: 'Airport',
      destination: 'San Francisco Airport SFO',
    },
  ];

const NavFavorites = () => {
  return (
    <FlatList 
    data={data}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200 `, { height: 0.5 }]}></View>
    )}
    renderItem={({item: {location, destination, icon}}) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
                name={icon}
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                type='ionicon'
                color='black'
                size={18}
            />
            <View>
              <Text style={tw`font-semibold text-lg`}>{location}</Text>
              <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    )} 
    />
  );
};

export default NavFavorites

const styles = StyleSheet.create({})