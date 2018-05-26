import React from 'react';
import { Component } from 'react';
import { View, Text, Button } from 'react-native';

interface HomeProps {
    match?: any
}

const jwt = '';

export default class HomeScreen extends Component<HomeProps, {}> {
    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        try {
            let response = await fetch('https://api.38plank.com/challenges', {
                method: 'GET',
                headers: {
                    Authorization: 'jwt ' + jwt
                }
            })
            console.log(response);
        } catch (err) {
            console.warn(err);
        }
    }

    render() {
        return <View style={{ marginTop: '5%' }}>
                <Text>Hello Home Page</Text>
            </View>
    }
}