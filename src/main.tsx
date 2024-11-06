import { createRoot } from 'react-dom/client';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import SuspendPage from '@components/feedBack/SuspendPage/SuspendPage';
import HomePage from './Pages/HomePage';


createRoot(document.getElementById('root')!).render(
  <SuspendPage>
    <HomePage />
  </SuspendPage>
)
