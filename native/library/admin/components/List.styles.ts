import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
        headline: {
            marginTop: 30,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        list: {
            marginTop: 20,
        },
        separator: {
            height: 1,
            borderTopWidth: 1,
            borderTopColor: 'darkgrey'
        },
        listItem: {
            marginHorizontal: 10,
            marginVertical: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    }
)

export default styles;