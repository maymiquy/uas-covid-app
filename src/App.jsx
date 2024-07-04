import { ThemeProvider } from "styled-components";
import HomePage from "./pages/Home";
import theme from "./utils/theme";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import GlobalStyle from "./components/common/GlobalStyle";
import IndonesianPage from "./pages/Indonesian";

function App() {
 return (
  <ThemeProvider theme={theme}>
   <GlobalStyle />
   <MainLayout>
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/indonesia" element={<IndonesianPage />} />
    </Routes>
   </MainLayout>
  </ThemeProvider>
 );
}

export default App;
