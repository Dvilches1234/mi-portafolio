'use-client'
import Image from "next/image";
import { Box, Typography, Button, Divider} from "@mui/material";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from "@mui/material/Grid2"
import GameInfo from "../Components/GameInfo/GameInfo"
import {exportGameData} from "../utils/utils"

const theme = createTheme();
theme.typography.h2 = {
    fontSize: '0.2rem',
    color: 'white',
}
export default function Home() {

  const gameData = exportGameData()
  return (
    <Box  display="flex" justifyContent="center" alignItems="center">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={12}>
          <Typography variant="h2" justifyContent={"center"} alignItems={"center"}>
            Welcome to my portfolio!
          </Typography>
        </Grid>
        <Grid size={12}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {gameData.map((game) => (
              <Grid size={12}>
                <GameInfo
                gameTitle={game.gameTitle}
                gameUrl={game.gameUrl}
                videoUrl={game.videoUrl}
                description={game.description}
              />          
            
              </Grid>        
            ))}
          </Grid>
        </Grid>
      </Grid>

      

      
    </Box>
  );
}
