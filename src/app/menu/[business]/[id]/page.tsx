"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import { AlertCircle, Instagram } from "lucide-react";

type FoodType = "HAMBURGUER" | "PETISCOS" | "BEBIDAS" | "SOBREMESAS";

interface Food {
  tipo: FoodType;
  nome: string;
  valor: number;
  descricao?: string;
  quantidade: number; // Novo campo adicionado
  imagem: string;
}

const foods: Food[] = [
  {
    tipo: "HAMBURGUER",
    nome: "X-Tudo",
    valor: 25.9,
    descricao:
      "Pão, hambúrguer, queijo, presunto, ovo, alface, tomate e molhos especiais",
    quantidade: 0,
    imagem: "hamburguer.jpg",
  },
  {
    tipo: "PETISCOS",
    nome: "Batata Frita",
    valor: 15.5,
    descricao: "Porção de batatas fritas crocantes",
    quantidade: 0,
    imagem: "batata.jpg",
  },
  {
    tipo: "BEBIDAS",
    nome: "Refrigerante",
    valor: 5.0,
    descricao: "Lata 350ml",
    quantidade: 0,
    imagem: "refrigerante.jpg",
  },
  {
    tipo: "SOBREMESAS",
    nome: "Pudim",
    valor: 8.9,
    descricao: "Pudim de leite condensado",
    quantidade: 0,
    imagem: "pudim.jpg",
  },
  {
    tipo: "HAMBURGUER",
    nome: "Vegetariano",
    valor: 23.9,
    descricao:
      "Pão integral, hambúrguer de soja, queijo, alface, tomate e molho especial",
    quantidade: 0,
    imagem: "hamburguer.jpg",
  },
  {
    tipo: "PETISCOS",
    nome: "Isca de Frango",
    valor: 18.9,
    descricao: "Iscas de frango empanadas",
    quantidade: 0,
    imagem: "isca.jpg",
  },
  {
    tipo: "BEBIDAS",
    nome: "Suco Natural",
    valor: 7.5,
    descricao: "Copo 300ml",
    quantidade: 0,
    imagem: "suco.jpg",
  },
  {
    tipo: "SOBREMESAS",
    nome: "Sorvete",
    valor: 10.0,
    descricao: "2 bolas de sorvete com calda",
    quantidade: 0,
    imagem: "sorvete.jpg",
  },
  {
    tipo: "HAMBURGUER",
    nome: "Bacon Lover",
    valor: 27.9,
    descricao: "Pão, hambúrguer, muito bacon, queijo e molho barbecue",
    quantidade: 0,
    imagem: "hamburguer.jpg",
  },
  {
    tipo: "PETISCOS",
    nome: "Anéis de Cebola",
    valor: 16.9,
    descricao: "Anéis de cebola empanados e fritos",
    quantidade: 0,
    imagem: "aneis.jpg",
  },
  {
    tipo: "BEBIDAS",
    nome: "Cerveja",
    valor: 8.0,
    descricao: "Long neck 355ml",
    quantidade: 0,
    imagem: "cerveja.jpg",
  },
  {
    tipo: "SOBREMESAS",
    nome: "Brownie",
    valor: 12.9,
    descricao: "Brownie de chocolate com sorvete",
    quantidade: 0,
    imagem: "brownie.jpg",
  },
  {
    tipo: "HAMBURGUER",
    nome: "Frango Crispy",
    valor: 24.9,
    descricao: "Pão, frango empanado crocante, queijo, alface e molho especial",
    quantidade: 0,
    imagem: "hamburguer.jpg",
  },
  {
    tipo: "PETISCOS",
    nome: "Nachos",
    valor: 22.9,
    descricao: "Nachos com queijo, guacamole e pico de gallo",
    quantidade: 0,
    imagem: "nachos.jpg",
  },
  {
    tipo: "BEBIDAS",
    nome: "Milk-shake",
    valor: 13.9,
    descricao: "Copo 400ml",
    quantidade: 0,
    imagem: "milkshake.jpg",
  },
  {
    tipo: "SOBREMESAS",
    nome: "Cheesecake",
    valor: 14.9,
    descricao: "Fatia de cheesecake com calda de frutas vermelhas",
    quantidade: 0,
    imagem: "cheesecake.jpg",
  },
  {
    tipo: "HAMBURGUER",
    nome: "Double Cheese",
    valor: 29.9,
    descricao: "Pão, dois hambúrgueres, muito queijo e molho especial",
    quantidade: 0,
    imagem: "hamburguer.jpg",
  },
  {
    tipo: "PETISCOS",
    nome: "Bolinho de Bacalhau",
    valor: 25.9,
    descricao: "6 unidades de bolinho de bacalhau",
    quantidade: 0,
    imagem: "bolinho.jpg",
    },
  {   
    tipo: "BEBIDAS",
    nome: "Água Mineral",
    valor: 3.5,
    descricao: "Garrafa 500ml",
    quantidade: 0,
    imagem: "agua.jpg",
  },
  {
    tipo: "SOBREMESAS",
    nome: "Torta de Limão",
    valor: 9.9,
    descricao: "Fatia de torta de limão",
    quantidade: 0,
    imagem: "torta.jpg",
  },
];

