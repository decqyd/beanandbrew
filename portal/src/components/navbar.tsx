import { For } from "solid-js";
import { A } from "@solidjs/router";

// type for each navbar item
export type NavbarItem = {
    label: string | Element,
    link: string,
}

// props for navbar
export interface NavbarProps {
    class?: string,
    logo?: boolean,
    col?: boolean,
}

export default function Navbar(props: NavbarProps) {
    // list of items for the navbar
    const navItems: NavbarItem[] = [
            {
                label:  props.logo ? <img class="w-12 h-10" src="/navbarlogo.png" alt="bean and brew logo"/> as Element : "Home",
                link: "/"
            },
            {
                label: "Our coffees",
                link: "/coffee"
            },
            {
                label: "Cafes",
                link: "/cafes"
            },
            {
                label: "Restaurants",
                link: "/restaurants"
            },
            {
                label: "Bakery",
                link: "/bakery"
            },
            {
                label: "About us",
                link: "/about"
            }
    ]
    return (
        <div {...props}>
            <div class={props.col ? "flex-col" : "flex"}>
                {/* for component provided by solid.js */}
                <For each={navItems} fallback={<p>loading...</p>}>
                    {/* function to render each item */}
                    {(item: NavbarItem) => (
                        <A activeClass="font-semibold" class={`text-gray-300 transition-all flex items-center 
                        hover:text-white ${props.logo ? "py-2" : "py-1"} px-3 underline-offset-2
                        ${item.link === "/" && props.logo ? "text-[1.5rem]" : "text-[1.25rem]"}`}
                            href={item.link}>
                                {item.label}
                        </A>
                    )}
                </For>
            </div>
        </div>
    )
    
}   