import "server-only";
// Garante que ela seja executada apenas no servidor
// e nao no cliente, evitando problemas de renderizacao

// import { unstable_cache } from "next/cache";

export async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products", {
    // se nao houver um no cache o codigo cai em request memorization
    method: "GET",
    cache: "no-cache",
  });
  const products = await response.json();
  return products;
}

// cacheando os dados de produtos por 5 segundos, caso nao haja uma resposta do server
// e transformando a pagina em estatica mesmo com dados dinamicos
// export const cachedGetProducts = unstable_cache(getProducts, ["get-products"], {
//   revalidate: 5000,
// });
