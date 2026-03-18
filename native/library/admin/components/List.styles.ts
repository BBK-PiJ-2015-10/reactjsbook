import styled from "@emotion/native";

export const Headline = styled.Text`
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const Separator = styled.View`
    height: 1px;
    border-top-width: 1px;
    border-top-color: darkgray;
`;

export const FlatList = styled.FlatList`
    margin-top: 20px;
`;

export const ListItem = styled.View`
    margin: 20px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
//import {StyleSheet} from "react-native";

// const styles = StyleSheet.create({
//         headline: {
//             marginTop: 30,
//             fontSize: 20,
//             fontWeight: 'bold',
//             textAlign: 'center'
//         },
//         list: {
//             marginTop: 20,
//         },
//         separator: {
//             height: 1,
//             borderTopWidth: 1,
//             borderTopColor: 'darkgrey'
//         },
//         listItem: {
//             marginHorizontal: 10,
//             marginVertical: 20,
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'space-between'
//         }
//     }
// )

//export default styles;