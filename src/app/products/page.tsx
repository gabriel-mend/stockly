import { Button } from "../_components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";

// O Next.js utiliza o "force-dynamic" para renderizar paginas com headers, params ou data caching,
// caso contrario, elas seriam renderizadas como paginas estaticas.

// export const dynamic = "force-dynamic"

export default async function ProductsPage() {
  // sempre que uma pagina utilizar headers, params ou data caching a pagina se torna em uma pagina dinamica
  const products = await getProducts()
  return (
    <div className="w-full space-y-8 p-8 bg-white mx-8 my-8 rounded-lg">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">Gestão de produtos</span>
          <h2 className="text-2xl font-semibold">Produtos</h2>
        </div>

        <Button>
          <Plus size={20} />
          Novos produtos
        </Button>
      </div>
      <DataTable columns={productTableColumns} data={JSON.parse(JSON.stringify(products))} />
    </div>
  );
}