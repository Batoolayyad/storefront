


const initialState ={
    categoriesList:[
      {name:'Electronics',description:'multiple choice of the best Electronics brands'},
      {name:'Food',description:'the best types of food from our farms directly to your kitchen'}
    ],
    activeCategory:{},
}

export default function categoriesReducer(state=initialState,action){
    const {payload,type} = action;
    switch(type){
        case 'CHANGE_ACTIVE':
            let changeActiveCategory={};
            state.categoriesList.forEach(item=>{
                if(item.name === payload){
                    changeActiveCategory=item;
                }
            });
            return {
                categoriesList: state.categoriesList,
                activeCategory:changeActiveCategory
            };
        default:
            return state;
    }
}


export function changeActive(name){
    return {
        type:'CHANGE_ACTIVE',
        payload:name
    }
}