import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './githubStylings';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const REPO_COLORS = ['#FFDDC1', '#F7E2E2', '#D6E6FF', '#FCE1FF', '#D9FFB3', '#E8F9FD'];

const Account = ({ navigation, route }) => {

    const { userName } = route.params;

    const [userData, setUserData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [repoloader, setRepoLoader] = useState(false);
    const [error, setError] = useState('');
    const [repo, setRepo] = useState([]);
    const getBackgroundColor = (index) => REPO_COLORS[index % REPO_COLORS.length];

    useEffect(() => {
        if (userName == "") {
            Alert.alert('Error', 'Please enter a GitHub username.');
            return;
        }

        setLoader(true);
        setRepoLoader(true)
        setError('');
        setUserData(null);

        axios.get(`https://api.github.com/users/${userName}`)
            .then(response => {
                setLoader(false);
                setUserData(response.data);
            })
            .catch(() => {
                setLoader(false);
                setError('User not found. Please try again.');
            });

        axios.get(`https://api.github.com/users/${userName}/repos`)
            .then(response => {
                setRepoLoader(false)
                setRepo(response.data);
            })
            .catch(() => {
                console.log("Repo Not Found")
            });
    }, [])


    return (
        <SafeAreaView style={styles.mainContainer}>
            <View contentContainerStyle={styles.container}>
                <ScrollView contentContainerStyle={styles.gitMainContainer}>

                    {loader && (
                        <ActivityIndicator size="large" color="red" style={styles.loader} />
                    )}

                    {error ? (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    ) : userData && (
                        <View style={styles.userDataContainer}>
                            <View>
                                <Text style={styles.userNameStylings}>{userData.name} ({userData.login})</Text>
                            </View>
                            <View style={styles.userData1}>
                                <TouchableOpacity>
                                    <Image source={{ uri: userData.avatar_url }} style={styles.userImage} />
                                </TouchableOpacity>
                                <View style={styles.userFollow}>
                                    <View style={styles.userFollowView}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Followers', { 'userName': userName })} style={styles.userFollowers}>
                                            <Text style={styles.followCount}>{userData.followers}</Text>
                                            <Text style={styles.gitfollowText}>Followers</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('Following', { 'userName': userName })} style={styles.userFollowing}>
                                            <Text style={styles.followCount}>{userData.following}</Text>
                                            <Text style={styles.gitfollowText}>Following</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.userRepos}>
                                        <Text style={styles.repoCount}>{userData.public_repos}</Text>
                                        <Text style={styles.gitRepoCount}>Repositories</Text>
                                    </View>
                                </View>
                            </View>
                            {repoloader && (
                                <ActivityIndicator size="large" color="red" style={styles.loader} />
                            )}
                            {
                                repo && repo.map((item, index) => {
                                    return (
                                        <View key={index} style={styles.repoList}>
                                            <View style={[styles.repoData, { backgroundColor: getBackgroundColor(index) }]}>
                                                <View style={styles.rdt1}>
                                                    <View style={styles.reponfn}>
                                                        <Text style={styles.repoName}>{item.name}</Text>
                                                        <Text style={styles.repoFullName}>{item.full_name}</Text>
                                                    </View>
                                                    <View style={styles.visibility}>
                                                        <Text style={styles.visibilityText}>{item.visibility}</Text>
                                                    </View>
                                                    <Text style={styles.repoNumber}>{index + 1}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    );
                                })
                            }
                        </View>
                    )}

                </ScrollView>
                <StatusBar style='auto' />
            </View>
        </SafeAreaView>
    )
}

export default Account;