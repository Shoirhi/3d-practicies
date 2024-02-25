import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const menu = [
  {
    label: "wawa-1",
    href: "/",
  },
  {
    label: "wawa-2",
    href: "/wawa-2",
  },
];

export default () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu />
            <span className="sr-only">開く</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>メニュー</SheetTitle>
            <SheetDescription>
              <nav className="flex flex-col">
                {menu.map((item) => (
                  <Button variant="ghost" asChild>
                    <a href={item.href}>{item.label}</a>
                  </Button>
                ))}
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
