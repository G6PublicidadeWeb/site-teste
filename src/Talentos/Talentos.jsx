import React, { useState} from "react";
import "./Talentos.scss";
import {withTranslation} from "react-i18next";
import LanguageButton from "../LanguageButton/LanguageButton";
import {useForm} from "react-hook-form";

function Talentos() {

  const {register, handleSubmit} = useForm();
  const [enviando, setEnviando] = useState(false)
  const [selectedFile, setSelectedFile] = useState("Currículo");

  function onSubmit(data) {
    var formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('numero', data.numero);
    formData.append('email', data.email);
    formData.append('cargo', data.cargo);
    formData.append('anexo', data.anexo[0]);

    const requestOptions = {
      method: 'POST',
      body: formData
    };

    setEnviando(true);
    fetch('forms/talentos.php', requestOptions)
      .then(()=>{
        alert("Currículo enviado! Boa sorte :)");
      })
      .catch(()=>{
        alert("Que pena, houve um erro ao enviar seu Currículo, tente novamente mais tarde T.T");
        setEnviando(false)
      });
  }

    return (
      <div className="ServicosEPortfolio bg-black w-100">
        <div className="bg-black w-100 py-5"/>
        <div className="container">
          <div className="row py-8">
            <div className="col-md-7 risco">
                <div className="info-container color-blue">
                  <div className="d-inline-block">
                    <img className={"img-fluid"} src="assets/images/talentos.png" alt={"talentos-img"}/>
                  </div>
                  <div className="d-inline-block text-wrapper">
                    <h1 className={"linear-wipe text-left"}>
                      Faça parte do time de Talentos G•Seis
                    </h1>
                  </div>
                </div>
              <p className={"text-light text-style"}>
                Buscamos profissionais que estejam dispostos a inventar, inovar e crescer junto com a gente, aqui os sonhos não tem limites.
              </p>
            </div>

            <div className="form-box col-lg-4 pl-5 ml-5">
              <div className="d-inline-block text-wrapper">
                <h2 className={"linear-wipe "}>
                  Seja um talento na G•Seis
                </h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div className="form-group">
                  <input
                    {...register("nome")}
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    {...register("numero")}
                    type="tel"
                    className="form-control"
                    placeholder="Telefone"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    {...register("cargo")}
                    type="text"
                    className="form-control"
                    placeholder="Cargo desejado"
                    required
                  />
                </div>
                <div className="custom-file">
                  <input
                    {...register("anexo")}
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setSelectedFile(e.target.files[0]?.name || "Currículo")}
                    required
                  />
                  <label className="custom-file-label" htmlFor="customFile">{selectedFile}</label>
                </div>

                <div className="pt-3 text-center">
                  <button className="button" type="submit" disabled={enviando}>
                    ENVIAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div style={{height: "30px"}}><LanguageButton theme="white"/></div>
      </div>
    );
}


export default withTranslation()(Talentos);
