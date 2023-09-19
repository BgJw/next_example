import MainLayout from "@/layouts/MainLayout";
import { ITrack } from "@/types/track";
import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import TrackList from "../../../components/TrackList";
import { useEffect, useState } from "react";

const Index = () => {
    const [trackList, setTrackList] = useState<ITrack[]>([]); 
    const router = useRouter();
    
    useEffect( () => {
        fetch('http://localhost:5000/tracks/')
            .then( res =>  res.json())
            .then( res => setTrackList(res))
            .catch( error =>  alert(error))
    }, [trackList.length]);

    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card style={ {width: 900, padding: 10}}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>List Tracks</h1>
                            <Button onClick={ () => router.push('/tracks/create')}>Download track</Button>
                        </Grid>
                    </Box>  
                    {
                        trackList.length  ?
                            <TrackList tracks={trackList} /> 
                            :
                            <p>loading</p>
                    }
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;