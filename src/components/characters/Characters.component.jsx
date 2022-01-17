import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Character from '../character/Character.component'
import './Characters.styles.css'

export default function CharactersWithQuery() {

    const [page, setPage] = useState(1)

    const fetchCharacters = async ({ queryKey }) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
        return response.json()
    }

    const { data, isError, isLoading } = useQuery(["characters", page], fetchCharacters, { keepPreviousData: true })

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h2>Error</h2>
    }
    return (
        <div className='characters'>
            {data.results.map((character, i) => (
                <Character key={i} character={character} />
            ))}
            <div className='buttons'>
                <button disabled={page === 1}
                    onClick={() => setPage(prevState => prevState - 1)}>
                    Previous
                </button>
                <button disabled={!data.info.next}
                    onClick={() => setPage((prevState => prevState + 1))}>
                    Next
                </button>
            </div>
        </div>
    )
}
