import {useState} from 'react'

function useFavouriteProducts() {
    const [state, setState] = useState(false);
    const handleState = () => {
        setState(!state);
    }
    return [state, handleState, setState];
}

export default useFavouriteProducts;
