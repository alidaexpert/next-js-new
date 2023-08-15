import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const useProducts = () => {
    const path='http://localhost:5000/dashboardProducts'
    const { data:products=[], error, isLoading,isValidating,mutate } = useSWR(  path, fetcher)
return {
    products, error, isLoading,isValidating,mutate
}
};

export default useProducts;