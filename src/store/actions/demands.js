import api from '../../services/api';

import { ALL_DEMANDS } from './actionTypes';


// Action Creator
export  function allDemands() {
    return {
        type: 'ALL_DEMANDS',
        payload: 'testando action allDemands'
    }
}
// Action Creator
export function addDemand(demand) {
    return {
        type: 'ADD_DEMAND',
        payload: demand
    }
}

// Action Creator
export function editDemand(demand) {
    return {
        type: 'EDIT_DEMAND',
        payload: demand
    }
}