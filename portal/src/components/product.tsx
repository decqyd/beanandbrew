interface ProductProps {
    title: string,
    price: string,
}

export default function Product(props: ProductProps) {
    return (
        <div class="w-[20rem] transition-all p-5 hover:cursor-pointer">
            <img class="rounded-md w-full h-max" src="coffeecup.jpg"/>
            <p class="font-playfair text-2xl font-medium mt-2">
                {props.title} | £{props.price}
            </p>
            <p class="text-sm">
            Id maiores asperiores voluptas vitae voluptates numquam ea. Doloremque beatae eum repellendus blanditiis quasi nostrum ipsa quo. Eius quia quos qui optio enim repellat qui.
            </p>
            <button class="hover:bg-white bg-black hover:text-black text-white transition-all duration-200 border border-black rounded-2xl px-5 py-1 mt-3">
                Buy
            </button>
        </div>
    )
}