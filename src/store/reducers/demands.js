import {} from '../actions/actionTypes'

const initialState = {
    min: 1,
    max: 10
}

export default function(state, action) {
    console.log(state, ' ', action)
    return [
    {
        code:"001",
        request:"joao",
        title:"software maneiro",
        hours:"8 horas",
        specialty: "programador",
        deadline: "05/04/2021",
        description: "alguma demanda",
        status: "Ativo",
        requestID: "1"
    },
    {
        code: "002",
        request: "joao",
        title: "software 2",
        hours: "16 horas",
        specialty: "programador",
        deadline: "05/04/2021",
        description: "alguma outra demanda",
        status: "Ativo",
        requestID: "1"
      }
]
}

// switch(action.type) {
//     case NUM_MIN_ALTERADO:
//         return {
//             ...state,
//             min: action.payload
//         }
//     case NUM_MAX_ALTERADO:
//         return {
//             ...state,
//             max: action.payload
//         }
//     default:
//         return state
// }