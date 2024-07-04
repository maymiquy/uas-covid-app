import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import GlobalStyle from "./components/common/GlobalStyle";
import HomePage from "./pages/HomePage";
import IndonesiaPage from "./pages/IndonesiaPage";
import ProvincePage from "./pages/ProvincePage";
import { ProvinceProvider } from "./context/ProvinceContext";
import AboutPage from "./pages/AboutPage";

function App() {
 return (
  <ThemeProvider theme={theme}>
   <ProvinceProvider>
    <GlobalStyle />
    <MainLayout>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/indonesia" element={<IndonesiaPage />} />
      <Route path="/province" element={<ProvincePage />} />
      <Route path="/about" element={<AboutPage />} />
     </Routes>
    </MainLayout>
   </ProvinceProvider>
  </ThemeProvider>
 );
}

export default App;
