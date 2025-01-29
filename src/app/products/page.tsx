import { db } from "@/lib/prisma";
import { Button } from "../_components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";

export default async function ProductsPage() {
  const products = await db.product.findMany()
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
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
}