const initState = {
    matches:[
        {id: 1, game: "Catan", date: "10.02.2020", players: ['Denisa, Andrei, Nana'], winner: 'Nana'},
        {id: 2, game: "Azul", date: "10.02.2020", players: ['Denisa, Andrei, Nana'], winner: 'Nana'},
        {id: 3, game: "Monopoly", date: "10.02.2020", players: ['Denisa, Andrei, Nana'], winner: 'Nana'}
    ]
}

const matchReducer = (state = initState, action ) => {
    switch (action.type) {
        case 'CREATE_MATCH':
            console.log("match created", action.match);
            return state;
        case 'CREATE_MATCH_ERROR':
            console.log("create match error", action.err);
            return state;
        default:
            return state;
    }
}

export default matchReducer;