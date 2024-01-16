/* eslint-disable */
export type Methods = {
  /** Creates a new task for the authenticated user. */
  post: {
    status: 201

    /** Task created successfully */
    resBody: {
      id?: number | undefined
      title?: string | undefined
      content?: string | undefined
      userId?: string | undefined
    }

    /** Task data */
    reqBody: {
      title: string
      content?: string | undefined
    }
  }
}
