import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../sass/styles.css';
import App from './App.tsx';
import SidebarNavigation from './SidebarNavigation.tsx';
import MobileComponent from './MobileComponent.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MobileComponent />
	</StrictMode>
);
