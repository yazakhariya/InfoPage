import { UserActionTypes } from 'src/api/enum'

export interface UserState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any[]
  loading: boolean
  error: null | string
}

interface FetchUsersPayload {
  type: UserActionTypes.FETCH_USERS
}

interface FetchUsersOnsuccessPayload {
  type: UserActionTypes.FETCH_USERS_ONSUCCESS
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any[]
}

interface FetchUsersErrorPayload {
  type: UserActionTypes.FETCH_USERS_ERROR
  payload: string
}

export type UserAction =
  | FetchUsersPayload
  | FetchUsersOnsuccessPayload
  | FetchUsersErrorPayload