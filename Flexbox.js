import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Flexbox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ backgroundColor: '#ee5253', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#1dd1a1', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#5f27cd', width: 50, height: 50 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            source={{ uri: 'https://placeimg.com/100/100/tech' }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 14 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Noval Christian</Text>
            <Text>100 ribu Subcriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   style,
// });
