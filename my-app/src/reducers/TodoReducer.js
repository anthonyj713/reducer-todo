export const initialState =  {
    items:[{ 
        item: 'Learn about reducers',
        completed: false,
        id: 324342523
    }]
}
;

export const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            let newItem = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return{
               ...state,
                items: [...state.items, newItem]
            };
        default: return state;
    }
}
