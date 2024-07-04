import { ThemeProvider } from "styled-components";
import HomePage from "./pages/Home";
import theme from "./utils/theme";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import GlobalStyle from "./components/common/GlobalStyle";

function App() {
 return (
  <ThemeProvider theme={theme}>
   <GlobalStyle />
   <MainLayout>
    <Routes>
     <Route path="/" element={<HomePage />} />
    </Routes>
   </MainLayout>
  </ThemeProvider>
 );
}

export default App;
