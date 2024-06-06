const initalState = {
    books: ['Habito atomicos', 'La biblia', 'El principito', 'Ikgai', 'Los evangelinos escarlata', 'El hombre que se enamoro de la luna'],
}


const bookReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'BUY_BOOK':
            return {
                ...state,
                books: state.books.filter(book => book !== action.payload)
            }   
        case 'RETURN_BOOK':
            return {
                ...state,
                books: [...state.books, action.payload]
            }
    }
}

export default bookReducer;