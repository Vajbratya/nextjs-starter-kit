"use client"
import Link from 'next/link';
import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { UserProfile } from "../user-profile";
import ModeToggle from "../mode-toggle";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import config from "@/config";
import { cn } from "@/lib/utils";
import { Dialog, DialogClose } from "@radix-ui/react-dialog";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Recursos",
        href: "/recursos",
        description: "Conheça todas as funcionalidades do Laudos.AI",
    },
    {
        title: "Integrações",
        href: "/integracoes",
        description: "Compatibilidade com os principais sistemas PACS/RIS",
    },
];

export default function NavBar() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    React.useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('/api/auth/status');
                const data = await response.json();
                setIsAuthenticated(data.isAuthenticated);
            } catch (error) {
                console.error('Error checking auth status:', error);
            }
        };
        checkAuth();
    }, []);

    return (
        <div className="flex min-w-full fixed justify-between p-4 border-b border-[#7CFFD4]/10 z-10 bg-white/5 dark:bg-black/50 backdrop-blur-sm">
            <div className="flex justify-between w-full min-[825px]:hidden">
                <Dialog>
                    <SheetTrigger className="p-2 transition">
                        <Button size="icon" variant="ghost" className="w-4 h-4 text-[#7CFFD4]" aria-label="Abrir menu">
                            <GiHamburgerMenu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-white/10 dark:bg-black/50 backdrop-blur-md border-[#7CFFD4]/20">
                        <SheetHeader>
                            <SheetTitle className="text-[#7CFFD4]">Laudos.AI</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col space-y-3 mt-[1rem]">
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="ghost" className="w-full text-white hover:text-[#7CFFD4] hover:bg-[#7CFFD4]/10">Início</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/dashboard" legacyBehavior passHref>
                                    <Button variant="ghost" className="w-full text-white hover:text-[#7CFFD4] hover:bg-[#7CFFD4]/10">
                                        Dashboard
                                    </Button>
                                </Link>
                            </DialogClose>
                        </div>
                    </SheetContent>
                </Dialog>
                <ModeToggle />
            </div>
            <NavigationMenu>
                <NavigationMenuList className="max-[825px]:hidden flex gap-3 w-[100%] justify-between">
                    <Link href="/" className="pl-2 flex items-center gap-2" aria-label="Home">
                        <svg width="32" height="32" viewBox="0 0 100 100" className="text-[#7CFFD4]">
                            <path d="M25 25H45V75H25V25ZM45 75H75V85H45V75Z" fill="currentColor"/>
                        </svg>
                        <span className="font-bold text-xl text-[#7CFFD4]">Laudos.AI</span>
                    </Link>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem className="max-[825px]:hidden ml-5">
                        <NavigationMenuTrigger className="bg-transparent hover:bg-[#7CFFD4]/10 text-white">
                            Recursos
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="flex flex-col w-[400px] gap-3 p-4 lg:w-[500px] bg-white/10 dark:bg-black/50 backdrop-blur-md border-[#7CFFD4]/20">
                                {components.map((component, index) => (
                                    <ListItem
                                        key={index}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="max-[825px]:hidden">
                        <Link href="/dashboard" legacyBehavior passHref>
                            <Button variant="ghost" className="text-white hover:text-[#7CFFD4] hover:bg-[#7CFFD4]/10">
                                Dashboard
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4 max-[825px]:hidden">
                {isAuthenticated && <UserProfile />}
                <ModeToggle />
            </div>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
