import React from 'react';
import { Component } from 'react';
import { View, ImageBackground, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigator } from 'react-native-navigation';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Assets } from '../../assets/assets';
import { HomeStyles } from './home.style';
import * as _ from 'lodash';

interface HomeProps {
    navigator: Navigator,
    match?: any
}

const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJldzdAZ21haWwuY29tIiwiZXhwaXJlc0luIjoiMzAwMGQiLCJpYXQiOjE0OTA3Mzc1ODJ9.f2OkREevqhNaNXVQXhVzqY8UZtuURb6HwJKuF0sJ9m8';

export default class HomeScreen extends Component<HomeProps, {}> {
    _windowDimensions = Dimensions.get('window')
    _featuredSlides = [{
        mainText: 'Get Fit',
        supportingText: 'Give Back',
        buttonText: 'Challenge Yourself',
        buttonAction: () => {
            this.props.navigator.push({
                screen: 'plank.challenge.select',
                title: 'Challenge Details'
            })
        },
        backgroundImg: Assets.plankFacing
    }, {
        mainText: 'Get Fit',
        supportingText: 'Give Back',
        buttonText: 'Challenge Yourself',
        buttonAction: () => {
            this.props.navigator.push({
                screen: 'plank.challenge.select',
                title: 'Challenge Details'
            })
        },
        backgroundImg: Assets.plankFacing    
    }]

    componentDidMount() {
        this.loadData()
    }

    async loadData() {
        try {
            let response: Response = await fetch('https://api.38plank.com/v1/challenges', {
                method: 'GET',
                headers: {
                    Authorization: 'JWT ' + jwt
                }
            })
            let jsonResponse = await response.json();
            console.log(jsonResponse.data)
        } catch (err) {
            console.warn(err);
        }
    }

    _renderItem = ({item, index}: any) => {
        return (
            <View style={HomeStyles.headerContainer}>
                <ImageBackground source={item.backgroundImg}
                    style={{width: this._windowDimensions.width , height: this._windowDimensions.width * .6}}>
                    <Text style={HomeStyles.callToAction}>{item.mainText}</Text>
                    <Text style={HomeStyles.callToAction}>{item.supportingText}</Text>
                    <TouchableOpacity style={HomeStyles.headerButton} onPress={item.buttonAction} >
                        <Text style={HomeStyles.buttonText}>{item.buttonText}</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
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
        });

        return <View style={pageStyles.container}>

                <Carousel
                    // @ts-ignore
                    ref={(c: any) => { this._carousel = c }}
                    data={this._featuredSlides}
                    renderItem={this._renderItem}
                    sliderWidth={this._windowDimensions.width}
                    itemWidth={this._windowDimensions.width}
                    />
                <Text>38Plank Home</Text>
            </View>
    }
}