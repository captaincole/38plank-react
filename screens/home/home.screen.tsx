import React from 'react';
import { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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
        const pageStyles = StyleSheet.create({
            container: {
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'blue' 
            }
        })
        return <View style={pageStyles.container}>
                <Text>38Plank Home Again</Text>
            </View>
    }
}