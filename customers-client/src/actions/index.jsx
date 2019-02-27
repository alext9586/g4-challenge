export const LOADING = "LOADING";
export const VIEW_TABLE = "VIEW_TABLE";
export const VIEW_ADD_CUSTOMER = "ADD_CUSTOMER";
export const VIEW_EDIT_CUSTOMER = "EDIT_CUSTOMER";

export function loading() {
  return { type: LOADING };
}

export function viewTable(customers) {
  return { type: VIEW_TABLE, customers: customers };
}

export function viewAddCustomer() {
  return { type: VIEW_ADD_CUSTOMER };
}

export function viewEditCustomer(selectedCustomer) {
  return { type: VIEW_EDIT_CUSTOMER, selectedCustomer: selectedCustomer };
}
