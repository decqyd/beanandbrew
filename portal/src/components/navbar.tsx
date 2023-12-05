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
            label: <FiCoffee/> as Element,
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
                        <A activeClass="underline" class={`hover:text-gray-300 transition-all text-white py-3 px-4 
                        underline-offset-2
                        ${item.link === "/" ? "text-[1.75rem]" : "text-[1.5rem]"}`}
                            href={item.link}>
                                {item.label}
                        </A>
                    )}
                </For>
            </div>
        </div>
    )
    
}   