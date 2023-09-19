import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const TrackPage = () => {
    const router = useRouter();
    const [track, setTrack] = useState<ITrack>(); 
    
    useEffect( () => {
        fetch(`http://localhost:5000/tracks/${router.query.id}`)
            .then( res =>  res.json())
            .then( (res: ITrack) => setTrack(res))
    }, [track]);
    
    
    return (
        <MainLayout>
            <Button
                variant="outlined"
                style={{fontSize: 56}} 
                onClick={ () => router.back()}>
                    Return
            </Button>
            <Grid container  style={{margin: '20px 0'}}>
                <img src={track?.picture} alt={track?.name} width={200} height={200}/>
                <div style={{margin: '20px 0'}}>
                    <h1>Name: {track?.name}</h1>
                    <h2>Artist: {track?.artist}</h2>
                    <h2>Listens: {track?.listens}</h2>
                </div>
            </Grid>
            <h1>Text track</h1>
            <p>{track?.text}</p>
            <Grid container>
                <TextField label='name' fullWidth>

                </TextField>
                <TextField label='comment' multiline fullWidth rows={4}>

                </TextField>
                <Button >Send</Button>
            </Grid>
        </MainLayout>
    );
};

export default TrackPage;
