import api from '../../services/api';

import { ALL_DEMANDS, ADD_DEMAND, EDIT_DEMAND } from './actionTypes';


// Action Creator
export  function allDemands() {
    return {
        type: 'ALL_DEMANDS',
        payload: 'testando action allDemands'
            // data: () => api.get(`/demands`)
        
    }
}
// Action Creator
export function addDemand(demand) {
    return {
        type: ADD_DEMAND,
        payload: demand
    }
}

// Action Creator
export function editDemand(demand) {
    return {
        type: EDIT_DEMAND,
        payload: demand
    }
}