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
            <div class="flex flex-col h-screen justify-between">
                {/* global site navbar */}
                <Navbar class="mx-5 my-3 fixed top-0 z-10 bg-black bg-opacity-50 rounded-md px-2 transition-all hover:bg-opacity-75"/>
                {/* div used to space footer accordingly */}
                <div class='mb-auto'>
                    <Routes>
                        <Route path="/" component={App} />
                        <Route path="/coffee" component={lazy(() => import("./routes/coffee"))}/>

                        {/* wildcard route to match anything that isnt defined here */}
                        <Route path="/*" component={lazy(() => import("./routes/404"))}/>
                    </Routes>
                </div>
                {/* global site footer */}
                <Footer />
            </div>
        </Router>
), root!)
