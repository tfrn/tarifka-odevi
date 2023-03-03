import { useEffect, useState } from "react";
import axios from 'axios';

function useFetch(url){
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState([]);

    const fetchData = async () => {
        try {
          const {data: responseData} = await axios.get(url); // response olarak dönen değeri {} ile parçalayıp içinden sadece data değerlerini aldık, ona da useState'imizin adıyla çakıştığı için alias olara productData adını verdik.
          setData(responseData);
          setLoading(false);
        } catch(error){
          setError(error.message);
          setLoading(false);
        }
      };

    useEffect(() => {
        fetchData();
    },[]);

    return {error, loading, data}

}

export default useFetch;