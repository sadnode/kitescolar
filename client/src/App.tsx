import { ChakraProvider } from "@chakra-ui/react";
import Modal from "react-modal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { theme } from "./theme/theme";

import { AuthProvider } from "./contexts/AuthContext";
import { Routes } from "./routes";
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext";

Modal.setAppElement('#root');

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <SidebarDrawerProvider>
          <Routes />
        </SidebarDrawerProvider>
      </AuthProvider>
      <ToastContainer />
    </ChakraProvider>
  );
}

export { App };
