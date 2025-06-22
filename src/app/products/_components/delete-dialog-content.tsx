import { deleteProduct } from "@/app/_actions/product/delete-product";
import {
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/app/_components/ui/alert-dialog";
import { toast } from "sonner";

interface DeleteProductDialogContent {
  productId: string;
}

export function DeleteProductDialogContent({
  productId,
}: DeleteProductDialogContent) {
  const handleContinueClick = async () => {
    try {
      await deleteProduct({ id: productId });
      toast.success("Produto deletado com sucesso!");
    } catch (error) {
      toast.error("Error deleting product");
    }
  };
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Voce tem certeza?</AlertDialogTitle>
        <AlertDialogDescription>
          Voce esta prestes a deletar o produto. Esta acao nao pode ser
          Desfeita. deseja continuar?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction onClick={handleContinueClick}>
          Continuar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
