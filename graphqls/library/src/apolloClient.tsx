import {ApolloClient, InMemoryCache, HttpLink, makeVar, createHttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

export const token = makeVar('');

const authLink = setContext((root, {headers}) => ({
    headers: {
        ...headers,
        authorization: `Bearer ${token()}`
    }
}));


const apolloClient = new ApolloClient({
    link: authLink.concat(
        createHttpLink(
            {
                uri: 'http://localhost:3001/api'
            }
        )
    ),
    cache: new InMemoryCache()
});

// const apolloClient = new ApolloClient({
//     link: new HttpLink({
//         uri: 'http://localhost:3001/api',
//     }),
//     cache: new InMemoryCache()
// });


export default apolloClient;
