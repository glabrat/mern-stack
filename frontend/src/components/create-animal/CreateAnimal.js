import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './CreateAnimal.css';

const MySwal = withReactContent(Swal)

export default class CreateAnimal extends Component {

    state = {
        animals: [],
        name: "",
        age: 0
    }

    async getAnimals() {
        const response = await axios.get('http://localhost:4000/api/v1/animals');
        this.setState({animals: response.data});
    }

    componentDidMount() {
        this.getAnimals();
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    
    onChangeAge = (e) => {
        this.setState({
            age: parseInt(e.target.value, 10)
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/v1/animals', {
            name: this.state.name,
            age: this.state.age
        }).catch(error => {
            if (error.response) {
                MySwal.fire({ icon: 'error', title: error.response.data.message });
            } else {
                MySwal.fire({ icon: 'error', title: `Couldn't connect to server` });
            }
        });
        this.setState({ name:"", age: 0 })
        this.getAnimals();
    }

    deleteAnimal = async (id) => {
        MySwal.fire({
            title: "Delete animal",
            text: "Do you want to delete this animal?",
            showCancelButton: true,
        }).then( async (swalAction) => {
            if (swalAction.isConfirmed === true ) {
                const response = await axios.delete('http://localhost:4000/api/v1/animals/' + id
                ).catch(error => {
                    if (error.response) {
                        MySwal.fire({ icon: 'error', title: error.response.data.message });
                    } else {
                        MySwal.fire({ icon: 'error', title: `Couldn't connect to server` });
                    }
                });
                this.getAnimals();
                if (response) {
                    MySwal.fire({ icon: 'success', title: 'Deleted OK' })
                }
            }
        });

    }

    render() {
        return (
            <div className="row mt-2">
                <div className="col-md-4">
                    <h3>Add new Animal</h3>
                    <div className="card card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    onChange={this.onChangeName}
                                    value={this.state.name}
                                />
                                <label htmlFor="age">Age</label>
                                <input 
                                    id="age"
                                    type="number"
                                    className="form-control"
                                    onChange={this.onChangeAge}
                                    value={this.state.age}
                                />
                            </div>
                            <button className="btn btn-primary">
                                Add animal
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                <h3 className="text-right">List of animals</h3>
                    <ul className="list-group list-animals">
                        {
                            this.state.animals.map(animal => (
                                <li className="list-group-item list-group-item-action" key={animal._id}>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            Name: { animal.name }
                                        </div>
                                        <div className="col-6 col-md-2">
                                            Age: { animal.age }
                                        </div>
                                        <div className="col-6 col-md-4">
                                            <span className="float-right text-primary" onClick={() => this.deleteAnimal(animal._id)}>Delete</span>
                                        </div>
                                    </div>
                                </li>) 
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
