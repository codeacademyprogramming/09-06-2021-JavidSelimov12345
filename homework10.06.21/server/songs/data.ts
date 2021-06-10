import { ISong, IPlaylist } from './mmodels'

export const Playlist: IPlaylist[] = [
  {
    id: 1,
    name: 'MyPlyalist',
    creation_date:
      'Mon Jun 04 2021 12:24:52 GMT+0400 (Azerbaijan Standard Time)',
    author: 'benjamin',
    songs: []
  }
]

export const Songs: ISong[] = [
  {
    id: 2,
    name: 'Forever',
    artist: 'Madonna',
    upload_date: 'Mon Jun 07 2021 12:24:52 GMT+0400 (Azerbaijan Standard Time)',
    media_url: 'https//google.com'
  },
  {
    id: 3,
    name: 'minover',
    artist: 'zidan',
    upload_date: 'Mon Jun 07 2021 12:44:52 GMT+0400 (Azerbaijan Standard Time)',
    media_url: 'https//google.com'
  }
]
