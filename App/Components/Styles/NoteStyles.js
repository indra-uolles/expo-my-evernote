import { StyleSheet } from 'react-native';
import { Fonts } from '../../Themes/';

export default StyleSheet.create({
    container: {
        paddingBottom: 9,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.16)',
        height: 120,
        marginLeft: 20,
        marginRight: 20
    },
    title: {
        marginTop: 10,
        fontSize: Fonts.size.h1,
        color: '#2d2d2d'
    },
    description: {
        marginTop: 10,
        flex: 1
    }
});