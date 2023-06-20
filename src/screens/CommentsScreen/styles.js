import { StyleSheet } from "react-native"
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        // backgroundColor: 'lightblue'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#DCDCDC',
        paddingVertical: 5,
        paddingHorizontal: 20,
        // backgroundColor: 'red'
    },
    image: {
        width: '11%',
        aspectRatio: 1,
        borderRadius: 2000,
        marginRight: '3%',
    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
        // marginBottom: 10
        
    },
    postButtonContainer: {
        marginLeft: 'auto',
    },
    postButton: {
        textTransform: 'uppercase',
        color: colors.primary,
        fontWeight: 'bold'
    },
});

export default styles;