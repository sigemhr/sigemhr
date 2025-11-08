
import AppRouter from './routes'
import { ToastProvider } from './components/ui/Toast'

const App = () => 
<ToastProvider>

<AppRouter />
</ToastProvider>

export default App
