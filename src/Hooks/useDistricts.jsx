import { useEffect, useState } from 'react';

const useDistricts = () => {

    const [Upzila, setUpzila] = useState([]);
    const [Districts, setDistricts] = useState([]);
    useEffect(() => {
        fetch("/public/Data/UpaZila.json")
            .then(res => res.json())
            .then(data => {
                setUpzila(data)
            })
    }, [])
    useEffect(() => {
        fetch("/public/Data/District.json")
            .then(res => res.json())
            .then(data => {
                setDistricts(data)
            })
    }, [])



    return [Upzila, Districts]
};

export default useDistricts;