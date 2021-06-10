import express, { Request, Response,Router,NextFunction } from 'express'
import { Songs, Playlist } from './models'
import { ISongPayload, IPlaylistPayload } from './mmodels'
import {verify} from 'jsonwebtoken'

export const SongRouter = express.Router()
async function requireAuth(req:Request,res:Response,next:NextFunction){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1];
  let JWT_SECRET_KEY='verysecretkey'
  if(token){

    try {
      const userPayload = await verify(token,JWT_SECRET_KEY);
      if(userPayload){
        next()
      }
    } catch (error) {
      res.status(401).json({
        errors:error.message
      })
    }

     
  }else{
    res.status(401).json({
      errors:['not allowed']
    })
  }
}
//list
SongRouter.get('/',requireAuth, async (req: Request, res: Response) => {
  try {
    const songs = await Songs.find()
    res.status(200).json(songs)
  } catch (error) {
    res.status(500).json({ mesage: error.mesage })
  }
})
//create
SongRouter.post('/', async (req: Request, res: Response) => {
  const songPayload: ISongPayload = {
    ...req.body
  }
  const song = new Songs(songPayload)
  try {
    const newSong = await song.save()
    res.status(200).json(newSong)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//get
SongRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const song = await Songs.findById(id)
    if (!song) {
      res.status(404).json({ message: 'Not found' })
    } else {
      res.json(song)
    }
  } catch (error) {
    res.status(500).json({ mesage: error.mesage })
  }
})

//update

SongRouter.patch('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    let song = await Songs.findById(id)
    if (!song) {
      res.status(404).json({ message: 'Not found' })
    } else {
      await Songs.findByIdAndUpdate(id, req.body, {
        useFindAndModify: true
      })
      song = await Songs.findById(id)

      res.json(song)
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
// delete
SongRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const song = await Songs.findById(id)
    if (!song) {
      res.status(404).json({ message: 'Not found' })
    } else {
      await song.remove()
      res.json({ message: 'Deleted' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export const PlaylistRouter = express.Router()

// get
PlaylistRouter.get('/', async (req: Request, res: Response) => {
  try {
    const list = await Playlist.find()
    res.status(200).json(list)
  } catch (error) {
    res.status(500).json({ mesage: error.mesage })
  }
})

//cretae
PlaylistRouter.post('/', async (req: Request, res: Response) => {
  const listPayload: IPlaylistPayload = {
    ...req.body
  }
  const event = new Playlist(listPayload)
  try {
    const newlist = await event.save()
    res.status(200).json(newlist)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// delete
PlaylistRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const list = await Playlist.findById(id)
    if (!list) {
      res.status(404).json({ message: 'Not found' })
    } else {
      await list.remove()
      res.json({ message: 'Deleted' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//update

PlaylistRouter.patch('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    let list = await Playlist.findById(id)
    if (!list) {
      res.status(404).json({ message: 'Not found' })
    } else {
      await Playlist.findByIdAndUpdate(id, req.body, {
        useFindAndModify: true
      })
      list = await Playlist.findById(id)

      res.json(list)
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
