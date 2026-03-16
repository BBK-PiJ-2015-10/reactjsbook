import React from "react";
import {FlatList, Text, View} from "react-native";
import {Book} from "./Book";
import styles from "../../admin/components/List.styles";

const books = [
    {
        id: 1,
        title: 'Java 25',
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
            <Text style={styles.headline}>Book Management</Text>
            <FlatList<Book>
                style={styles.list}
                ItemSeparatorComponent={() => <View style={styles.separator}/>}
                data={books}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.listItem}><Text>{item.title}</Text><Text>&gt;</Text></View>)}></FlatList>
        </View>
    )
}

export default List;