import { View, Text, SafeAreaView, ScrollView, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

export default function Details({route}) {
  const {topic} = route.params;
  const {name, description, image} = topic;
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
        {image ? <Image source={image} style={{ alignSelf: 'center', width: Dimensions.get('screen').width , height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}
        <Text style={styles.textStyleName}>{name}</Text>
        <Text style={styles.textStyleDetails}>{description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textStyleName: {
    fontSize: 45,
    textTransform: 'uppercase', 
    fontWeight: 'bold',
    marginLeft: 150, 
    marginTop: 20,
    marginBottom: 20,
    color: '#006400'
  }, 
  textStyleDetails: {
    fontSize: 25,
    margin: 10, 
    color: '#800000'
  }
});