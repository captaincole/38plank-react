import React from 'react';
import { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface ChallengeDetailsProps {
    match?: any
}

const jwt = '';

export default class ChallengeDetailsScreen extends Component<ChallengeDetailsProps, {}> {
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
            }
        })
        return <View style={pageStyles.container}>
                <Text>Challenge Details</Text>
            </View>
    }
}