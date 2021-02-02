import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProductsService } from "../../services";

export const Home = () => {
  const { products, loading, error, Fetch, Remove } = ProductsService();
  const { push } = useHistory();

  useEffect(() => {
    Fetch();
  }, []);

  const handleDelete = (id) => {
    Remove(id);
  };

  const toDetail = (id) => {
    push(`/${id}`);
  };

  if (loading) {
    return <h1>Loading . . . . </h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length &&
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <button onClick={() => toDetail(product.id)}>
                    To Details
                  </button>
                  <button onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};
