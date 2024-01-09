/* eslint-disable */
export type User = {
  id: string
  email: string
  name: string
}

export type Team = {
  id: string
  name: string
}

export type PlayerStat = {
  id: string
  userId: string
  battingAverage: number
  homeRuns: number
  runsBattedIn: number
  stolenBases: number
}

export type TeamStat = {
  id: string
  teamId: string
  wins: number
  losses: number
  ties: number
}

export type TeamCreateInput = {
  name: string
}

export type TeamUpdateInput = {
  name: string
}

export type PlayerCreateInput = {
  email: string
  name: string
}

export type PlayerUpdateInput = {
  email: string
  name: string
}
