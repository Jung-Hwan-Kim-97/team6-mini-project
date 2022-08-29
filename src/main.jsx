import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// react-router-dom
import { BrowserRouter } from 'react-router-dom'
// styled-components
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'
// RTK
import { Provider } from 'react-redux'
import store from './stores/store.js'
// swiper.js
import 'swiper/css/bundle'
import './components/swiperStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
