
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View,Text, TouchableHighlight, ImageBackground,Image } from 'react-native';

const Start = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // TODO: Perform login action here
    };

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.backgroundclr}>
        <Table>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 1, Cell 1</TableCell>
            <TableCell>Row 1, Cell 2</TableCell>
            <TableCell>Row 1, Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2, Cell 1</TableCell>
            <TableCell>Row 2, Cell 2</TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
          </TableRow>
        </Table>
        </View>
    </SafeAreaView>


    );
};
    const styles=StyleSheet.create({
        container:{
            flex:1,
            color:'orange'


        }, backgroundclr: {
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        },
        loginButton: {
            width: '100%',
            height: 40,
            backgroundColor: '#151B54',
            borderRadius: 10,
            marginTop:550 ,
            justifyContent: 'center'
        },
        loginButtonText: {
            fontSize: 18,
            textAlign: 'center',
            color: 'white',
        }
    
        
    })
    
    export default Start
