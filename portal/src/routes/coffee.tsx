import Product from "../components/product";
import Titlebar from "../components/titlebar";

export default function Coffee() {
    return (
        <div>
            {/* title bar */}
            <Titlebar>OUR COFFEES</Titlebar>
            <div class="flex justify-center gap-x-[10rem]">
                <div>
                    <div class="my-10">
                        <h1 class="text-4xl font-medium font-playfair">
                            We make our coffees with passion.
                        </h1>
                        <p class="text-2xl w-[42.5rem] font-playfair mt-5">
                            In fact, we're so confident in our abilities that we encourage our customers to ask for the coffee the way they want it.<br/>
                            This applies to 
                            <span class="font-semibold">
                                every aspect 
                            </span>
                            of your coffee, to ensure you get the best experience and most value out of your visits to our shops.
                            <br/>
                            We go the extra mile to provide an unforgettable, personalized coffee experience that makes coming 
                            back for more a priority.  
                        </p> 
                        <p class="text-2xl w-[42.5rem] font-playfair mt-5">
                            Here, you can pre-order any of our coffees and they'll be ready for collection in our closest shop to you!
                        </p>
                    </div>
                </div>
                <img src="/coffeepouring.jpg" alt="pouring coffee" class="w-[20rem] my-10 h-max"/>
            T</div>
            <div class="flex-col flex place-items-center mb-10">
                <div class="text-center">
                    <h1 class="text-4xl font-medium font-playfair">
                        Products
                    </h1>
                    <p class="text-lg font-playfair text-gray-800">Browse our finest selection of coffees.</p>
                </div>
                <div class="flex gap-x-10 my-5">
                    <Product title="Product 1" price="5.99"/>
                    <Product title="Product 2" price="6.99"/>
                    <Product title="Product 3" price="7.99"/>
                    <Product title="Product 4" price="8.99"/>
                </div>
                    
            </div>
        </div>
    )
}