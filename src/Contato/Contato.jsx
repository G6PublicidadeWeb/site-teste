import React from "react";
import "./Contato.scss";
import { withTranslation } from "react-i18next";
import Video from "./mapa.mp4";

import SocialIcons from "./SocialIcons/SocialIcons";
import LanguageButton from "../LanguageButton/LanguageButton";

class Contato extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveringMediaName: null,
    };
    this.renderContactText = this.renderContactText.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(socialMediaName) {
    this.setState({
      hoveringMediaName: socialMediaName,
    });
  }

  onMouseLeave() {
    this.setState({
      hoveringMediaName: null,
    });
  }

  onMouseClick(rede_social) {
    window.fbq('trackCustom', 'clickSocial', {'rede_social': rede_social});
  }

  renderSocialMedia(url, id, nome) {
    return (
      <a href={url} target="_blank" rel="noreferrer noopener">
        <img
          id={id}
          onMouseEnter={this.onMouseEnter.bind(this, nome)}
          onClick={this.onMouseClick.bind(this, nome)}
          onMouseLeave={this.onMouseLeave}
          className="social-icon"
          src={SocialIcons(id)}
          alt={nome}
        />
      </a>
    );
  }

  renderContactText() {
    const { t, i18n } = this.props;
    if (i18n.language === "zh-Hans") {
      return (
        <>
          <h1>{t("CONTATO.TEXTO_CLICAR")}</h1>
          <h2>{t("CONTATO.TEXTO_AZUL_SEMPRE_APARECE")}</h2>
        </>
      );
    } else {
      return (
        <>
          <h1>{t("CONTATO.TEXTO_CLICAR")}</h1>
          <h2>
            {t("CONTATO.TEXTO_AZUL_SEMPRE_APARECE")}
            {!this.state.hoveringMediaName && (
              <>
                <span>
                  {t("CONTATO.TEXTO_AZUL_SOME_AO_PASSAR_MOUSE")}
                  <b id="text-contato">
                    {t("CONTATO.TEXTO_BRANCO_SOME_AO_PASSAR_O_MOUSE")}
                  </b>
                </span>
              </>
            )}
            {this.state.hoveringMediaName && (
              <>
                {t("CONTATO.TEXTO_BRANCO_APARECE_AO_PASSAR_MOUSE")}
                <b> {this.state.hoveringMediaName}</b>
              </>
            )}
          </h2>
        </>
      );
    }
  }

  render() {
    return (
      <div className="Contato contato-container">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          src={Video}
        ></video>
        <div className="d-flex position-relative justify-content-center align-items-center h-100 flex-column w-100">
          <div className="position-relative social-container">
            <img className="img-fluid linhas" src="assets/images/linhas.png" alt="Lines" />
            {this.renderSocialMedia(
              "https://pt-br.facebook.com/g6publicidade",
              "facebook",
              "Facebook"
            )}
            {this.renderSocialMedia(
              "https://www.instagram.com/g6publicidade/",
              "instagram",
              "Instagram"
            )}
            {this.renderSocialMedia(
              "https://br.linkedin.com/company/g6publicidade",
              "linkedin",
              "LinkedIn"
            )}
            {this.renderSocialMedia(
              "https://br.pinterest.com/g6publicidade/",
              "pinterest",
              "Pinterest"
            )}
            {this.renderSocialMedia(
              "https://open.spotify.com/user/g6publicidade",
              "spotify",
              "Spotify"
            )}
            {this.renderSocialMedia(
              "https://www.tiktok.com/@g6publicidade",
              "tiktok",
              "TikTok"
            )}
            {/*{this.renderSocialMedia(*/}
            {/*  "https://twitter.com/g6_publicidade",*/}
            {/*  "twitter",*/}
            {/*  "Twitter"*/}
            {/*)}*/}
            {/*{this.renderSocialMedia(*/}
            {/*    "https://vk.com/g6publicidade", */}
            {/*    "vk", */}
            {/*    "VK"*/}
            {/*)}*/}
            {this.renderSocialMedia(
              "https://api.whatsapp.com/send?phone=5547996847759&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20respons%C3%A1vel%20comercial.",
              "whatsapp",
              "WhatsApp"
            )}
            {this.renderSocialMedia(
              "https://www.youtube.com/channel/UCipcnTzA9E7U3zVHR0fqSGQ",
              "youtube",
              "YouTube"
            )}
          </div>
          <div className="text mb-3">{this.renderContactText()}</div>
          <div><LanguageButton theme="dark"/></div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Contato);
