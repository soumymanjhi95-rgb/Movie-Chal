import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from '../../team-sync/src/app/routes/store.jsx'
import AppRoutes from '../../team-sync/src/app/routes/AppRoutes.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <AppRoutes />

  </Provider>
)
