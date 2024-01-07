export default function Titlebar(props: any) {
    return <h1 class="text-white font-playfair w-full bg-[url(/ourcoffee.jpg)] flex justify-center py-16 text-6xl font-bold">
        {props.children}
    </h1>
}