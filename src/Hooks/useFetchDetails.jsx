import {useQuery} from '@tanstack/react-query';


async function fetchCountry(code) {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    if(!response.ok){
        throw new Error("could not fetch")
    }
    return response.json();

}

export function useFetchDetails(countryCode) {
    const {data, isLoading, error} = useQuery({
        queryKey: ['country', countryCode], //calling countryCode ensures cache is stored seperately for each country
        queryFn: () => fetchCountry(countryCode),
        staleTime: 1000*60*5, //5minutes
    });

    return{
        country: data?.[0] || [],
        isLoading,
        error
    }
}


