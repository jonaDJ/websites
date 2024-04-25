import React from "react";
import { extendTheme, ChakraProvider, Heading } from "@chakra-ui/react";
import LandingPage from "./components/LandingPage.jsx";
import "./App.css";

const theme = extendTheme({
  fonts: {
    body: "'Trebuchet MS', sans-serif",
    heading: "'Trebuchet MS', sans-serif",
  },
});

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme} background="black">
        <Heading
          as="h2"
          size={{ sm: "md", md: "lg", lg: "xl" }}
          p={1}
          background="white"
          color="black"
          textAlign="center"
          m=" 0 0 1rem 0"
        >
          jonURLs
        </Heading>
        <LandingPage />
      </ChakraProvider>
    </div>
  );
}

export default App;
