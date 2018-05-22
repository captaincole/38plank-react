import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

interface UserProps {
    match?: any
}

export default class UserComponent extends Component<UserProps, {}> {

    render() {
        return <View>
        <Text>Hello User Page</Text>
        <Link to="/"><Text> Home Page</Text></Link>
    </View>
    }
}