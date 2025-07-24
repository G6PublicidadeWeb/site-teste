import React from "react";
import "./ServicosEPortfolio.scss";
import { withTranslation } from "react-i18next";
import LanguageButton from "../LanguageButton/LanguageButton";

class ServicosEPortfolio extends React.Component{

  getLanguageClass(number){
    return this.props.i18n.language+"-"+number
  }

  render() {
    const { t } = this.props;
    return (
      <div className="ServicosEPortfolio bg-white w-100">
        <div className="bg-black w-100 py-5"></div>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 flex-col-center offset-md-1 offset-lg-0">

              <div className="info-container color-blue">
                <div className="d-inline-block">
                  <img
                    src="assets/images/redes_sociais.svg"
                    alt={t('SERVICOS_E_PORTFOLIO.INFORMACAO_1.ALT_IMAGEM')}
                  />
                </div>
                <div className="d-inline-block text-wrapper-1">
                  <h3 className={"linear-wipe " + this.getLanguageClass(1)}>
                    {t("SERVICOS_E_PORTFOLIO.INFORMACAO_1.TITULO_BRILHANTE")}
                  </h3>
                  <p>{t("SERVICOS_E_PORTFOLIO.INFORMACAO_1.SUBTITULO")}</p>
                </div>
              </div>

              <div className="info-container color-blue">
                <div className="d-inline-block">
                  <img
                    src="assets/images/target.svg"
                    alt={t('SERVICOS_E_PORTFOLIO.INFORMACAO_2.ALT_IMAGEM')}
                  />
                </div>
                <div className="d-inline-block text-wrapper-1">
                  <h3 className={"linear-wipe " + this.getLanguageClass(2)}>
                    {t("SERVICOS_E_PORTFOLIO.INFORMACAO_2.TITULO_BRILHANTE")}
                  </h3>
                  <p>{t("SERVICOS_E_PORTFOLIO.INFORMACAO_2.SUBTITULO")}</p>
                </div>
              </div>

              <div className="info-container color-blue">
                <div className="d-inline-block">
                  <img
                    src="assets/images/ima.svg"
                    alt={t('SERVICOS_E_PORTFOLIO.INFORMACAO_3.ALT_IMAGEM')}
                  />
                </div>
                <div className="d-inline-block text-wrapper-1">
                  <h3 className={"linear-wipe " + this.getLanguageClass(3)}>
                    {t("SERVICOS_E_PORTFOLIO.INFORMACAO_3.TITULO_BRILHANTE")}
                  </h3>
                  <p>{t("SERVICOS_E_PORTFOLIO.INFORMACAO_3.SUBTITULO")}</p>
                </div>
              </div>

            </div>
            <div className="col-lg-6 d-flex align-center flex-column pb-md-0 pb-5">
              <div className="portfolio">
                <a
                  target="_blank"
                  aria-label="pinterest"
                  rel="noreferrer noopener"
                  href="https://br.pinterest.com/g6publicidade/color-zoom/"
                >
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source
                      src="assets/videos/portfolio/color_zoom.mp4"
                      type="video/mp4"
                    />
                  </video>
                </a>
                <a
                  target="_blank"
                  aria-label="pinterest"
                  rel="noreferrer noopener"
                  href="https://br.pinterest.com/g6publicidade/emagresee-crici%C3%BAma/"
                >
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source
                      src="assets/videos/portfolio/emagresee.mp4"
                      type="video/mp4"
                    />
                  </video>
                </a>
                <a
                  target="_blank"
                  aria-label="pinterest"
                  rel="noreferrer noopener"
                  href="https://br.pinterest.com/g6publicidade/grupo-r-gubert/"
                >
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source
                      src="assets/videos/portfolio/grupo.mp4"
                      type="video/mp4"
                    />
                  </video>
                </a>
                <a
                  target="_blank"
                  aria-label="pinterest"
                  rel="noreferrer noopener"
                  href="https://br.pinterest.com/g6publicidade/oral-sin/"
                >
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source
                      src="assets/videos/portfolio/oral_sin.mp4"
                      type="video/mp4"
                    />
                  </video>
                </a>
                <a
                  target="_blank"
                  aria-label="pinterest"
                  rel="noreferrer noopener"
                  href="https://br.pinterest.com/g6publicidade/santa-clara-sa%C3%BAde-animal/"
                >
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source
                      src="assets/videos/portfolio/santa_clara.mp4"
                      type="video/mp4"
                    />
                  </video>
                </a>
                <a
                  target="_blank"
                  aria-label="pinterest"
                  rel="noreferrer noopener"
                  href="https://br.pinterest.com/g6publicidade/cart%C3%A3o-de-benef%C3%ADcios-santa-sa%C3%BAde/"
                >
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source
                      src="assets/videos/portfolio/santa_saude.mp4"
                      type="video/mp4"
                    />
                  </video>
                </a>
                <a
                  target="_blank"
                  aria-label="pinterest"
                  rel="noreferrer noopener"
                  href="https://br.pinterest.com/g6publicidade/setur-balne%C3%A1rio-pi%C3%A7arras/"
                >
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source
                      src="assets/videos/portfolio/sec_turismo.mp4"
                      type="video/mp4"
                    />
                  </video>
                </a>
                <a
                  target="_blank"
                  aria-label="pinterest"
                  rel="noreferrer noopener"
                  href="https://br.pinterest.com/g6publicidade/stout-burger/"
                >
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source
                      src="assets/videos/portfolio/stout.mp4"
                      type="video/mp4"
                    />
                  </video>
                </a>
                <a
                  target="_blank"
                  aria-label="pinterest"
                  rel="noreferrer noopener"
                  href="https://br.pinterest.com/g6publicidade/cl%C3%ADnicas-uni%C3%A3o/"
                >
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source
                      src="assets/videos/portfolio/uniao.mp4"
                      type="video/mp4"
                    />
                  </video>
                </a>
              </div>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://br.pinterest.com/g6publicidade/"
                className="button"
              >
                {t("SERVICOS_E_PORTFOLIO.BOTAO_VER_PORTFOLIO_COMPLETO")}
              </a>
            </div>
          </div>
        </div>
        <div><LanguageButton theme="white"/></div>
      </div>
    );
  }
}


export default withTranslation()(ServicosEPortfolio);
