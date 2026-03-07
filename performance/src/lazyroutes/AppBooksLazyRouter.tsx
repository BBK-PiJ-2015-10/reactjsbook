import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
//import ListR from './ListR'

const DetailsR = lazy(() => import('./DetailsR'));
const ListR = lazy(() => import('./ListR'));

const books =
    [
        {
            id: 1,
            title: 'JavaScript the Comprehensive Guide',
            author: 'Philip Ackermann',
            isbn: '123',
            rating: 4
        },
        {
            id: 2,
            title:
                'React.js The Comprehensive Guide',
            author:
                'Philip Ackermann',
            isbn:
                '123',
            rating:
                5
        }
        ,
        {
            id: 3,
            title:
                'Node.js The Comprehensive Guide',
            author:
                'Philip Ackermann',
            isbn:
                '123',
            rating:
                5
        }
    ]

const AppWithLazyRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route path='/list' element={<ListR books={books}/>}/>
                    <Route path='/details/:id' element={<DetailsR books={books}/>}/>
                    <Route path='/' element={<Navigate to='/list'/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
};

export default AppWithLazyRouter

//   <Route path='/details:id' element={<Details books={books}/>}/>