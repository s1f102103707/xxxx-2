/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  put: {
    status: 200
    /** Team updated */
    resBody: Types.Team
    reqBody: Types.TeamUpdateInput
  }

  delete: {
    status: 204
  }
}
