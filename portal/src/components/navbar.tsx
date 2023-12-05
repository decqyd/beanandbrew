import { For } from "solid-js";
import { FiCoffee } from 'solid-icons/fi'
import { A } from "@solidjs/router";

type NavbarItem = {
    label: string | Element,
    link: string,
}

interface NavbarProps {
    class?: string
}

export default function Navbar(props: NavbarProps) {
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
                <For each={navItems} fallback={<p>loading...</p>}>
                    {(item: NavbarItem) => (
                        <A activeClass="underline" class={`text-gray-300 transition-all flex items-center hover:text-white py-2 px-3
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