import { Link } from "@solidjs/router"
import Navbar from "./navbar"
import { BsInstagram, BsTwitter, BsFacebook } from "solid-icons/bs"



export default function Footer() {
    return (
        <div class="bg-black p-5 px-16 text-white justify-between opacity-90 w-full flex h-max">
            <div>
                <h1 class="text-2xl font-playfair border-b border-violet-500">Links</h1>
                <Navbar col={true} class="font-playfair"/>
            </div>
            <div class="flex flex-col text-right">
                <h1 class="text-3xl font-playfair">
                    BEAN AND BREW LTD.  
                </h1>
                <p class="text-sm">
                    Any images may be subject to copyright
                </p>
                <div class="flex gap-x-3 text-2xl ml-auto mt-5">
                    <Link href="https://www.youtube.com/watch?v=BbeeuzU5Qc8" target="_blank">
                        <BsInstagram class="opacity-75 hover:opacity-100"/>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=BbeeuzU5Qc8" target="_blank">
                        <BsTwitter class="opacity-75 hover:opacity-100"/>
                    </Link>
                     <Link href="https://www.youtube.com/watch?v=BbeeuzU5Qc8" target="_blank">
                        <BsFacebook class="opacity-75 hover:opacity-100"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}