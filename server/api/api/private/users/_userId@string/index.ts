/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    status: 200
    /** User details */
    resBody: Types.User
  }

  put: {
    status: 200
    /** User updated successfully */
    resBody: Types.User
    /** User data to update */
    reqBody: Types.UserUpdate
  }

  delete: {
    status: 204
  }
}
