import React from 'react';
import { Component } from 'react';
import { Navigator } from 'react-native-navigation';
import { View, Text, Button, StyleSheet } from 'react-native';

interface ChallengeSelectProps {
    match?: any,
    navigator: Navigator
}

const jwt = '';

export default class ChallengeSelectScreen extends Component<ChallengeSelectProps, {}> {
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

    selectChallenge = () => {
        this.props.navigator.push({
            screen: 'plank.challenge.details',
            title: 'Challenge Details'
        })
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
                <Text>Challenges</Text>
                <Button title={"Select Challenge"} onPress={this.selectChallenge} />
            </View>
    }
}