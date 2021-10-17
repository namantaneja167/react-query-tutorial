import { useQuery} from "react-query"
import axios from 'axios'

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroesPage = () => {
    const {isLoading,data,isError,error,refetch} = useQuery(
        'super-heroes',
        fetchSuperHeros,
        {
            cacheTime:5000,
            staleTime:3000,
            // refetchOnMount:true,
            // refetchOnWindowFocus:'always',
            // refetchInterval:5000,
            // refetchIntervalInBackground:true,
            enabled:false,
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
            <button onClick={refetch}>Fetch Heroes</button>
            {data?.data.map((hero) => {
                return <div key={hero.name}>{hero.name}</div> 
            })}
        </>
    )
}

export default RQSuperHeroesPage
