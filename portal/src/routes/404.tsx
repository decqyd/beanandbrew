import { A } from "@solidjs/router";

export default function NotFound() {
    return (
        <div class="flex flex-col h-full place-content-center text-center mt-[10rem] place-items-center">
            <h1 class="text-7xl font-playfair">
                Page not found :D
            </h1>
            <A href="/" class="underline">
                Go back to the home page
            </A>
        </div>
    )
}