import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

interface HomeProps {
    match?: any
}

export default class HomeComponent extends Component<HomeProps, {}> {

    render() {
        return <View>
                <Text>Hello Home Page</Text>
                <Link to="/user"><Text> User Page</Text></Link>
            </View>
    }
}