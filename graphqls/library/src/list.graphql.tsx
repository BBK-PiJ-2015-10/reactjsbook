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