export default function Menu({
  params,
}: {
  params: { business: string; id: string };
}) {
  const [activeTab, setActiveTab] = useState<FoodType>("HAMBURGUER");
  const [foodItems, setFoodItems] = useState<Food[]>(foods);
  const [add, setAdd] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const listOfBusiness = [
    {
      id: "beco-burguer",
      name: "Beco Burguer",
    },
    {
      id: "insano-hamburgueria",
      name: "Insano Hamburgueria",
    },
    {
      id: "churrascaria-boa-vista",
      name: "Churrascaria Boa Vista",
    },
  ];

  const tabs: any[] = [
    { tipo: "HAMBURGUER", icon: "icons8-fast-food-40.png" },
    { tipo: "PETISCOS", icon: "icon-potato.png" },
    { tipo: "BEBIDAS", icon: "icon-drink.png" },
    { tipo: "SOBREMESAS", icon: "icon-dessert.png" },
  ];

  const filteredFoods = foodItems.filter((food) => food.tipo === activeTab);

  function getBusinessName(businessId: string): string {
    const business = listOfBusiness.find((b) => b.id === businessId);
    return business ? business.name : "Empresa não encontrada";
  }

  function verifyBusiness(businessId: string): boolean {
    const business = listOfBusiness.find((b) => b.id === businessId);
    return !!business;
  }

  const updateQuantity = (nome: string, increment: number) => {
    setAdd(true);
    setTimeout(() => {
      setAdd(false);
    }, 200);
    setFoodItems((prevFoods) =>
      prevFoods.map((food) =>
        food.nome === nome
          ? { ...food, quantidade: Math.max(0, food.quantidade + increment) }
          : food
      )
    );
  };

  const selectedItems = foodItems.filter((item) => item.quantidade > 0);
  const totalValue = selectedItems.reduce(
    (total, item) => total + item.valor * item.quantidade,
    0
  );
  const hasSelectedItems = selectedItems.length > 0;

  const formatPedido = () => {
    let pedidoString = "Nome ----- Quantidade ----- Valor\n";
    selectedItems.forEach((item) => {
      pedidoString += `${item.nome.padEnd(20)} ${item.quantidade
        .toString()
        .padStart(5)} ${(item.valor * item.quantidade)
        .toFixed(2)
        .padStart(10)}\n`;
    });
    pedidoString += `\nValor total: R$ ${totalValue.toFixed(2)}`;
    pedidoString += '\n\nDigite "ok" para confirmar o pedido!';
    return pedidoString;
  };

  const enviarMensagem = async (numero: string, mensagem: string) => {
    try {
      const response = await fetch("/enviar-mensagem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numero, mensagem }),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem");
      }

      const data = await response.json();
      console.log("Mensagem enviada com sucesso:", data);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000); // Esconde o alerta após 5 segundos
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return verifyBusiness(params.business) ? (
    <div className="flex flex-col items-center min-h-screen w-full px-3 bg-[#f7f7f7]">
      {verifyBusiness(params.business) ? (
        <div className="w-full lg:w-[640px] relative">
          <header className="bg-red-600 shadow-md z-10 p-4 w-full lg:w-[640px] rounded-xl flex items-center justify-between gap-2 mb-4 mt-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="https://genialmaker.com.br/wp-content/uploads/2024/03/logo-hamburgueria.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h4 className="text-xl font-bold text-white">
                {getBusinessName(params.business)}
              </h4>
            </div>
          </header>

          <main className="w-full pb-20">
            <div className="mb-4 flex justify-start items-center space-x-2 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.tipo}
                  className={`flex items-center gap-1 justify-center px-6 md:px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.tipo
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab.tipo)}
                >
                  <Image
                    src={"/" + tab.icon}
                    alt="Follow us on Twitter"
                    height={40}
                    width={40}
                  />
                  <p>{tab.tipo}</p>
                </button>
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              {filteredFoods.map((food) => (
                <Card
                  key={food.nome}
                  className="w-full rounded-2xl border-none shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
                >
                  <CardHeader>
                    <Image
                      src={"/" + food.imagem}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="rounded-t-2xl mb-2"
                    />
                    <CardTitle>{food.nome}</CardTitle>
                    <CardDescription>{food.descricao}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <p>Valor: R$ {food.valor.toFixed(2)}</p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(food.nome, -1)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center active:bg-gray-300"
                        disabled={food.quantidade === 0}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <span>{food.quantidade}</span>
                      <button
                        onClick={() => updateQuantity(food.nome, 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center active:bg-gray-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </main>

          <Dialog>
            <DialogTrigger asChild>
              <button
                className={`fixed right-4 lg:right-1/2 lg:translate-x-[320px] w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-white transition-colors ${
                  hasSelectedItems
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-300 cursor-not-allowed"
                } ${add ? "bottom-[20px]" : "bottom-4"}`}
                disabled={!hasSelectedItems}
              >
                <span className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Resumo do Pedido</DialogTitle>
              </DialogHeader>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Quantidade</TableHead>
                    <TableHead>Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedItems.map((item) => (
                    <TableRow key={item.nome}>
                      <TableCell>{item.nome}</TableCell>
                      <TableCell>{item.quantidade}</TableCell>
                      <TableCell>
                        R$ {(item.valor * item.quantidade).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 text-right font-bold">
                Total: R$ {totalValue.toFixed(2)}
              </div>
              <div className="mt-6 flex justify-end">
                <Button
                  onClick={() => {
                    const pedidoFormatado = formatPedido();
                    enviarMensagem("5573999950383", pedidoFormatado);
                  }}
                  disabled={!hasSelectedItems}
                >
                  Confirmar Pedido
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {showAlert && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <Alert className="w-96 bg-green-500 text-white">
                <AlertTitle>Pedido enviado!</AlertTitle>
                <AlertDescription>
                  Confirme seu pedido no WhatsApp
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
      ) : (
        <div>Empresa não encontrada</div>
      )}
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center p-6 text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Aviso</h2>
          <p className="text-gray-600">Estabelecimento não encontrado</p>
        </CardContent>
      </Card>
    </div>
  );
}
