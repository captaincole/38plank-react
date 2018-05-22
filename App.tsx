import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import HomeComponent from './components/home/home.comp';
import UserComponent from './components/user/user.comp';

const appRoutes: any = [{
  path: '/',
  exact: true,
  component: HomeComponent
}, {
  path: '/user',
  component: UserComponent
}]

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
              {appRoutes.map( (route: any, i: number) => {
                return <Route key={i} {...route} />
              })}
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
