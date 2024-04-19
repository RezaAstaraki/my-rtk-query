import React from "react";
import { useGetAllProductsQuery } from "../app/service/dummyData";

const AllProdutcs = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  console.log("all", data);
  {
    if (isError) {
      return <h1>error</h1>;
    }
    if (isLoading) {
      return <h1>loading...</h1>;
    }

    return (
      <div>
        {data?.products.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default AllProdutcs;
