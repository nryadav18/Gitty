import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    container: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gitMainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        position: 'relative'
    },
    gitText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    gitInputParent: {
        height: 50,
        width: 350,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    gitTextInput: {
        flex: 1,
        fontSize: 18,
        color: 'white',
        fontWeight: 900,
    },
    gitIcon1: {
        fontSize: 24,
        color: 'white',
        marginRight: 10,
    },
    gitSubmit: {
        height: 40,
        width: 90,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    gitSubmitText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    loader: {
        marginVertical: 20,
    },
    loaderStyles: {
        height: 200,
        width: 200,
    },
    errorContainer: {
        marginTop: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    userDataContainer: {
        width: 420,
        alignItems: 'center',
        marginTop: 20,
        padding: 5,
        gap: 20,
    },
    userDetails: {
        color: 'white',
        fontSize: 16,
        marginVertical: 2,
    },
    userData1: {
        height: 'auto',
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        gap: 5,
        flexDirection: 'row'
    },
    userImage: {
        height: 150,
        width: 150,
        borderRadius: 100,
    },
    userFollowView: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    userFollow: {
        height: 'auto',
        width: "50%",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        gap: 10,
        borderWidth: 1,
    },
    userFollowers: {
        height: 80,
        width: "auto",
        padding: 10,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    userFollowing: {
        height: 80,
        width: "auto",
        padding: 10,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    userRepos: {
        height: 45,
        width: "auto",
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gitfollowText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 700,
    },
    followCount: {
        fontWeight: 900,
        color: 'white',
        fontSize: 44,
    },
    gitRepoCount: {
        fontSize: 16,
        fontWeight: 700,
        color: 'white',
    },
    repoCount: {
        fontSize: 40,
        fontWeight: 900,
        color: 'white',
    },
    userNameStylings: {
        fontWeight: 900,
        fontSize: 24,
        color: 'white'
    },
    repoList: {
        padding: 1,
    },
    repoData: {
        height: 120,
        width: 340,
        backgroundColor: 'whitesmoke',
        borderRadius: 12,
    },
    rdt1: {
        position: 'relative',
    },
    reponfn: {
        height: "100%",
        width: "75%",
    },
    repoName: {
        fontWeight: 900,
        fontSize: 28,
        position: 'absolute',
        top: 10,
        left: 10,
    },
    visibility: {
        position: 'absolute',
        right: 10,
        top: 1,
    },
    visibilityText: {
        color: 'green',
        fontSize: 20,
        fontWeight: 900,
    },
    repoNumber: {
        fontSize: 30,
        fontWeight: 900,
        color: 'red',
        position: 'absolute',
        top: 90,
        right: 5,
    },
    repoFullName: {
        position: 'absolute',
        top: 80,
        left: 12,
        color: 'grey',
        fontWeight: 600,
        fontSize: 14
    },
});

export default styles;