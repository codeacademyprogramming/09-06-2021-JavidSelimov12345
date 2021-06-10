import * as React from 'react';

import { getSong } from './modules/song/actions'

import { useDispatch } from 'react-redux';
import Songs from './components/Songs'
import { Button, Container } from '@material-ui/core';
import AddSongForm from './components/AddSongForm';
import { Link } from 'react-router-dom';



const App = () => {

	const [open, setOpen] = React.useState(false)
	const dispatch = useDispatch();
	React.useEffect(() => {
		getSong(dispatch);

	}, [dispatch]);

	const handleFormOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	  }


	return <>
		<Container maxWidth="sm">
			<h1>Songs List</h1>
			<Button onClick={handleFormOpen} variant='contained'>
				Add Song
            </Button>
			<Link to="/playlist">Playlist</Link>
			<br/>
			<br/>
		</Container>

		<Songs/>

		<AddSongForm open={open} handleClose={handleClose}  />


	</>

};

export default App;
