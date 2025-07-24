import React from "react";
import "./Home.scss";
import { withTranslation } from "react-i18next";
import VideoSelector from './Videos/VideoSelector'

//import "./GlobalStyles.Talentos.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mob: window.innerWidth < 670
    }
    this.get_video = this.get_video.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize',this.onWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize',this.onWindowResize)
  }

  onWindowResize(e){
    const mobile = window.innerWidth < 670
    if(this.state.mob !== mobile){
      this.setState({
        mob: mobile
      })
    }
  }

  get_video(){
    return VideoSelector(this.props.i18n.language, this.state.mob)
  }
  
  render(){
    return (
      <div className="Home video-container">
        <video key={this.get_video()} className="background-video" autoPlay loop muted
          playsInline alt="G6 Video" src={this.get_video()} type='video/mp4'>
        </video>
      </div>
    )
  }
}

export default withTranslation()(Home);