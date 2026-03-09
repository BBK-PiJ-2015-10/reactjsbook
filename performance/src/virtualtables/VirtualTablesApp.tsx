import React, {CSSProperties, ReactNode} from 'react';
import {FixedSizeList, ListChildComponentProps} from "react-window";

const books = new Array(1_000_000)
    .fill({
        title: "Design Patterns",
        author: 'Eric Gamma',
        isbn: '123',
        rating: 5
    })
    .map((book, id) => ({...book, id}));


type InnerProps = {
    children: ReactNode;
    style: CSSProperties
}

const InnerTable: React.FC<InnerProps> = ({children, style}) => {
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
            <tbody style={{...style, position: 'absolute', width: '100%'}}>
            {children}
            </tbody>
        </table>
    )
}

const Row: React.FC<ListChildComponentProps> = ({index, style}) => {
    return (
        <tr style={style}>
            <td style={{width: 50}}>{books[index].id}</td>
            <td style={{width: 200}}>{books[index].title}</td>
            <td style={{width: 200}}>{books[index].author}</td>
            <td style={{width: 200}}>{books[index].isbn}</td>
            <td style={{width: 200}}>{books[index].rating}</td>
        </tr>
    );
}

const VirtualTablesApp: React.FC = () => {

    return (
        <FixedSizeList itemSize={30} height={340}
                       itemCount={books.length} width={750}
                       innerElementType={InnerTable}>
            {Row}
        </FixedSizeList>
    )

};

export default VirtualTablesApp;