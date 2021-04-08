import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const Header = () => {

    const ar = require('../img/ar.png')

    return (
        <View style={[styles.blocks, {flex: 2}]}>
            <Text style={[styles.text, styles.textTitle]}>ARCO</Text>
            <Text style={styles.text}>Sistema de Monitoramento e Controle Remoto</Text>
            <Image source={ar} style={styles.logo}/>
            <Text style={styles.text}>Condicionadores de Ar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
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
    text : {
        fontWeight: 'bold',
    },
    textTitle : {
        fontSize: 32,
        marginTop: 10,
    }
});

export default Header