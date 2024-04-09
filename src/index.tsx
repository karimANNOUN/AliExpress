import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n/config'
import { BrowserRouter as Router }  from 'react-router-dom';
import YourThemeProvider from './components/directionLanguage/YourThemeProvider';
import { Provider } from 'react-redux'; 
import { store } from './storeRedux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let persistor=persistStore(store)
root.render(
  <React.StrictMode>
    <Provider store={store} > 
    <PersistGate persistor={persistor} >
<Router>
<YourThemeProvider>
<QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </YourThemeProvider>
    </Router>
    </PersistGate>
    </Provider>

  </React.StrictMode>
);

