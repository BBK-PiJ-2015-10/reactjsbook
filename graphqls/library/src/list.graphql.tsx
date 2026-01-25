import {gql} from "@apollo/client";

gql`
    query BooksList {
        book {
            id
            title
            isbn
        }
    }
`;

gql`
    mutation deleteBook($id: ID!){
        deleteBook(id: $id){
            id
        }
    }
`;