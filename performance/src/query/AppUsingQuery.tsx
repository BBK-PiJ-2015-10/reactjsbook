import React from 'react';
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import List from './List';

const queryClient = new QueryClient();

const AppUsingQuery: React.FC = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <List/>
        </QueryClientProvider>
    )
};

export default AppUsingQuery

