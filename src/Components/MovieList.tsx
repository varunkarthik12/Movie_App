import { Paper } from '@mui/material'
import { Box, flex, Grid } from '@mui/system'
import React from 'react'
import type { MovieDataType } from '../assets/data'
import MovieCard from './MovieCard'

interface Props{
    recommendList : MovieDataType[]
}
const MovieList = ({recommendList} : Props) => {

  console.log("The recommended list : ", recommendList)
  return (
    <Box sx={{
      display : "flex",
      gap : 2,
      overflowX : "scroll"
    }}>
      {recommendList.map( (movie) => {
        return (
          <Grid component="div" key= {movie.id} > 
              <Paper elevation={0} sx = {{backgroundColor : 'transparent'}}>
                  <MovieCard movie = {movie}/>
              </Paper>

          </Grid>
        )
      })}

    </Box>
  )
}

export default MovieList