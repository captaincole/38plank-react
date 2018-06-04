import React from 'react';
import { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Slider } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

interface HomeProps {
    match?: any
}

const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJldzdAZ21haWwuY29tIiwiZXhwaXJlc0luIjoiMzAwMGQiLCJpYXQiOjE0OTA3Mzc1ODJ9.f2OkREevqhNaNXVQXhVzqY8UZtuURb6HwJKuF0sJ9m8';

export default class HomeScreen extends Component<HomeProps, {}> {
    _featuredSlides = [{
        mainText: 'Get Fit',
        supportingText: 'Give Back',
        backgroundImg: 'abc.jpg'
    }, {
        mainText: 'Get Fitter'
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
            <View><Text>Slide {index}</Text></View>
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
        const windowWidth = Dimensions.get('window').width

        return <View style={pageStyles.container}>

                <Carousel
                    ref={(c: any) => { this._carousel = c }}
                    data={this._featuredSlides}
                    renderItem={this._renderItem}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth}
                    />
                <Text>38Plank Home</Text>
            </View>
    }
}