import { UserActionTypes } from '../enum'
import { UserAction, UserState } from './types'

const defaultState: UserState = {
  user: [],
  loading: false,
  error: null,
}

export const userReducer = (
  state = defaultState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { ...state, loading: true }

    case UserActionTypes.FETCH_USERS_ONSUCCESS:
      return { ...state, loading: false, user: action.payload }

    case UserActionTypes.FETCH_USERS_ERROR:
      return { ...state, error: action.payload }

    default:
      return state
  }
}
