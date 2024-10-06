import axios from 'axios'
import useSWR from 'swr'

const fetcher = () => axios.get("https://luxury-yacht-charter-default-rtdb.europe-west1.firebasedatabase.app/").then(res => res.data)

export default function useYacht () {
    const { data, error, isLoading } = useSWR(`/`, fetcher)
   
    return {
      yacht: data,
      isLoading,
      isError: error
    }
  }