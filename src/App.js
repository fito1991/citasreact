import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      citas: []
    };
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  componentDidUpdate() {
    // setItem agrega algo al storage y getItem obtiene algo del storage
    // Storage solo puede almacenar cadenas de texto
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    );
  }

  crearCita = (nuevaCita) => {
    // console.log(cita);
    const citas = [...this.state.citas, nuevaCita];

    console.log(citas);

    this.setState({
      citas: citas
    });
  }

  borrarCita = id => {
    console.log(id);

    // Obtener copia del state
    const citasActuales = [...this.state.citas];

    console.log('Antes...');
    console.log(citasActuales);

    // borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);

    console.log('Despues...');
    console.log(citas);

    // Actualizar el state
    this.setState({
      citas: citas
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          titulo={'Administrador de Pacientes de Veterinaria'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita
              crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCitas 
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;