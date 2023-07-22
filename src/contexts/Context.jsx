import { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [state, setState] = useState({search:"", loading:false, books: [], authors: []})
    return (
        <Context.Provider value={{state, setState}}>
            {children}
        </Context.Provider>
    )
    }

export { Context, ContextProvider }