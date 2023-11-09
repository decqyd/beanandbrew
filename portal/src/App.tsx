import { createEffect, createSignal } from "solid-js"
import Navbar from "./components/navbar"

function App() {
  return (
    <div>
      <div class="text-center flex w-screen h-screen justify-center bg-[url(/herobg.jpg)]">
        <h1 class="font-playfair select-none my-0 w-150 h-screen flex justify-center items-center text-6rem text-white lt-md:text-5rem">
          BEAN AND BREW
        </h1>
      </div>
    </div>
  )
}

export default App
