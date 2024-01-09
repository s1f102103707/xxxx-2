/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  put: {
    status: 200
    /** Player updated */
    resBody: Types.User
    reqBody: Types.PlayerUpdateInput
  }

  delete: {
    status: 204
  }
}
