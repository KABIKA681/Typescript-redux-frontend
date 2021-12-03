import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllCountries } from '../../redux/actions'

const Home = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchAllCountries())
    }, [dispatch])

    return (
        <>
            <div>MY LIST</div>

        </>
    )
}

export default Home
