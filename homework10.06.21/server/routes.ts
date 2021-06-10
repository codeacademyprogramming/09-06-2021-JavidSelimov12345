import { SongRouter, PlaylistRouter } from './songs'
import { AuthRouter } from "./auth"

export const ROUTES = [
  {
    path: '/songs',
    router: SongRouter
  },
  {
    path: '/playlist',
    router: PlaylistRouter
  },
  {
    path: '/auth',
    router: AuthRouter
  }
]
