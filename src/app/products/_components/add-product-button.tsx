"use client";
import { Button } from "@/app/_components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

import { z } from "zod";

import { NumericFormat } from "react-number-format";

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").trim(),
  price: z.number().min(0.01, "Preço deve ser maior que zero"),
  stock: z.coerce
    .number()
    .positive({ message: "Estoque deve ser positiva" })
    .int()
    .min(0, "Estoque não pode ser negativo"),
});

type FormSchemaType = z.infer<typeof formSchema>;

export const AddProductButton = () => {
  const form = useForm<FormSchemaType>({
    shouldUnregister: true,
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      stock: 1,
    },
  });

  const onSubmit = (data: FormSchemaType) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus size={20} />
          Novos produto
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>Criar produto</DialogTitle>
              <DialogDescription>
                Insira as informacoes abaixo
              </DialogDescription>
            </DialogHeader>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do produto</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome do produto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preco do produto</FormLabel>
                  <FormControl>
                    <NumericFormat
                      {...field}
                      thousandSeparator="."
                      decimalSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      prefix="R$ "
                      allowNegative={false}
                      placeholder="Digite o preco do produto"
                      customInput={Input}
                      onValueChange={(values) => {
                        field.onChange(values.floatValue);
                      }}
                      onChange={() => {}}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estoque do produto</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Digite o estoque do produto"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="reset" variant="secondary">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit">Criar produto</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
