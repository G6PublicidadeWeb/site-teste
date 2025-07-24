import React from "react";
import "./App.scss";
import { useTranslation } from "react-i18next";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import ChuvaDeMeteoros from "./ChuvaDeMeteoros/ChuvaDeMeteoros";
import LanguageButton from "./LanguageButton/LanguageButton";

import QuemSomos from "./QuemSomos/QuemSomos";
import Home from "./Home/Home";
import ServicosEPortfolio from "./ServicosEPortfolio/ServicosEPortfolio";
import Contato from "./Contato/Contato";
import Talentos from "./Talentos/Talentos";



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="full-view">
          <main id="main-container" className="position-relative">
            <Routes>
              <Route path="/talentos" element={
                <>
                  <Talentos />
                  <LanguageButton theme="dark" />
                </>
              } />
              <Route path="/quem-somos" element={
                <>
                  <QuemSomos />
                  <LanguageButton theme="dark" />
                </>
              } />
              <Route path="/servicos-e-portfolio" element={<ServicosEPortfolio />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/" element={
                <>
                  <Home />
                  <LanguageButton theme="dark" />
                </>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <ChuvaDeMeteoros frequencia="1500" />
    </>
  );
}

function Header() {
  const { t, i18n } = useTranslation();
React.useEffect(() => {
    const bootstrap = async () => {
      if (!window.bootstrap) {
        await import("bootstrap/dist/js/bootstrap.bundle.min.js");
      }
    };
    bootstrap();
  }, []);
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container-md w-md-100 justify-content-between pl-md-0 pl-4">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars color-white"></i>
          </button>
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid"
              src="assets/images/logo_branca_china.png"
              alt={t("HEADER_MENU.ALT_LOGO")}
            />
          </Link>
          <span></span>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav w-100 justify-content-around">
              <li className="navbar-item">
                <MenuLink label={t("HEADER_MENU.HOME")} to="/" />
              </li>
              <li className="navbar-item">
                <MenuLink label={t("HEADER_MENU.QUEM_SOMOS")} to="/quem-somos" />
              </li>
              <li className="navbar-item">
                <MenuLink label={t("HEADER_MENU.SERVICOS_E_PORTFOLIO")} to="/servicos-e-portfolio" />
              </li>

              {i18n.language === "pt-BR" && (
                <li className="navbar-item">
                  <div className="sistema pl-md-0 pl-2">
                    <a href="https://vitrine.g6publicidade.com/">Vitrine</a>
                  </div>
                </li>
              )}

              {i18n.language === "pt-BR" && (
                <li className="navbar-item">
                  <MenuLink label={"Talentos"} to="/talentos" />
                </li>
              )}

              <li className="navbar-item">
                <MenuLink label={t("HEADER_MENU.CONTATO")} to="/contato" />
              </li>

              {i18n.language === "pt-BR" && (
                <li className="navbar-item">
                  <div className="sistema pl-md-0 pl-2">
                    <a href="http://sistema.g6publicidade.com">Login</a>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

function MenuLink({ label, to }) {
  const match = useMatch(to);
  return (
    <Link className={"nav-link px-2 px-md-0 " + (match ? "active" : "")} to={to}>
      {label}
    </Link>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer id="footer">
      <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 p-0 logo-container text-center">
                    <img
                    className="img-fluid"
                    src="assets/images/logo_azul_china.png"
                    alt="Logo G6"
                />
                </div>
                <div className="col-lg-3 col-md-6 text-center copyright-container">
                    <p>Copyright © 2030</p>
                    <p>G6 Publicidade L.T.D.A.</p>
                    <p>{t("FOOTER.TODOS_OS_DIREITOS_RESERVADOS")}</p>
                </div>
                <div className="col-lg-4 col-md-6 text-center contact-container">
                    <p>
                        <a href="tel:554733982729" className="mr-2">
                            <i className="fas fa-phone-alt mr-1"></i>
                            +55 47 3398-2729
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5547996847759&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20respons%C3%A1vel%20comercial.">
                            <i className="fab fa-whatsapp mr-1"></i>
                            +55 47 99684-7759
                        </a>
                    </p>
                    <p id="email">
                        <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="mailto:contato@g6publicidade.com.br"
                        >
                            <i className="far fa-envelope mr-1"></i>
                            <span>contato@g6publicidade.com.br</span>
                        </a>
                    </p>
                    {/*<p style={{marginTop: "px"}}>Rua Miguel Matte, 687 sala 1003 e 1004</p>*/}
                    {/*<p>*/}
                    {/*    Edifício Evolution Corporate | Bairro Pioneiros*/}
                    {/*    | Balneário Camboriú/SC.*/}
                    {/*</p>*/}
                </div>
                {/* <div className="col-lg-4 col-md-6 text-center social-container">
                    <p>
                        <a
                            href="https://pt-br.facebook.com/g6publicidade"
                            aria-label="facebook"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/g6publicidade/"
                            aria-label="instagram"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://br.pinterest.com/g6publicidade/"
                            aria-label="pinterest"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-pinterest"></i>
                        </a>

                        <a
                            href="https://open.spotify.com/user/g6publicidade"
                            aria-label="spotify"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-spotify"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCipcnTzA9E7U3zVHR0fqSGQ"
                            aria-label="youtube"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a
                            href="https://www.tiktok.com/@g6publicidade"
                            aria-label="tiktok"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/g6publicidade"
                            aria-label="tiktok"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </p>
                </div> */}
                <div className="col-lg-1 col-md-6 col-6 text-center p-0">
                    <img
                        className="img-fluid col-md-12 col-6 p-1"
                        width="100"
                        height="100"
                        src="assets/images/weechat-qr-code.webp"
                        alt="QR Code WeeChat"
                    />
                </div>
                <div className="col-lg-1 col-md-6 col-6 text-center p-0">
                    <img
                        className="img-fluid col-md-12 col-6 p-1"
                        width="100"
                        height="100"
                        src="assets/images/whatsapp-qr-code.webp"
                        alt="QR Code WhatsApp"
                    />
                </div>
            </div>
        </div>
    </footer>
    );
}
export default App;
