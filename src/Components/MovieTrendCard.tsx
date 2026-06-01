import React, { useContext } from 'react'
import type { MovieDataType } from '../assets/data'
import { MovieContext } from '../Context/movie-context'
import { Card, CardContent, Box, Stack, Grid, Typography, FormLabel } from '@mui/material'
import MovieIcon from './icons/movie-icon'
import TvSeriesIcon from './icons/series-icon'
import BookmarkIcon from './icons/bookmark-icon'
import BookmarkEmptyIcon from './icons/bookmark-empy-icon'
import Movie from '../pages/movie'


interface Props {
    movie : MovieDataType
}


export const MovieTrendCard = ( {movie} : Props) => {

    const { state, dispatch } = useContext(MovieContext);
    //const currentMovie = state.movies.find((item) => item.id === movie.id) ?? movie;

    const handleToggleBookMark = (movieId : string) =>{
        dispatch({ type: "TOGGLE_BOOKMARK", id: movieId });
    }
    return (

    <Card 
        key = {movie.id}
        elevation = {0}
        style = {{
            backgroundColor : "transparent"
        }}>
            
            <CardContent
                style = {
                    {
                        padding : 0,
                        position : "relative",
                        display : "flex"
                    }
                
                }>
                    <img src = {movie.thumbnail.regular.large} alt ="" 
                        style={
                            {
                                height : "100%",
                                width : "100%",
                                borderRadius : "8px",
                                objectFit : "cover"    
                            }
                        }/>

                    <Box sx = {{

                        top :0,
                        left : 0,
                        right : 0,
                        bottom : 0,
                        backgroundColor :"black",
                        borderRadius : "8px"

                    }}>

                        <Stack
                            component="div"
                            sx={{
                                mt: "6",
                                spacing: 0,
                                padding: 0,
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                p: 4
                            }}>   
                            

                            <Grid component="div" sx={{
                            alignItems : "center",
                            spacing : "1px"
                            }}>
                                
                                    <Grid  key = {movie.id} component = "div">
                                    <Typography
                                        sx = {
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
                                                width: "1px",
                                                height : "1px",
                                                borderRadius : "full"
                                            }
                                        }/>
                                    
                                </Grid>
                                {/* <Grid  component = "div">
                                {movie.category == "Movie" ? <MovieIcon fill = "E0E0E0"/> : <TvSeriesIcon fill = "E0E0E0"></TvSeriesIcon>}
                                    
                                </Grid> */}

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
                                                width: "1px",
                                                height : "1px",
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
                            
                            
                        </Stack>
                    </Box>

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
                            alignItems : "center",
                            left : "1px",
                            "&: hover" : {opacity : 0.8},
                          
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
