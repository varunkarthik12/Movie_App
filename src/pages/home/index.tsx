import { useContext, useReducer, useState, type ChangeEvent } from 'react'
import Layout from '../../Layout/Layout'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { InputAdornment, InputBase, Typography } from '@mui/material';
import SearchIcon from "../../assets/icons/icon-search.svg"
import { MovieTrendList } from '../../Components/MovieTrendList';
import MovieList from '../../Components/MovieList';
import type { MovieDataType } from '../../assets/data';
import { MovieContext, MovieProvider } from '../../Context/movie-context';

 export interface MovieData{
     
      
    id: string,
    title: string,
    thumbnail: {
      trending: {
        small: string,
        large: string,
      },
      regular: {
        small: string,
        medium: string,
        large: string,
      },
    },
    year: number,
    category: string,
    rating: string,
    isBookmarked: boolean,
    isTrending: boolean,
  
  }
const Home = () => {
  const [search, setSearch] = useState<string>('');

    const [searchList, setSearchList] = useState<MovieDataType[]>([]);
    const state =  useContext(MovieContext);;
    console.log(state);

    const movies : MovieDataType[] = state.state.movies;

    const trendingList : MovieDataType[] = movies.filter( (movie) => movie.isTrending);
    const recommendList : MovieDataType[] = movies.filter( (movie) => !movie.isTrending);

  const handleSearch = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    setSearch(event.target.value);

    const newList = movies.filter( (movies) => movies.title.toLowerCase().includes(search.toLowerCase()));

    setSearchList(newList);
  }

 

  return (
    <Layout>
      <Box>
        <Paper
        component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: 'default',
            p: 1,
            backgroundColor: "#9E8A86",
            border: 'none',
          }}
        >
          <InputBase
            placeholder="Search for Movies and TV Series"
            sx={{
              ml: 1,
              flex: 1,
              color: 'white',
              border: 'none',
            }}
            value={search}
            onChange={(e) => handleSearch(e)}
            startAdornment = {
              <InputAdornment  position = "start">
                      <img
                        src = {SearchIcon}
                        alt = "search icon"
                        width = {20}
                        height = {20}
                        color='grey'
                       />
              </InputAdornment>
            }
          />
        </Paper>
        <Box sx ={{

            py : 4,
            px : 4
        }}>
              {search === ""? (
                  <Box sx = {{
                    width : "100"
                  }}>
                      <Box sx = {{width : "100"}}>
                          <Typography variant='h5' sx={{
                            my : 6,
                            fontWeight : 400
                          }}>
                              Trending  
                          </Typography> 
                          <MovieTrendList trendingList = {trendingList}></MovieTrendList>
                      </Box>
                      <Box sx = {{width : "100"}}>
                          <Typography variant='h5' sx={{
                            my : 6,
                            fontWeight : 400
                          }}>
                              Recommended For You  
                          </Typography> 
                          <MovieList recommendList = {recommendList}></MovieList>
                      </Box>
                    </Box>
              ):(
                <Box sx = {{width : "100%"}}>
                    <Box sx = {{width : "100"}}>
                          <Typography variant='h5' sx={{
                            my : 6,
                            fontWeight : 400
                          }}>
                              Found {searchList.length} for {search}
                          </Typography> 
                          <MovieList recommendList = {searchList}></MovieList>
                      </Box>

                </Box>
              )}
        </Box>
        
      </Box>
    </Layout>
  )
}

export default Home