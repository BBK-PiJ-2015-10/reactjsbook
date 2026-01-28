
export type Book = {
    id: number;
    title: string;
    image?: string;
};

export type InputBook = Omit<Book,'id'> & {
    id?: number;
};
