import { StyleSheet } from "react-native"
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    camera: {
        width: '100%',
        aspectRatio: 3 / 4,
    },
    buttonsContainer: {
        position: 'absolute',
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',
    },
    shutterCircle: {
        width: 75,
        aspectRatio: 1,
        borderRadius: 75,
        backgroundColor: 'white'
    },
});

export default styles;