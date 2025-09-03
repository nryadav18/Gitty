import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Alert, Image, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import gitImage from '../../assets/github1.jpg';
import styles from './githubStylings';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


const GitHub = ({navigation}) => {
    const [userName, setUserName] = useState('');

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View contentContainerStyle={styles.container}>
                <ScrollView contentContainerStyle={styles.gitMainContainer}>
                    <Image source={gitImage} style={styles.userImage} />
                    <Text style={styles.gitText}>GitHub Hacker</Text>
                    <View style={styles.gitInputParent}>
                        <FontAwesome5 name="user-secret" style={styles.gitIcon1} />
                        <TextInput
                            onChangeText={setUserName}
                            placeholder="Enter your GitHub Username"
                            placeholderTextColor="grey"
                            style={styles.gitTextInput}
                        />
                    </View>
                    <TouchableOpacity style={styles.gitSubmit} onPress={()=>{navigation.navigate('Account', {'userName' : userName})}}>
                        <Text style={styles.gitSubmitText}>Access</Text>
                    </TouchableOpacity>
                </ScrollView>
                <StatusBar style='inverted' />
            </View>
        </SafeAreaView>
    );
};

export default GitHub;
