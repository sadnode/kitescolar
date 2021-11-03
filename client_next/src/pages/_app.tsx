import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { theme } from "../themes/theme";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <ToastContainer />
    </ChakraProvider>
  )
}

export default MyApp
