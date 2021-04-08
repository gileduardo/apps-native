import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Switch,
    ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import Header from '../components/Header'

export default class MainScreen extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
          on_off: false,  
          loading: false,
        }
    }

    onOff() {

        let new_status = !this.state.on_off

        this.setState({
            on_off: new_status,
            loading: true,
        })

        this.remoteConfigOnOff(1)
    }

    remoteConfigOnOff(ar) {

        let API_URL = 'http://arco.ifprinteligente.com.br/api.php/ar/' + ar + "/"
        // let API_URL = 'http://192.168.100.66/slim/arco/rest.php/ar/' + ar + "/"

        if(this.state.on_off) API_URL += "0" 
        else API_URL += "1"; 

        console.log(API_URL)

        setTimeout(() => {

            axios.get(API_URL)
            .then(response => {
                const {data} = response
                this.setState({   
                    loading: false,
                })
                console.log(data)
            }).catch(error => {
                this.setState({
                    loading: false,
                });
                console.log("ERRO - Acesso API")
            });

        }, 2000)
    }

    render() {

        let on_off 
        
        if(this.state.on_off)
            on_off  = require('../img/on.png')
        else 
            on_off  = require('../img/off.png')

        if(this.state.loading) {
            return (
                <View style={styles.main}>
                    <Header />
                    <View style={[styles.blocks, {flex: 1}]}>
                    <ActivityIndicator size = "large" color="#AA0000"/>
                    </View>
                    <View style={[styles.blocks, {flex: 1}]}></View>
                </View>
            )
        }
        else {  
            return (
                <View style={styles.main}>
                    <Header />
                    <View style={[styles.blocks, {flex: 1}]}>
                        <Switch
                            trackColor={{ false: "black", true: "black" }}
                            thumbColor={this.state.on_off ? "#090" : "#C00"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.onOff() }
                            value={this.state.on_off}
                            style={{ transform: [{ scaleX: 2.5 }, { scaleY: 2.5 }] }}
                        />
                    </View>
                    <View style={[styles.blocks, {flex: 1}]}>
                        <Image source={on_off} style={styles.status}/>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        borderWidth: 10,
        borderColor: "black",
    },
    blocks: {
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        marginTop: 10,
        marginBottom: 10,
        width: 280, 
        height: 190,
    },
    status: {
        width: 100, 
        height: 100,
    },
});

