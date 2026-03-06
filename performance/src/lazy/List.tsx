import React, {lazy, Suspense, useState} from 'react'

const Details = lazy(() => import('./Details'));

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

const List: React.FC = () => {

    const [details, setDetails] = useState<number | null>(null);

    return (
        <>
            {books.map((book) => (
                    <div key={book.id}>
                        {book.title}
                        <button onClick={() => setDetails(book.id)}>
                            Details
                        </button>
                        <Suspense fallback={<div>...loading</div>}>
                            {details === book.id && <Details book={book}/>}
                        </Suspense>
                    </div>
                )
            )
            }
        </>
    )
}

export default List;