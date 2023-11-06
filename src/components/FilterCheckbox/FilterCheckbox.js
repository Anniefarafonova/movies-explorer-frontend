import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import './FilterCheckbox.css';


export default function FilterCheckbox({ isCheck, changeCheck}) {

    return (
        <>
            <section className="filter">
                <label className="filter__checkbox">
                    <input
                        type="checkbox"
                        className="filter__checkbox-input "
                        checked={isCheck}
                        onChange={changeCheck}
                    />
                </label>
                <p className="filter__title">Короткометражки</p>
            </section>
        </>
    )
}




