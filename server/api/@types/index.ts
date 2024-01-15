/* eslint-disable */
export type User = {
  id: string
  email: string
  name: string
}

export type UserCreate = {
  email: string
  name: string
}

export type UserUpdate = {
  email?: string | undefined
  name?: string | undefined
}
