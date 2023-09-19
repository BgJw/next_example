import { ITrack } from "@/types/track";
import { Card, Grid, IconButton } from "@mui/material";
import {PlayArrow, Pause, Delete} from '@mui/icons-material';
import { useRouter } from "next/router";

import s from "../src/styles/trackItem.module.scss";


interface ITrackItem {
    track: ITrack,
    isActive?: boolean
}

const TrackItem = ({track, isActive = false}: ITrackItem) => {
    const router = useRouter();

    const removeTrack = async () => {
        await fetch(`http://localhost:5000/tracks/${track._id}`, { method: 'DELETE' });
        router.push('/tracks');
        router.reload();
    };
    return (
        <Card className={s.track } onClick={ () => router.push('/tracks/' + track._id)} >
            <IconButton onClick={ e => e.stopPropagation() }>
                {
                    !isActive 
                    ? 
                        <PlayArrow />
                    : 
                        <Pause />
                }
            </IconButton>
            <img width={65} height={65} src={`http://localhost:5000/${track.picture}`} alt={track.name} />
            <Grid container direction='column' style={ {width: '200px', margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={ {fontSize: '12px', color: 'gray'} }>{track.artist}</div>
            </Grid>
            {
                !isActive && <div>02:42 / 03:21</div>
            }
            <IconButton onClick={ e => e.stopPropagation() } style={ {marginLeft: 'auto'}}>
                <Delete onClick={() => removeTrack() } />
            </IconButton>
        </Card>
    );
};

export default TrackItem;