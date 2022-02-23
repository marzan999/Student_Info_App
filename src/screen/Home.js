import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export const STUDENT_LIST = [
  {
    name: 'marzan',
    description: 'student a',
    image: require('../../assets/marzan.jpeg')
  },
  {
    name: 'nitish',
    description: 'student b',
    image: require('../../assets/nitish.jpg')

  },
  {
    name: 'maruf',
    description: 'student c',
    image: require('../../assets/maruf.jpg')
  }
]

export default function Home({ navigation }) {

  const renderItem = ({ item, index }) => {
    const { name } = item

    return (
      // <View>
      //   <TouchableOpacity style={styles.viewStyle}>
      //     <Text style={styles.textStyle}>Marzan</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity style={styles.viewStyle}>
      //     <Text style={styles.textStyle}>Nitish</Text>
      //   </TouchableOpacity>

      //   <TouchableOpacity style={styles.viewStyle}>
      //     <Text style={styles.textStyle}>Maruf</Text>
      //   </TouchableOpacity>
      // </View>
      <TouchableOpacity onPress={() => navigation.navigate("Details", { topic: item })} style={styles.viewStyle}>
        <View>
          <Text style={styles.topicName} >{name}</Text>
        </View>
      </TouchableOpacity>

    )
  }


  return (
    <SafeAreaView>
      <FlatList
        data={STUDENT_LIST}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.name}
      />
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  )

}



const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 30,
    margin: 10
  },
  textStyle: {
    fontSize: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between'
},
rowCentered: {
    flexDirection: 'row',
    alignItems: 'center'
},
topicName: {
    marginLeft: 20,
    textTransform: 'uppercase', 
    fontSize: 30, 
}
})

