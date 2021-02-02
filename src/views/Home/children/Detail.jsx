import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductsService } from "../../../services";

export const Detail = () => {
  const { id } = useParams();
  const { product, loading, error, FetchById } = ProductsService();

  useEffect(() => {
    FetchById(id);
  }, []);

  if (loading) {
    return <h1>Loading . . . </h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <main>
      <h1>DETAIL PRODUCT: {product.id} </h1>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <Link to="/">To Home</Link>
    </main>
  );
};
