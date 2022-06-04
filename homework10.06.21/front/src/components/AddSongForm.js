import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	FormGroup,
	MenuItem,
	Select,
	TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../modules/song/actions';


function AddSongForm({ open, handleClose}) {
	
    const [name, setName] = useState('');
	const [artist, setArtist] = useState('');
	const [media_url, setUrl] = useState('')


    const dispatch = useDispatch();

	const handleSave = React.useCallback(() => {
		const dispatchAddSong = addSong(dispatch);
		dispatchAddSong({ name, artist, media_url });
	}, [dispatch,name, artist, media_url]);

    const handleButton = () => {
		handleSave();

		handleClose();
	};

    const handleName = (event) => {
		setName(event.target.value);
	};
	const handArtist = (event) => {
		setArtist(event.target.value);
	};
	const handleUrl= (event) => {
		setUrl(event.target.value);
	};

	return (
		<Dialog open={open}>
			<DialogTitle>New Song</DialogTitle>
			<DialogContent>
            <Button onClick={()=>handleClose()}  variant="outlined">
						close
					</Button>
				<FormGroup>
					<TextField
						autoFocus
						margin="dense"
						id="price"
						label="Name"
						required
						type="text"
						fullWidth
                        onChange={handleName}
						
					/>
					<TextField
						autoFocus
						margin="dense"
						id="Artist"
						label="ARTIST"
						type="text"
						fullWidth
                        onChange={handArtist}
						
					/>
                    <TextField
						autoFocus
						margin="dense"
						id="Artist"
						label="Media_URL"
						type="text"
						fullWidth
                        onChange={handleUrl}
						
					/>
					
					
					
					
				</FormGroup>

				<br />
				<br />
				<Box display="flex" alignItems="center" justifyContent="center">
					<Button onClick={handleButton} variant="outlined">
						Add song
					</Button>
				</Box>
			</DialogContent>
		</Dialog>
	);
}

export default AddSongForm;