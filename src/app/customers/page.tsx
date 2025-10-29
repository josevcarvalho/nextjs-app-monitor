import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Customers() {
  return (
    <div className="m-2">
      <header className="top-0 sticky bg-background/95 border-b z-10">
        <Item className="p-2">
          <ItemMedia>
            <SidebarTrigger />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-xl font-semibold">Clientes</ItemTitle>
          </ItemContent>
        </Item>
      </header>
    </div>
  );
}
