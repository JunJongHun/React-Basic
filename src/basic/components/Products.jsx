import axios from "axios";
import React, { useEffect, useState } from "react";
import useProduct from "../../hooks/useProduct";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProduct({ checked });

  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러남</div>;
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.last_name}</h3>
              <p>{product.email}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
