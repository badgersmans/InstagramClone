import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        // backgroundColor: 'yellow'
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        flex: 1,
    },
    textContainer: {
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 2000,
        marginRight: 20
        // backgroundColor: 'red'
    },
    textTop: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: '700'
    },
    textBottom: {
        textTransform: 'capitalize',
        color: 'grey',
        fontSize: 15
    },
    bioContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    name: {
        fontWeight: '700',
        fontSize: 15,
        marginBottom: 5
    },
    bio: {
        color: 'grey',
        lineHeight: 21,
        letterSpacing: 0.3,
        fontSize: 15,
        marginBottom: 5,
    },
    lessMoreText: {
        color: 'grey'
    },
    buttonContainer: {
        marginLeft: 10, 
        flexDirection: 'row'
    },
});

export default styles;