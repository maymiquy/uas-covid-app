import { ThemeProvider } from "styled-components";
import HomePage from "./pages/Home/Home";
import theme from "./utils/theme";
import GlobalStyle from "./components/common/GlobalStyle";
import { Route, Routes } from "react-router-dom";

function App() {
 return (
  <ThemeProvider theme={theme}>
   <GlobalStyle />
   <>
    <Routes>
     <Route path="/" element={<HomePage />} />
    </Routes>
   </>
  </ThemeProvider>
 );
}

export default App;
