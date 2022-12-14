import { useEffect, useState } from "react";
import axios from "axios";
export default function useProduct({ checked }) {
  console.log(checked);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    setTimeout(() => {
      axios
        .get(`https://reqres.in/api/users?page=${checked ? 1 : 2}}`)
        .then((res) => {
          console.log(res.data.data);
          setProducts(res.data.data);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000);

    return () => {
      console.log("π§Ή κΉ¨λνκ² μ²­μνλ μΌλ€μ ν©λλ€.");
    };
  }, [checked]);

  return [loading, error, products];
}
