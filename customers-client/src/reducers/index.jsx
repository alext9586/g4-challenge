import * as actions from "../actions";

export const STAGE_LOADING = 0;
export const STAGE_VIEW_TABLE = 1;
export const STAGE_ADD_CUSTOMER = 2;
export const STAGE_EDIT_CUSTOMER = 3;
export const STAGE_COMMIT_CHANGES = 4;
export const STAGE_SEARCH_CUSTOMER = 5;
export const STAGE_SEARCH_RESULTS = 6;

const initialState = {
  stage: STAGE_LOADING,
  customers: [],
  selectedCustomer: null,
  cancelStage: STAGE_VIEW_TABLE
}

export function customerApp(state = initialState, action) {
  switch(action.type) {
    case actions.LOADING:
      return Object.assign({}, initialState);

    case actions.VIEW_TABLE:
      const customers = action.customers;
      return Object.assign({}, state, {
        stage: STAGE_VIEW_TABLE,
        customers: customers,
        selectedCustomer: null,
        cancelStage: STAGE_VIEW_TABLE
      });

    case actions.VIEW_ADD_CUSTOMER:
      return Object.assign({}, state, {
        stage: STAGE_ADD_CUSTOMER,
        selectedCustomer: null
      });

    case actions.VIEW_EDIT_CUSTOMER:
      const selectedCustomer = action.selectedCustomer;
      return Object.assign({}, state, {
        stage: STAGE_EDIT_CUSTOMER,
        selectedCustomer: selectedCustomer
      });

    case actions.VIEW_SEARCH_CUSTOMER:
      return Object.assign({}, state, {
        stage: STAGE_SEARCH_CUSTOMER,
        selectedCustomer: null
      });

    case actions.VIEW_SEARCH_RESULTS:
      const searchResults = action.searchResults;

      return Object.assign({}, state, {
        stage: STAGE_SEARCH_RESULTS,
        customers: searchResults,
        selectedCustomer: null,
        cancelStage: STAGE_SEARCH_RESULTS
      });

    case actions.CANCEL:
      return Object.assign({}, state, {
        stage: state.cancelStage,
        selectedCustomer: null
      });

    default:
      return state;
  }
}
