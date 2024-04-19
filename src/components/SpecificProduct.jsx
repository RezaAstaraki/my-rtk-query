import React from "react";
import { useGetProductsByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
  const { isLoading, isError, data } = useGetProductsByIdQuery(5);

  console.log("data", data);

  {
    if (isError) {
      return <h1>error</h1>;
    }
    if (isLoading) {
      return <h1>loading...</h1>;
    }

    if (data) {
      return (
        <div>
          <h1>{data?.title}</h1>
          <p>{data?.category}</p>
          <p>{data?.description}</p>
          <p>{data?.category}</p>
          <p>{data?.discountPercentage}</p>
          <p>{data?.price}</p>

          {/* <div>{JSON.stringify(data)}</div> */}
        </div>
      );
    }
  }
};

export default SpecificProduct;
