import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CircleAlert,
  CircleDashed,
  CircleMinus,
  CircleX,
  RefreshCcw,
  RotateCcw,
  Search,
} from "lucide-react";

export default function Home() {
  return (
    <div className="m-2">
      <header className="top-0 sticky bg-background/95 border-b z-10">
        <Item className="p-2">
          <ItemMedia>
            <SidebarTrigger />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-xl font-semibold">Dashboard</ItemTitle>
          </ItemContent>
        </Item>
      </header>
      <div className="m-5 grid grid-cols-1 lg:grid-cols-7 gap-6">
        <Item className="lg:col-span-7 lg:hidden" variant="default">
          <ItemContent className="flex flex-row flex-wrap gap-2">
            <Badge variant="secondary">
              <CircleDashed />
              <span>Pendente</span>
            </Badge>
            <Badge>
              <Spinner />
              <span>Processando</span>
            </Badge>
            <Badge variant="secondary">
              <CircleMinus />
              <span>Aguardando dependência</span>
            </Badge>
            <Badge variant="destructive">
              <CircleX />
              <span>Erro</span>
            </Badge>
          </ItemContent>
        </Item>
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Pedidos novos</CardTitle>
            <CardDescription>Existem mais 10 pedidos pendentes</CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon">
                <RefreshCcw />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>Atualizado há 12 segundos</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Pedido</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>112</TableCell>
                  <TableCell>Cliente 5</TableCell>
                  <TableCell>R$ 10,00</TableCell>
                  <TableCell>
                    <Badge>
                      <Spinner />
                      <span className="hidden lg:inline">Processando</span>
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>230</TableCell>
                  <TableCell>Cliente 3</TableCell>
                  <TableCell>R$ 5,00</TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      <CircleDashed />
                      <span className="hidden lg:inline">Pendente</span>
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>230</TableCell>
                  <TableCell>Cliente 1</TableCell>
                  <TableCell>R$ 5,00</TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      <CircleMinus />
                      <span className="hidden lg:inline">
                        Aguardando dependência
                      </span>
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>230</TableCell>
                  <TableCell>Cliente 3</TableCell>
                  <TableCell>R$ 5,00</TableCell>
                  <TableCell>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Badge className="bg-amber-400">
                          <CircleAlert />
                          <span className="hidden lg:inline">
                            Falha na dependência
                          </span>
                        </Badge>
                      </HoverCardTrigger>
                      <HoverCardContent className="text-sm flex flex-col gap-2">
                        <p>
                          Falha ao processar o cliente. Verifique os dados do
                          cliente.
                        </p>
                        <Button size="sm" variant="outline">
                          <Search />
                          <span>Localizar</span>
                        </Button>
                      </HoverCardContent>
                    </HoverCard>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell>R$ 20,00</TableCell>
                  <TableCell />
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Ultimos pedidos processados</CardTitle>
            <CardDescription>
              30 pedidos processados na ultima hora
            </CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon">
                <RefreshCcw />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>Atualizado há 4 segundos</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Pedido</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>123</TableCell>
                  <TableCell>Cliente 3</TableCell>
                  <TableCell>R$ 20,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>124</TableCell>
                  <TableCell>Cliente 2</TableCell>
                  <TableCell>R$ 8,00</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell>R$ 28,00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Ultimos clientes processados</CardTitle>
            <CardDescription>Existem mais 7 clientes pendentes</CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon">
                <RefreshCcw />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>Atualizado há 10 segundos</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Pedidos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>123</TableCell>
                  <TableCell>Cliente 5</TableCell>
                  <TableCell>5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>124</TableCell>
                  <TableCell>Cliente 2</TableCell>
                  <TableCell>3</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell></TableCell>
                  <TableCell>8</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Clientes novos</CardTitle>
            <CardDescription>
              18 clientes processados na ultima hora
            </CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon">
                <RefreshCcw />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>Atualizado há 7 segundos</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Pedidos</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>123</TableCell>
                  <TableCell>Cliente 3</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Badge variant="destructive">
                          <CircleX />
                          <span className="hidden lg:inline">Erro</span>
                        </Badge>
                      </HoverCardTrigger>
                      <HoverCardContent className="text-sm flex flex-col gap-2">
                        <p>
                          Falha ao processar o pagamento. Verifique os dados do
                          cartão.
                        </p>
                        <Button size="sm" variant="outline">
                          <RotateCcw />
                          <span>Tentar novamente</span>
                        </Button>
                      </HoverCardContent>
                    </HoverCard>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>124</TableCell>
                  <TableCell>Cliente 1</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>
                    <Badge>
                      <Spinner />
                      <span className="hidden lg:inline">Processando</span>
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell></TableCell>
                  <TableCell>8</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
