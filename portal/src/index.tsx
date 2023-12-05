/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Routes, Route } from '@solidjs/router'
import { lazy } from 'solid-js'
import Navbar from './components/navbar'
import "./index.css"
import App from './App'
import Footer from './components/footer'

const root = document.getElementById('root')

render(() => (  
        <Router>
            <Navbar class="mx-4 my-2 fixed top-0 bg-black rounded-md px-2 opacity-[75%]"/>
            <Routes>
                <Route path="/" component={App} />
                <Route path="/coffee" component={lazy(() => import("./routes/coffee"))}/>
            </Routes>
            <Footer />
        </Router>
), root!)
