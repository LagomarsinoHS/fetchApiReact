import React from "react";


export const Input = (props) => {

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Buscador</span>
            </div>
            <input type="text" className="form-control" onChange={(e)=>props.valor(e)}/>
        </div>
    )
}