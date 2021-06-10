

import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react';



import { useSelector } from 'react-redux';



const Songs = () => {

  const song = useSelector(state => state.song)
  const { data } = song
  const { status } = song
  console.log(status)
  console.log(data)
  
  const  handleDelete= (id)=>{
         console.log(id)
  }

  return <>
    {status !== "SUCCESS" ?
      <h1>LOADING</h1> :

      <Container maxWidth="sm">

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Artist</TableCell>
                <TableCell align="right">Media_url</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <Button value={row.id} onClick={()=>handleDelete(row.id)} variant="outlined">
                      del
					</Button>
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.artist}</TableCell>
                  <TableCell align="right">{row.media_url}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>




      </Container>
    }



  </>;

}


export default Songs;