import { useState } from "react";
import { musicHelper } from "../helpers/musicHelper";
import "../styles.css";

export const Sound = () => {

     const { music, onHandleMusic } = musicHelper();

    return (

        <>
     
            <button className="btn btn-sound" onClick={ onHandleMusic }>
               
                <i className={`bi ${ music ? 'bi-volume-down-fill' : 'bi-volume-mute-fill' } sound-icon`}></i>  

            </button>

        </>

    )

}
