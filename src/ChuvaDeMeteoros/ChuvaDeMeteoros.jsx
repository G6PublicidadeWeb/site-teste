import React from 'react';
import './Meteoro.scss';

class ChuvaDeMeteoros extends React.Component {
  meteoroTamanhos = ['pequeno', 'medio', 'grande']
  meteoroCores = ['azul', 'branco', 'laranja']

  constructor(props) {
    super(props);
    this.state = { meteoros: [] }
    this.removerMeteoro.bind(this);
  }
  
  componentDidMount() {
    this.timerID = setInterval(() => {
      if(Math.floor((Math.random() * 2)) === 0 && this.state.meteoros.length < 2){
        let y = Math.floor((Math.random() * 93) + 3);
        let tamanho = Math.floor((Math.random() * 3));
        let cor = Math.floor((Math.random() * 3));
        this.setState({
          meteoros: this.state.meteoros.concat({ 'id': new Date().getTime(), 'altura': y, 'tamanho': this.meteoroTamanhos[tamanho], 'cor': this.meteoroCores[cor] })
        })
      }
    }, this.props.frequencia)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  removerMeteoro(id) {
    this.setState({
      meteoros: this.state.meteoros.filter(value => { return value.id !== id })
    })
  }
  
  render() {
    const meteoros = this.state.meteoros;
    const meteorosElementos = meteoros.map((meteoro) =>
      <span key={meteoro.id} className={`d-none d-md-block meteoro ${meteoro.tamanho} ${meteoro.cor}`} style={{top: meteoro.altura + 'vh'}} onAnimationEnd={this.removerMeteoro.bind(this,meteoro.id)}></span>
    );
    return (
      meteorosElementos
    );
  }
}
export default ChuvaDeMeteoros;

