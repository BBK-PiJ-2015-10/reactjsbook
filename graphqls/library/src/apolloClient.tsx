
import {ApolloClient, InMemoryCache, HttpLink, makeVar} from "@apollo/client";

const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:3001/api',
    }),
    cache: new InMemoryCache()
});

export const token = makeVar('');

export default apolloClient;
