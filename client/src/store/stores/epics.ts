import { Epic } from 'redux-observable'
import { isOfType } from 'typesafe-actions'
import { from } from 'rxjs'
import { catchError, filter, map, mergeMap } from 'rxjs/operators'

import * as API from '../../services/api/store'

import constants from './constants'
import { ActionsType, StoreState } from './types'
import actions from './actions'

export const getAllStoresEpic: Epic<
	ActionsType,
	ActionsType,
	StoreState,
	typeof API
> = (action$, store, { getStoresAPI }) =>
	action$.pipe(
		filter(isOfType(constants.GET_ALL_STORES)),
		mergeMap(() => from(getStoresAPI()).pipe(map(actions.setAllStores)))
	)
