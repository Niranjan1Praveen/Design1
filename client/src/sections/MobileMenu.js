import { Button } from "@/components/ui/button";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import { ToggleTheme } from "@/components/providers/ToggleTheme";
function MobileMenu({ navMenu }) {
  return (
    <nav>
      <ul className="mb-3">
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            {submenu ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className={"w-full justify-between"}
                  >
                    {label}
                    <ChevronsUpDown />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="border-l border-l-muted-foreground/20">
                    {submenu.map(({ href, label }, index) => (
                      <li key={index}>
                        <Button asChild variant={"ghost"} className={"w-full justify-start text-muted-foreground hover:bg-transparent"}>
                          <a href={href}>{label}</a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                asChild
                variant={"ghost"}
                className={"w-full justify-start"}
              >
                <a href={href}>{label}</a>
              </Button>
            )}
          </li>
        ))}
      </ul>
      <Separator className={"bg-muted-foreground/20 "}/>
      <div className="flex flex-col items-center gap-2 mt-2">
        <ToggleTheme/>
        <Button variant={"ghost"} className={"w-full"}>
            Sign In
        </Button>
         <Button className={"w-full"}>
            Free Trial
        </Button>
      </div>
    </nav>
  );
}

export default MobileMenu;
