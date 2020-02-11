import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import api from '../api/firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, ThemeProvider} from 'react-native-elements';
import Input from './InputComponent';
import Spacer from './Spacer';
export default class Login extends Component {
  state = {email: '', password: '', errorMessage: '', loading: false};

  Login = () => {
    const {email, password} = this.state;
    api
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res.user.email);
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message,
          loading: !this.state.loading,
        });
      });
  };

  renderButton() {
    switch (this.state.loading) {
      case true:
        setTimeout(() => {
          this.setState({
            loading: !this.state.loading,
          });
        }, 1000);
        return <ActivityIndicator size="large" color="#0000ff" />;

      default:
        return <Button title="Login" type="outline" onPress={this.Login} />;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Input placeholder="Email" onChange={email => this.setState({email})} />
        <Input
          placeholder="Password"
          errorMessage={this.state.errorMessage}
          onChange={password => this.setState({password})}
        />
        <Spacer>{this.renderButton()}</Spacer>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  space: {
    marginTop: 10,
  },
});
