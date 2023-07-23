import { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [state, setState] = useState({
      search: "",
      books: { total: 0, results: [] },
    });
    return (
        <Context.Provider value={{state, setState}}>
            {children}
        </Context.Provider>
    )
    }

export { Context, ContextProvider }