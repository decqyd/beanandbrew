function App() {
  return (
    <div>
      {/* home screen hero including logo */}
      <div class="text-center flex w-full md:h-screen py-20 justify-center align-middle items-center rounded-b-md bg-[url(/herobg.jpg)]">
        <div>
          <img src="/logo.png" alt="bean and brew logo"/>
        </div>
      </div>
      {/* content under hero */}
      <div class="font-playfair place-items-center place-content-center md:place-items-start 
      md:place-content-start flex flex-col mt-10 w-screen md:text-left text-center overflow-y-hidden h-full">
        <div class="flex justify-center w-screen mb-10 overflow-x-hidden gap-x-40 lg:flex-row flex-col mx-5">
            <div class="mt-5">
              <h1 class="text-6xl font-bold">
                WHO WE ARE
              </h1>
              <p class="md:text-3xl text-2xl md:w-[43rem] w-[25rem] pt-5">
                We are a small coffee company based around Harrogate and Leeds, and we pride ourselves on our use of fair-trade coffee and organic milk.
                <br />
                <br />
                Each drink we craft is made exactly how you want it, no matter how complicated.
                <br />
                <br />
                {/* related fairtrade and organic logos */}
                <span class="flex justify-center md:justify-start pb-10 gap-x-10">
                  <img src="/fairtrade.jpg" alt="fairtrade logo" class="md:w-[8rem] w-[5rem] h-max" />
                  <img src="/organic.jpg" alt="organic logo" class="md:w-[8rem] w-[5rem] h-max" />
                </span>
              </p>
            </div>
            {/* barista stock image */}
            <img src="/barista.png" alt="barista" class="rounded-md w-[400px] h-[600px]" />
          </div>
          <div class="flex mt-2 place-content-center place-items-center w-screen mb-10 overflow-x-hidden gap-x-40 lg:flex-col text-center mx-5">
              <h1 class="text-6xl font-bold">
                WHAT WE DO
              </h1>
              <p class="md:text-3xl text-2xl md:w-[43rem] w-[25rem] pt-5">
                We provide our customers with the best coffees and bakery goods that we have to offer.
              </p>
        </div>
      </div>
    </div>
  )
}

export default App
