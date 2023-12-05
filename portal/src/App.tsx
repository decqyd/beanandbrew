function App() {
  return (
    <div>
      <div class="text-center flex w-full h-screen justify-center align-middle items-center rounded-b-md bg-[url(/herobg.jpg)]">
        {/* <div class="font-playfair selection:text-black selection:bg-white my-0 w-[20rem] font-normal leading-[7rem] h-max flex justify-center items-center md:text-[6rem] text-white text-[5rem]">
          BEAN AND BREW
        </div> */}
        <div>
          <img src="/logo.png" alt="bean and brew logo"/>
        </div>
      </div>
      <div class="font-playfair mt-10 w-full overflow-y-hidden py-5 h-full">
        <div class="flex justify-center gap-x-40">
          <div class="mt-5">
            <h1 class="text-6xl font-bold">
              WHO WE ARE
            </h1>
            <p class="text-3xl w-[43rem] pt-5">
              We are a small coffee company based around Harrogate and Leeds, and we pride ourselves on our use of fair-trade coffee and organic milk.
              <br />
              <br />
              Each drink we craft is made exactly how you want it, no matter how complicated.
              <br />
              <br />
              <span class="flex gap-x-10">
                <img src="/fairtrade.jpg" alt="fairtrade logo" class="w-[8rem] h-max" />
                <img src="/organic.jpg" alt="organic logo" class="w-[8rem] h-max" />
              </span>
            </p>
          </div>
          <img src="/barista.png" alt="barista" class="rounded-md w-[450px] h-[600px]" />
        </div>

      </div>
    </div>
  )
}

export default App
