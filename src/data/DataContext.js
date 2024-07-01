import {createContext} from 'react';

const DataContext = createContext({
    products : [],
    text : "",
    loading : false,
});

export default DataContext;