import React from 'react'
import type { MovieDataType } from '../assets/data'
import { Box, Grid, Paper } from '@mui/material'
import { MovieTrendCard } from './MovieTrendCard'

interface Props{
    trendingList : MovieDataType[]
}

export const MovieTrendList = ({trendingList} : Props) => {
 
  console.log("The trending list is" ,trendingList)

  return (
    <Box sx={{
      display : "flex",
      gap : 2,
      overflowX : "scroll"
    }}>
      {trendingList.map( (movie) => {
        return (
          <Grid component="div" key= {movie.id} > 
              <Paper elevation={0} sx = {{backgroundColor : 'transparent'}}>
                  <MovieTrendCard movie = {movie}/>
              </Paper>

          </Grid>
        )
      })}

    </Box>
  )
}
