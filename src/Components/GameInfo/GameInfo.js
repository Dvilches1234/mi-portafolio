
'use client'
//import ReactPlayer from "react-player";
import { Box, Typography, Button, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });



const theme = createTheme();
theme.typography.h2 = {
    fontSize: '0.2rem',
    color: 'white',
}

export default function GameInfo(pageProps) {
    const gameUrl = pageProps.gameUrl
    const goToUrl = () => {
        window.open(gameUrl, "_blank", "noopener,noreferrer")
    }
    return (

        <Box display="flex" justifyContent="center" alignItems="center"
            sx={{

                width: "80%",
                marginLeft: "10%",
                marginBottom: "2%",
                marginTop: "2%",
                //height:"120%",
            }}
        >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={12}>
                    <Typography variant="h3">
                        {pageProps.gameTitle}
                    </Typography>
                </Grid>
                <Grid size={12}>
                    <Box
                        sx={{

                            marginBottom: "2%",
                            
                            border: 1,
                            borderRadius: "1%",
                            borderColor: "white"
                            //height:"120%",
                        }}
                    >

                        <Box 
                         sx={{


                            marginLeft: "4%",
                            marginRight: "4%",
                            marginBottom: "2%",
                            marginTop: "2%",
                            
                            //height:"120%",
                        }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid size={6}>
                                <ReactPlayer
                                    url={pageProps.videoUrl}
                                    controls={true}
                                    width="100%"
                                    height="500px"
                                />
                            </Grid>
                            <Grid size={6}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid size={12}>
                                        <Button variant="contained" onClick={goToUrl}>
                                            <PlayArrowIcon />
                                            Play the game
                                        </Button>
                                    </Grid>
                                    <Grid size={12}>
                                        {pageProps.description}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        </Box>
                    </Box>
                </Grid>
            </Grid>


        </Box>

    )
}