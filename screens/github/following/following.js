import { StyleSheet, Text, View, ScrollView, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const REPO_COLORS = ['#FFDDC1', '#F7E2E2', '#D6E6FF', '#FCE1FF', '#D9FFB3', '#E8F9FD'];

const Following = ({ navigation, route }) => {

    const { userName } = route.params;
    const [loader, setLoader] = useState(false);
    const [followingData, setfollowingData] = useState([])

    useEffect(() => {
        setLoader(true)
        axios.get(`https://api.github.com/users/${userName}/following`)
            .then(succ => {
                setLoader(false)
                setfollowingData(succ.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }, [userName])

    const getBackgroundColor = (index) => REPO_COLORS[index % REPO_COLORS.length];

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.titleText}>Following of {userName}</Text>
                {loader && (
                    <ActivityIndicator size="large" color="red" style={styles.loader} />
                )}
                {
                    followingData ? (
                        followingData.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('Account', {'userName' : item.login})} key={index} style={[styles.followingParent, { backgroundColor: getBackgroundColor(index) }]}>
                                    <Image source={{ uri: `${item.avatar_url}` }} style={styles.followingImage} />
                                    <Text style={styles.followerName}>{item.login}</Text>
                                    <Text style={styles.followerRepo}>{item.id}</Text>
                                </TouchableOpacity>
                            )
                        })
                    )
                    : <Text style={{color : 'red', fontSize : 20,}}>No Body is Following this Account</Text>
                }
                <StatusBar style='auto' />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Following

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    container: {
        width: 400,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
    },
    titleText: {
        color: 'white',
        fontWeight: 800,
        marginBottom : 30,
        fontSize: 28,
    },
    followingParent: {
        height: 100,
        width: "96%",
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        margin: 12,
        backgroundColor: 'white',
        position: 'relative'
    },
    followingImage: {
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 1,
        position: 'absolute',
        left: 20,
    },
    followerName: {
        fontWeight: 900,
        fontSize: 26,
        position: 'absolute',
        top: 18,
        left: 140
    },
    followerRepo: {
        fontSize: 14,
        position: 'absolute',
        top: 60,
        fontWeight: 900,
        left: 140,
        color: 'grey',
        height: 'auto',
        width: 230,
    }
})