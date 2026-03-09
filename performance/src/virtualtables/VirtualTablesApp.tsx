import React, {CSSProperties, ReactNode} from 'react';
import {FixedSizeList, ListChildComponentProps} from "react-window";

const books = new Array(1000000)
    .fill({
        title: "Design Patterns",
        author: 'Eric Gamma',
        isbn: '123',
        rating: 5
    })
    .map((book, id) => ({...book, id}));


type InnerProps = {
    tBodyChildren: ReactNode;
    tBodyStyle: CSSProperties
}

const InnerTable: React.FC<InnerProps> = ({tBodyChildren, tBodyStyle}) => {
    return (
        <table>
            <thead>
            <tr>
                <th style={{width: 50}}>ID</th>
                <th style={{width: 200}}>Title</th>
                <th style={{width: 200}}>Author</th>
                <th style={{width: 200}}>ISBN</th>
                <th style={{width: 200}}>Rating</th>
            </tr>
            </thead>
            <tbody style={{...tBodyStyle, position: 'absolute', width: '100%'}}>
            {tBodyChildren}
            </tbody>
        </table>
    )
}

const Row: React.FC<ListChildComponentProps> = ({index, style}) => {
    return (
        <tr style={style}>
            <td>{books[index].id}</td>
            <td>{books[index].title}</td>
            <td>{books[index].author}</td>
            <td>{books[index].isbn}</td>
            <td>{books[index].rating}</td>
        </tr>
    );
}

const VirtualTablesApp: React.FC = () => {

    return (
        <FixedSizeList itemSize={30} height={300}
                       itemCount={books.length} width={750}
                       innerElementType={InnerTable}>
            {Row}
        </FixedSizeList>
    )

};

export default VirtualTablesApp;