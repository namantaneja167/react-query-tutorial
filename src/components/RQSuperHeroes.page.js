import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {

    const onSuccess = (data) => {
        console.log('Successful');
    }

    const onError = (error) => {
        console.log('Error');
    }

    const {isLoading,data,isError,error,refetch} = useSuperHeroesData(onSuccess, onError);
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
            {/* {data?.data.map((hero) => {
                return <div key={hero.name}>{hero.name}</div> 
            })} */}
            {data.map((heroName) => {
                return <div key={heroName}>{heroName}</div> 
            })}

        </>
    )
}

export default RQSuperHeroesPage
