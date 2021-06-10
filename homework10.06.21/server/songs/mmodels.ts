export interface ISong{
    id: number;
    name:string;
    artist:string;
    upload_date:string;
    media_url:string
}

export interface IPlaylist{
    id: number;
    name: string;
    creation_date:string;
    author:string
    songs:ISong[]
}

export interface ISongPayload{
    
    name:string;
    artist:string;
    upload_date?:string;
    media_url:string
}

export interface IPlaylistPayload{
  
    name: string;
    creation_date?:string;
    author:string
    songs:ISong[]
}

export interface IAuthPayload{
    email:string,
    password:string,
}