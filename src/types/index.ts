export type ActivityStatus = 'registering' | 'upcoming' | 'full' | 'ended'

export interface Player {
  id: string
  avatar: string
  name: string
  position?: string
  mvpCount?: number
}

export interface PlayerStats {
  pts: number
  ast: number
  reb: number
}

export interface MatchParticipant extends Player {
  stats: PlayerStats
  isCurrentUser?: boolean
}

export interface MatchResult {
  teamAScore: number
  teamBScore: number
  teamAAvatar: string
  teamBAvatar: string
  courtNo: string
}

export interface LeaderboardEntry extends Player {
  pts: number
  rank: number
  isCurrentUser?: boolean
}

export interface Organizer {
  name: string
  avatar: string
  position: string
  mvpCount: number
}

export interface PointAction {
  id: string
  matchName: string
  reason: string
  points: number
  type: 'plus' | 'minus'
}

export interface Activity {
  id: string
  title: string
  location: string
  address?: string
  distance?: string
  time: string
  cost: string
  status: ActivityStatus
  joinedPlayersCount: number
  maxPlayersCount: number
  players: Player[]
  matchResult?: MatchResult
  participants?: MatchParticipant[]
  organizer?: Organizer
  rules?: string
  heroImage?: string
}
