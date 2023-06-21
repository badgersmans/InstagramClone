import { StyleSheet } from "react-native"
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        // backgroundColor: 'red',
        padding: 10,
        marginTop: 10,
    },
    innerContainer: {

    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 2000,
        // marginTop: 10,
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    username: {
        color: colors.grey
    },
});

export default styles;