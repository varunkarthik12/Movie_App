import { Box , Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '../icons/home-icon'
import MovieIcon from '../icons/movie-icon'
import TvSeriesIcon from '../icons/series-icon'
import BookmarkIcon from '../icons/bookmark-icon'
import { Link, useLocation } from 'react-router-dom'
import { nnNO } from '@mui/material/locale'

const navLinks = [
    {
        name : "Home",
        icon : HomeIcon,
        link : "/"
    },
     {
        name : "Movies",
        icon : MovieIcon,
        link : "/movies"
    },
     {
        name : "Tv Series",
        icon : TvSeriesIcon,
        link : "/tv-series"
    },
     {
        name : "Bookmark",
        icon : BookmarkIcon,
        link : "/bookmark"
    }
]

const Sidebar = () => {
    const {pathname } = useLocation();
  return (
    <Box
        sx = {
            {
                backgroundColor :  "#161d2f",
                display  : "flex",
                flexDirection : {
                    xs : "row",
                    lg : "column"
                },
                borderRadius : 2,
                padding : 2,
                alignItems : "center",
                justifyContent : "space-between",
                width : {
                    sm : "100%",
                    lg : 200
                }
            }
        }>

        <Box 
            sx = {{
                display : "flex",
                flexDirection : {
                    xs  : "row",
                    lg : "column"
                },
                gap : 5,
                alignItems : {
                    xs  : "center",
                    lg : "flex-start"
                },
                width: "100%"

            }}>
            
            <Typography variant="h5" component= "h1"  sx = {{ 
                fontWeight : 400,
                fontSize : 18,
                my : 2
            }}>
                Pickashow App
            </Typography>

            <Box
                sx = {{
                    py: {
                        xs : "0px",
                        ls : "16px"
                    },
                    display : 'flex',
                    flexDirection : {
                        xs : 'row',
                        lg : 'column'
                    },
                    gap : 4,
                    color:"white"

                }}>
                    {navLinks.map((nav) => {
                        return <Link
                                key = {nav.name}
                                to = {nav.link}
                                style={{ textDecoration: "none"}}
                                color='white'>
                            <Box sx = {
                                {
                                    display : "flex",
                                    alignItems : 'center',
                                    gap : 2,
                                    color : "white",
                                    textDecoration : "none"
                                }
                            }>
{/*                                 <nav.icon fill = "white"></nav.icon>
 */}                                <Typography>{nav.name}</Typography>
                            </Box> 
                        </Link>
                    })}

            </Box>
                
        </Box>
    </Box>

    
  )
}

export default Sidebar