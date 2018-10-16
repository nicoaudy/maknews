import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { login } from '../redux/actions/auth';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            email: '',
            password: ''
        };
    }

    userLogin (e) {
        this.props.onLogin(this.state.email, this.state.password);
        e.preventDefault();
    }

    render () {
        return (
            <ScrollView>
                <Container>
                    <Content>
                        <Text style={{fontSize: 27, marginBottm: 30, marginTop: 30}}>{this.state.route}</Text>
                        <Item floatingLabel style={{ marginBottom: 20 }}>
                            <Label>Email</Label>
                            <Input
                                autoCapitalize='none'
                                autoCorrect={false}
                                autoFocus={true}
                                keyboardType='email-address'
                                value={this.state.email}
                                onChangeText={(text) => this.setState({ email: text })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={(text) => this.setState({ password: text })} />
                        </Item>
                        <View style={{margin: 7}}/>
                        <Button onPress={(e) => this.userLogin(e)} title={this.state.route}/>
                    </Content>
                </Container>
            </ScrollView>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => { dispatch(login(email, password)); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
