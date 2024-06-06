

export const buyBook = (book) => {
    return {
        type: 'BUY_BOOK',
        payload: book
    }
}


export const returnBook = (book) => {
    return {
        type: 'RETURN_BOOK',
        payload: book
    }
}