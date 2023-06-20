import { StyleSheet } from "react-native"
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'red',
        // flex: 1,
        marginTop: 20
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    avatar: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 2000,
        marginBottom: 15,
        // backgroundColor: 'red'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
        // backgroundColor: 'red'
        // justifyContent: 'space-between'
    },
    label: {
        marginRight: 20,
        fontSize: 18,
        color: 'grey',
        width: 85,
    },
    input: {
        // backgroundColor: 'red',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        padding: 10
    },
    textButton: {
        textAlign: 'center',
        color: colors.primary,
        fontSize: 16,
        fontWeight: '500'
    },
    inputAndErrorContainer: {
        flex: 1,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        // textTransform: 'capitalize'
        // fontWeight: '400'
    },
});

export default styles;