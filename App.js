import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungVolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0,
    };
  }
 render() {
   return (
     <View style={{ flex: 1, backgroundColor: '#FFE4C4' }}>

        <View style={{ backgroundColor: '#FFEBCD' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
            Menghitung volume balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#E9967A' }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput
            style={{ height: 40 }}
              placeholder="Masukkan lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />
            <TextInput
            style={{ height: 40 }}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#00BFFF' }}>
          <Text style={{ padding: 10, fontSize: 20 }} >
              Alas = {this.state.panjang} {'\n'}
              Lebar = {this.state.lebar} {'\n'}
              Tinggi = {this.state.tinggi} {'\n'}
              volume = {this.state.volume}
          </Text>
         </View>
   </View>
    );
  }
}

AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
