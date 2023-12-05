function App() {
  return (
    <div>
      <div class="text-center flex w-full md:h-screen py-20 justify-center align-middle items-center rounded-b-md bg-[url(/herobg.jpg)]">
        {/* <div class="font-playfair selection:text-black selection:bg-white my-0 w-[20rem] font-normal leading-[7rem] h-max flex justify-center items-center md:text-[6rem] text-white text-[5rem]">
          BEAN AND BREW
        </div> */}
        <div>
          <img src="/logo.png" alt="bean and brew logo"/>
        </div>
      </div>
      <div class="font-playfair place-items-center place-content-center md:place-items-start 
      md:place-content-start flex flex-col mt-10 w-full md:text-left text-center overflow-y-hidden h-full">
        <div class="flex justify-center w-max gap-x-40 lg:flex-row flex-col mx-5">
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
              <span class="flex justify-center md:justify-start pb-10 gap-x-10">
                <img src="/fairtrade.jpg" alt="fairtrade logo" class="md:w-[8rem] w-[5rem] h-max" />
                <img src="/organic.jpg" alt="organic logo" class="md:w-[8rem] w-[5rem] h-max" />
              </span>
            </p>
          </div>
          <img src="/barista.png" alt="barista" class="rounded-md w-[400px] h-[600px]" />
        </div>

      </div>
    </div>
  )
}

export default App
