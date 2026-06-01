import { useContext, type ReactNode } from "react";

import { createContext } from "react";
import { moviesData, type MovieDataType } from "../assets/data";
import { useReducer } from "react";

interface MovieContextProps{
    children : ReactNode
}

interface MovieState{
    movies  : MovieDataType[];
}

const MoviesList : MovieDataType[] = moviesData; 


const initialMovieState : MovieState ={
    movies : MoviesList
}

interface MovieAction {
    type : string,
    id : string

}


export const MovieContext = createContext<{
    state : MovieState,
    dispatch : React.Dispatch<MovieAction>
}>(
    {
        state : initialMovieState,
        dispatch : () => {}
    }
    
)

const MovieReducer =(state : MovieState, action : MovieAction):MovieState =>  {

    switch(action.type)
    {
        case "TOGGLE_BOOKMARK":
            return {
                ...state,
                movies : state.movies.map(
                    (movie) => {
                        if(movie.id === action.id)
                        {
                        return{...movie, isBookmarked: !movie.isBookmarked};
                        
                        }
                        return movie;
                    }),
            };
        default:
                return state;
            
    }

    

};



export const MovieProvider = ({children} : MovieContextProps)=> {
        const[state, dispatch] = useReducer(MovieReducer, initialMovieState);
        return <MovieContext.Provider value = {{state,dispatch}}> {children}</MovieContext.Provider>
}






