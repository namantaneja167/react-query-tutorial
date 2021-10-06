import { useQuery} from "react-query"
import axios from 'axios'

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroesPage = () => {
    const {isLoading,data,isError,error} = useQuery(
        'super-heroes',
        fetchSuperHeros,
        {
            cacheTime:5000,
            staleTime:3000,
        }
    );

    if(isLoading){
        return <h1>Loading...</h1>
    }
    
    if(isError){
        return <h1>{error}</h1>
    }

    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            {data?.data.map((hero) => {
                return <div key={hero.name}>{hero.name}</div> 
            })}
        </>
    )
}

export default RQSuperHeroesPage
