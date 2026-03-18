import React from "react";
//import {FlatList, Text, View} from "react-native";
import {Text, View} from "react-native";
import {Book} from "./Book";
//import styles from "../../admin/components/List.styles";
import {Headline, Separator, FlatList, ListItem} from "../../admin/components/List.styles";

const books = [
    {
        id: 1,
        title: 'Java 26',
        author: 'Yasser Alejandro Palacios',
        isbn: '4533',
        rating: 5
    },
    {
        id: 2,
        title: 'Clean Code',
        author: 'Palacios',
        isbn: '4533',
        rating: 4
    },
    {
        id: 3,
        title: 'Design Patterns',
        author: 'Yasser',
        isbn: '4533',
        rating: 5
    },
]

const List: React.FC = () => {
    return (
        <View>
            <Headline>Book Management</Headline>
            <FlatList
                ItemSeparatorComponent={() => <Separator/>}
                data={books}
                keyExtractor={(item) => (item as Book).id.toString()}
                renderItem={({item}) => (
                    <ListItem>
                        <Text>{(item as Book).title}</Text>
                        <Text>&gt;</Text></ListItem>)}>
            </FlatList>
        </View>
    )
}

export default List;