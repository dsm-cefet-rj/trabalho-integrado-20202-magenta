import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import api from "../../../services/api";

const demandsAdapter = createEntityAdapter();

const initialState = demandsAdapter.getInitialState({
  demands:[],
  status: 'not_loaded', 
  error: null
});

export const fetchDemands = createAsyncThunk('demands/fetchDemands', async () => {
  return await api.get(`/demands`);
});
export const addDemandServer = createAsyncThunk('demands/addDemandServer', async (demand) => {
  return await api.post(`/demands`, demand);
});

export const deleteDemandServer = createAsyncThunk('demands/deleteDemandServer', async (idDemand) => {
  await api.delete(`/demands/${idDemand}`);
  return idDemand;
});

export const updateDemandServer = createAsyncThunk('demands/updateDemandServer', async (demand) => {
  return await api.put(`/demands/${demand.id}`, demand);
});

export const demandSlice = createSlice({
  name: 'demands',
  initialState: initialState,
  extraReducers: {
    [fetchDemands.pending]: (state, action) => {state.status = 'loading'},
    [fetchDemands.fulfilled]: (state, action) => {state.status = 'loaded'; demandsAdapter.setAll(state, action.payload);},
    //[fetchDemands.fulfilled]: (state, action) => fulfillDemandsReucer(state, action.payload),
    [fetchDemands.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
    [deleteDemandServer.pending]: (state, action) => {state.status = 'loading'},
    [deleteDemandServer.fulfilled]: (state, action) => {state.status = 'deleted'; demandsAdapter.removeOne(state, action.payload);},
    [addDemandServer.pending]: (state, action) => {state.status = 'loading'},
    [addDemandServer.fulfilled]: (state, action) => {state.status = 'saved'; demandsAdapter.addOne(state, action.payload);},
    [updateDemandServer.pending]: (state, action) => {state.status = 'loading'},
    [updateDemandServer.fulfilled]: (state, action) => {state.status = 'saved'; demandsAdapter.upsertOne(state, action.payload);},
 },
})

export default demandSlice.reducer

export const {
  selectAll: selectAllDemands,
  selectById: selectDemandById,
  selectIds: selectDemandIds
} = demandsAdapter.getSelectors(state => state.demands)




// export const { increment, decrement, incrementByAmount } = demandSlice.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };



// export default function demandsReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'ALL_DEMANDS':
//             return { ...state, demands: action.payload }
//         case 'add_demand':
//             let proxId = 1 + demands.map(d => d.id).reduce((x, y) => Math.max(x, y));
//             return demands.concat([{ ...action.payload, id: proxId }]);

//         case 'update_demand':
//             let index = demand.map(p => p.id).indexOf(action.payload.id);
//             let demandsUpdated = demands.slice();
//             demandsUpdated.splice(index, 1, action.payload);
//             return demandsUpdated;

//         case 'delete_demand':
//             return demands.filter((p) => p.id !== action.payload);

//         default:
//             return state
//     }

// }


