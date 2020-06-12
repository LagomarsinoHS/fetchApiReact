import React, { useState, useEffect } from "react";
import { Input } from "./input";
import { Spinner } from "./spinner";


export const App = () => {
    const [state, setState] = useState(
        {
            character: null,
            lenguajes: [{ name: "js" }, { name: "java" },],
            input: ""
        })


    const getPersonajes = (url, opciones = "") => {

        fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setState((prevState) => {
                    return { ...prevState, character: data }
                })
            })
    }
    /* 
         const getPersonajes2 = async (url = "", options = {}) => {
             const response = await fetch(url, options);
             const data = await response.json();
             console.log(data);
             setState(prevState => {
                 return { ...prevState, characters: data }
             })
         } */

    const getInput = (e) => {
        console.log(e.target.value)
        let data = { input: e.target.value }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }



    useEffect(() => {
        getPersonajes("https://rickandmortyapi.com/api/character");
    }, [])


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 mx-auto">
                    <Input valor={getInput} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {
                            state.character !== null ? (
                                state.character.results.filter((ele) => {
                                    return ele.name.toLowerCase().includes(state.input.toLowerCase());
                                }).map((elemento, indice) => {
                                    return <li key={indice} className="list-group-item list-group-item-action">{`${indice + 1} - ${elemento.name}`}</li>
                                })) :
                                (<Spinner />)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )

}

//https://rickandmortyapi.com/api/character