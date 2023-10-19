import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Pokemon() {
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        fetchItem()
    }, [])

    const [item, setItem] = useState({});
    const fetchItem = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const item = await response.json();
        setItem(item)
    };

    return (
        <>
            <h1>Pokemon Name: {item.name}</h1>
            <p>Base Experience: {item.base_experience}</p>
            <p>Height: {item.height}</p>
            <p>Weight: {item.weight}</p>
           

        </>)
};

export default Pokemon