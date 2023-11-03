/* @refresh reload */
import { render } from 'solid-js/web'
import "virtual:uno.css"
import { Router, Routes, Route } from '@solidjs/router'

import App from './App'

const root = document.getElementById('root')

render(() => (
        <Router>
            <Routes>
                <Route path="/" component={App} /> {/* 👈 Define the home page route */}
            </Routes>
        </Router>
  ), root!)
