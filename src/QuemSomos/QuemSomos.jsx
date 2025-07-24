import React from "react";
import "./QuemSomos.scss";
import { useTranslation } from "react-i18next";
import Video from "./linhas_animadas.mp4";
function QuemSomos() {

  const { t } = useTranslation();

  return (
    <div className="position-relative w-100 QuemSomos">
      <video className="background-video d-none d-lg-block"
        autoPlay
        loop
        muted
        playsInline
        alt="Lines Effect"
        src={Video}
        type="video/mp4">
      </video>

      <div className="container">
        <div className="row">
            <div className="offset-md-6 col d-flex justify-content-center flex-column color-white">
                <h1>{t("QUEM_SOMOS.TITULO")}</h1>
                <div id="historia">
                    <div>
                        {[1,2,3,4,5,6,7,8].map(num => (
                          <p key={num} dangerouslySetInnerHTML={{ __html: t(`QUEM_SOMOS.PARAGRAFO_${num}`) }} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default QuemSomos;