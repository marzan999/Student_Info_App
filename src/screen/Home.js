import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export const STUDENT_LIST = [
  {
    name: 'marzan',
    description: 'student',
    image: require('../../assets/marzan.jpeg')
  },
  {
    name: 'nitish',
    description: 'student',
    image: require('../../assets/nitish.jpg')

  },
  {
    name: 'maruf',
    description: 'student',
    image: require('../../assets/maruf.jpg')
  }
]

export default function Home() {
  return (
    <View>
      <TouchableOpacity style={styles.viewStyle}>
        <Text style={styles.textStyle}>Marzan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewStyle}>
        <Text style={styles.textStyle}>Nitish</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewStyle}>
        <Text style={styles.textStyle}>Maruf</Text>
      </TouchableOpacity>
    </View>

  )
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 20,
    margin: 10
  },
  textStyle: {
    fontSize: 30,
  }
})

