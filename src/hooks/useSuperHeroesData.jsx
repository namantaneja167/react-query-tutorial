import { useQuery} from "react-query"
import axios from 'axios'

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheroes')
}


export const useSuperHeroesData = ( onSuccess,onError)=>{
  
    return useQuery(
        'super-heroes',
        fetchSuperHeros,
        {
            // cacheTime:5000,
            // staleTime:3000,
            // refetchOnMount:true,
            // refetchOnWindowFocus:'always',
            // refetchInterval:5000,
            // refetchIntervalInBackground:true,
            // enabled:false,
            onSuccess,
            onError,
            select:(data) =>{
                const superHeroeNames = data.data.map((hero)=>hero.name)
                return superHeroeNames
            }
        }
    );

}