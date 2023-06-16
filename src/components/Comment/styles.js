import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    commentContainer: {
        fontWeight: 'bold', 
        lineHeight: 19, 
        // backgroundColor: 'red', 
    },
    lessMoreText: {
        color: 'grey'
    },
    avatar: {
        width: '11%',
        aspectRatio: 1,
        borderRadius: 2000,
        marginRight: '3%',
        // marginBottom: '10%',
        // margin: '3%'
    },
    footer: {
        flexDirection: 'row',
        gap: '10%',
        marginTop: '1.5%',
        // marginBottom: '20%',
        // backgroundColor: 'red'
    }
});

export default styles;