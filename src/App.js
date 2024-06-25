import './App.css';
import React from 'react';

class App extends React.Component {
  state = { vrijednost: "" };

  promjenaTexta = event => {
    console.log("event    vrijednost: " + event.target.value);
    this.setState({ vrijednost: event.target.value });
  };

pohranaForme = event => {
event.preventDefault();
const {vrijednost} = this.state;

alert("Na server ćemo poslati informaciju: " + vrijednost);
//https://moja.stranica.com/prihvatPodataka?ime=
};

  render() {
    return (
      <form onSubmit={this.pohranaForme}>
        <label>Ime: </label>
        <input type="text" onChange={this.promjenaTexta}></input>
        <input type="submit" value="unesi"></input>
      </form>
    );
  }
}

export default App;
