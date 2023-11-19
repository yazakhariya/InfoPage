import { Dispatch } from 'redux'
import axios from 'axios'
import { UserAction } from 'src/api/reducer/types'
import { UserActionTypes } from 'src/api/enum'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.FETCH_USERS,
      })
      const response = await axios.get(
        'https://layout.solvintech.ru/nuxt/api'
      )
      dispatch({
        type: UserActionTypes.FETCH_USERS_ONSUCCESS,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Error',
      })
    }
  }
}
