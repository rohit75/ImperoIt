import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class LandingPage extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to Impero It Demo Project</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('TabDemo')}
          style={{ backgroundColor: 'black', margin: 5 }}
        >
          <Text style={{ color: 'white', margin: 2  }}>Tab Navigation Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('TestStrip')}
          style={{ backgroundColor: 'black', margin: 5 }}
        >
          <Text style={{ color: 'white', margin: 2 }}>Color Demo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
