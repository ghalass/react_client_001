import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sites from "./pages/config/Sites";
import Engins from "./pages/config/Engins";
import MainLayout from "./pages/MainLayout";
import PageNotFound from "./pages/PageNotFound";
import Config from "./pages/config/Config.";
import ConfigLayout from "./pages/config/ConfigLayout";
import SiteCreate from "./components/sites/site/SiteCreate";
import SitesLayout from "./components/sites/SitesLayout";

import "./App.css";
import SiteLayout from "./components/sites/site/SiteLayout";
import SiteDelete from "./components/sites/site/SiteDelete";
import SiteUpdate from "./components/sites/site/SiteUpdate";
import Toast from "./components/loaders/Toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/config" element={<ConfigLayout />}>
              <Route index element={<Config />} />
              <Route path="sites" element={<SitesLayout />}>
                <Route index element={<Sites />} />
                <Route path="create" element={<SiteCreate />} />

                <Route path=":id" element={<SiteLayout />}>
                  <Route path="delete" element={<SiteDelete />} />
                  <Route path="update" element={<SiteUpdate />} />
                </Route>
              </Route>
              <Route path="engins" element={<Engins />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toast />
    </>
  );
}

export default App;
