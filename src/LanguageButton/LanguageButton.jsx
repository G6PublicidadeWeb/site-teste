import React from "react";
import "./LanguageButton.scss";
import { withTranslation } from "react-i18next";
import i18n from "../i18n";

class LanguageButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languagesMenuVisible: false,
    };
    this.toggle = this.toggle.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  onLanguageChanged(lng) {
    this.setState({
      lng: lng,
    });
  }

  toggle() {
    this.setState({
      languagesMenuVisible: !this.state.languagesMenuVisible
    })
  }

  changeLanguage(lang) {
    this.setState({
      languagesMenuVisible: false
    })
    i18n.changeLanguage(lang)
  }

  render() {
    const languagesMenu = (
      <div className={this.props.theme === 'white' ? 'bg-white' : this.props.theme === 'dark' ? 'bg-black' : 'bg-transparent'}>
        <button
          aria-label="close language menu"
          className="close"
          onClick={this.toggle}
        >
          X
        </button>
        <button className="change" onClick={this.changeLanguage.bind(this,'pt-BR')}>
          Português.
        </button>
        <button className="change" onClick={this.changeLanguage.bind(this,'en')}>
          English.
        </button>
        <button className="change" onClick={this.changeLanguage.bind(this,'zh-Hans')}>
          中文。
        </button>
      </div>
    );
    return (
      <div id="i18n-wrapper" className="position-absolute">
        <button aria-label="open language menu" onClick={this.toggle}>
          <i className="fas fa-globe-americas"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#008bb2"
              d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"
            />
          </svg>
        </button>
        {this.state.languagesMenuVisible ? languagesMenu : null}
      </div>
    );
  }
}

export default withTranslation()(LanguageButton);
