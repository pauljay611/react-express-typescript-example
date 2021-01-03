import { createAction } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { IStore } from "../../types";
import constants from "./constants";

export const fetchAllStoresSuccess = createAction(
  constants.FETCH_ALL_STORES_SUCCESS,
  (stores: IStore[]) => stores
)();

export const fetchAllStores = createAction(constants.FETCH_ALL_STORES)();

export const fetchAllStoresError = createAction(
  constants.FETCH_ALL_STORES_ERROR,
  (error: Error) => error
)();

export const setAllStores = createAction(
  constants.SET_ALL_STORES,
  (stores: IStore[]) => stores
)();

export const getStore = createAction(constants.GET_STORE, (id: number) => id)();

export default {
  fetchAllStoresSuccess,
  fetchAllStores,
  fetchAllStoresError,
  getStore,
  setAllStores,
} as const;
