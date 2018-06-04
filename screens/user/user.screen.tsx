import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

interface UserProps {
    match?: any
}

export default class UserScreen extends Component<UserProps, {}> {

    render() {
        return <View>
        <Text>38Plank User</Text>
    </View>
    }
}