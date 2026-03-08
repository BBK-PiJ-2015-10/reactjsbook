import React, {Suspense} from 'react';
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";
import List from './List';

const queryClient = new QueryClient();

const AppUsingQuery: React.FC = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary FallbackComponent={({error}) => <div>{(error as Error).message}</div>}>
                <Suspense fallback={<div>...loading data</div>}>
                    <List/>
                </Suspense>
            </ErrorBoundary>
        </QueryClientProvider>
    )
};

export default AppUsingQuery

