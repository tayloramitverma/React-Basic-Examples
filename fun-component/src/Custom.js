import {useState} from 'react';

function useCustomCounter(){
    const [counts, setCounts] = useState(0);
    const handleIncrements = () => {
        setCounts(counts + 1);
    }
    return {
        counts,
        handleIncrements
    }
}

export default useCustomCounter;