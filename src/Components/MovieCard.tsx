import React, { useContext } from 'react'
import type { MovieDataType } from '../assets/data'
import { MovieContext } from '../Context/movie-context'
import { Card, CardContent, Box, Stack, Grid, Typography, FormLabel } from '@mui/material'
import MovieIcon from './icons/movie-icon'
import TvSeriesIcon from './icons/series-icon'
import BookmarkIcon from './icons/bookmark-icon'
import BookmarkEmptyIcon from './icons/bookmark-empy-icon'
import Movie from '../pages/movie'

interface Props{
    movie : MovieDataType
}
const MovieCard = ( {movie} : Props) => {

    const { state, dispatch } = useContext(MovieContext);
      //const currentMovie = state.movies.find((item) => item.id === movie.id) ?? movie;
  
    const handleToggleBookMark = (movieId : string) =>{
          dispatch({ type: "TOGGLE_BOOKMARK", id: movieId });
      }

  return (
    <Card variant = "outlined" 
      sx = {{
          bgcolor: "transparent",
          color : "#E0E0E0",
          my : 3,
          border : "none"
      }}
    >
      <CardContent sx = {{
        p:0, 
        position : 'relative'
      }}>
        <Grid spacing = {1} sx = {{position : "relative"}}>

          <Grid>
            <img src = {movie.thumbnail.regular.large}
            alt = " "
            style={
              {
                width : "300px",
                height : "180px",
                borderRadius : "8px"
              }
            }/>
          </Grid>
          
          <Grid component="div">
            <Grid spacing={1} sx = {{
              alignContent : "centrer",
            }}>
              <Typography
                      sx ={
                        {
                          fontSize : 10,
                          color : "#E0E0E0",
                          "aria-label": "year of the movie"
                      }
                  }
              >{movie.year} 
              </Typography>
            </Grid>
            <Grid  key = {movie.id} component = "div">
                  <Box
                      sx = {
                          {
                       width: "2px",
                       height : "2px",
                       borderRadius : "full"
                   }
               }/>
              </Grid>
                   <Grid  key = {movie.id} component = "div">
                        <Typography
                            sx = {
                                {
                                    fontSize : 10,
                                    color : "#E0E0E0",
                                    "aria-label": "category of the movie"
                                }
                            }
                        >{movie.category} 
                        </Typography>
                    </Grid>
                    <Grid  key = {movie.id} component = "div">
                        <Box
                            sx = {
                                {
                                    width: "2px",
                                    height : "2px",
                                    borderRadius : "full"
                                }
                            }/>
                        
                    </Grid>
                    <Grid  key = {movie.id} component = "div">
                        <Typography
                            sx = {
                                {
                                    fontSize : 20,
                                    color : "#E0E0E0",
                                    "aria-label": "Name of the movie"
                                }
                            }
                        >{movie.title} 
                        </Typography>
                    </Grid>
  
          </Grid>
        </Grid>
           <Box
                    style = {{
                        position: "absolute",
                        top : 0,
                        bottom : 0,
                        right : 0,
                        left : 0,
                        display : "flex",
                        justifyContent : "flex-end",
                        padding : "16px"
                    }}>
                        <Box
                        sx ={{
                            p : "1px",
                            backgroundColor : "black",
                            borderRadius : "100%",
                            width: "30px",
                            height:"30px",
                            cursor : "pointer",
                            alignContent:"center",
                            "&: hover" : {opacity : 0.8}
                        }}
                        onClick = {() => {handleToggleBookMark(movie.id)}}>

                           
                            <Box sx ={{
                                transform : "translateX(8px)"
                            }}>
                                {movie.isBookmarked ? <BookmarkIcon fill ={"#E0E0E0"}/> : <BookmarkEmptyIcon /> }
                            </Box>
                            
                      
                        
                        </Box>
                    </Box>


      </CardContent>
    </Card>
  )
}

export default MovieCard