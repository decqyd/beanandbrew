import { For } from "solid-js";
import { FiCoffee } from 'solid-icons/fi'
import { A } from "@solidjs/router";

// type for each navbar item
type NavbarItem = {
    label: string | Element,
    link: string,
}

// props for navbar
interface NavbarProps {
    class?: string
}

export default function Navbar(props: NavbarProps) {
    // list of items for the navbar
    const navItems: NavbarItem[] = [
        {
            label: <img class="w-14 h-10" src="/navbarlogo.png" alt="bean and brew logo"/> as Element,
            link: "/"
        },
        {
            label: "our coffees",
            link: "/coffee"
        },
        {
            label: "our story",
            link: "/about"
        }
    ]

    return (
        <div {...props}>
            <div class="flex">
                {/* for component provided by solid.js */}
                <For each={navItems} fallback={<p>loading...</p>}>
                    {/* function to render each item */}
                    {(item: NavbarItem) => (
                        <A activeClass="font-semibold" class={`text-gray-300 transition-all flex items-center hover:text-white py-2 px-3
                        underline-offset-2
                        ${item.link === "/" ? "text-[1.5rem]" : "text-[1.25rem]"}`}
                            href={item.link}>
                                {item.label}
                        </A>
                    )}
                </For>
            </div>
        </div>
    )
    
}   