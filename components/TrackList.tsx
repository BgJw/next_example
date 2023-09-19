import { ITrack } from "@/types/track";
import { Box, Grid } from "@mui/material";
import TrackItem from "./TrackItem";

interface ITrackList {
    tracks: ITrack[],
}


const TrackList = ({tracks}: ITrackList) => {
    return (
        <Grid container direction='column'>
            <Box p={2}>
                {
                    tracks.map( track => (
                        <TrackItem key={track._id} track={track} />
                    ))
                }
            </Box>
        </Grid>
    );
};

export default TrackList;