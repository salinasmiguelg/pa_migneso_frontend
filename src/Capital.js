import React, { Component } from "react";
import axios from "axios";

class Capital extends Component {


    constructor(){
        super();
        this.state = {
            nombre:"Chile",
            capital:"",
            poblacion:""
        };
    }

    handleChange = event => {
        this.setState({ nombre: event.target.value });
    }
    handleChange2 = event => {
        this.setState({ poblacion: event.target.value });
    }
    handleChange3 = event => {
        this.setState({ capital: event.target.value });
    }

    handleSubmit = e => {
        const url = "http://localhost:8086/pais/nombre/" + this.state.nombre;
        e.preventDefault();
        axios
            .get(url)
            .then ( (response) => {
                console.log(response.data)
                this.setState({capital: response.data[0].capital})
                this.setState({poblacion: response.data[0].poblacion})
            })
            .catch(err => console.log(err));
    };



    render() {
        return (
            <div className="capital">
                <div className="card" style= {{ maxWidth: '22rem'}}>
                    <div className="card-body" onSubmit={this.handleSubmit} >
                        <form>
                            <div className="form-group">
                                <label>País</label>
                                <select nombre="nombre" onChange={this.handleChange}>
                                <option defaultValue="Chile">Chile</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Antigua y Barbuda">Antigua y Barbuda</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Brbados">Barbados</option>
                                <option value="Belice">Belice</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Brasil">Brasil</option>
                                <option value="Canadá">Canadá</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Estados Unidos">Estados Unidos</option>
                                <option value="Granada">Granada</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haití">Haití</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="México">México</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Panamá">Panamá</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Perú">Perú</option>
                                <option value="República Dominicana">República Dominicana</option>
                                <option value="San Cristóbal y Nieves">San Cristóbal y Nieves</option>
                                <option value="San Vicente y las Granadinas">San Vicente y las Granadinas</option>
                                <option value="Santa Lucía">Santa Lucía</option>
                                <option value="Surinam">Surinam</option>
                                <option value="Trinidad y Tobago">Trinidad y Tobago</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Venezuela">Venezuela</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Capital:</label>
                                <input 
                                        className="form-control" placeholder="Información" defaultValue={this.state.capital} 
                                disabled />
                            </div>
                            <div className="form-group">
                                <label>Habitantes:</label>
                                    <input 
                                            className="form-control" placeholder="Información" defaultValue={this.state.poblacion} 
                                    disabled />
                            </div>

                            <button type="submit" className="btn btn-primary">Mostrar</button>
                        </form>
                    </div>              
                </div>
            </div>
        );

    }
}

export default Capital;