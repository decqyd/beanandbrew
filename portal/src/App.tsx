import { createEffect, createSignal } from "solid-js"
import Navbar from "./components/navbar"

function App() {
  return (
    <div>
      <div class="text-center flex w-screen h-screen justify-center bg-[url(/herobg.jpg)]">
        <h1 class="font-playfair select-none my-0 w-[20rem] font-normal leading-[7rem] h-screen flex justify-center items-center md:text-[6rem] text-white text-[5rem]">
          BEAN AND BREW
        </h1>
      </div>
      <div class="font-playfair m-10 w-full py-5 h-full">
        <div class="flex justify-center gap-x-40">
          <div class="mt-5">
            <h1 class="text-6xl font-bold">
              WHO WE ARE
            </h1>
            <p class="text-3xl w-[35rem] pt-5">
              We are a small coffee company based around Harrogate and Leeds, built around our use of fair-trade coffee and organic milk.
            </p>
          </div>
          <img src="/barista.png" alt="barista" class="w-[450px] h-[600px]" />
        </div>
          
      </div>160
    </div>
  )
}

export default App
