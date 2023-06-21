import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        // flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        // backgroundColor: 'red',
        // marginTop: '-5%'
    },
    postHeader: {
        // flexDirection: 'row',
        justifyContent: 'center',
        // marginRight: 20,
        // backgroundColor: 'red',
        // height: '11%'
        // paddingTop: '5%',
    },
    photoNameContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        // backgroundColor: 'green', 
        width: '90%'
    },
    profileImage: {
        width: '12%',
        aspectRatio: 1,
        borderRadius: 2000,
        marginRight: '3%',
        margin: '3%'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    dotIcon: {
        fontSize: 24,
        color: 'black',
        position: 'absolute',
        right: 20
        // marginLeft: 'auto'
    },
    footer: {
        marginHorizontal: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        // gap: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    icon: {
        marginRight: '2.5%',
    },
    description: {
        fontWeight: 'bold'
    },
    lessMoreText: {
        color: 'grey'
    }
});

export default styles;