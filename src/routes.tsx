import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/home";
import Bookmark from "./pages/bookmark";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";


export const routes = createBrowserRouter(
    [
        {
            path : "/",
            element : <Home />,
            errorElement : <Error/>
        },
        {
            path : "/bookmark",
            element : <Bookmark />,
            errorElement : <Error/>
        },
        {
            path : "/movies",
            element : <Movie />,
            errorElement : <Error/>
        },
        {
            path : "/tv-series",
            element : <TvSeries />,
            errorElement : <Error/>
        }

    ]
)