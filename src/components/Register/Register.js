// Пользователь с таким email уже существует
import React, { useState, useEffect, useContext, useRef, useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import './Register.css';
// import App from "../App/App";


export default function Register({ onRegister, loggedIn }) {
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);


    const validateForm = () => {
        // let errors = {};
        // setIsValid(false)

        if (errors.name || errors.email || errors.password) {

            console.log(errors);
            console.log(errors.name);
            console.log(errors.email);
            console.log(errors.password);
            setIsValid(false)
        } else {
            setIsValid(true)
        }
        console.log(errors);
        // setErrors(errors)
        // // return errors
        // return setIsValid(true)
        // console.log(errors);
    }

    const inputOnChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setInputValues({ ...inputValues, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        // validateForm({ ...inputValues, [name]: value });
        validateForm({ ...errors, [name]: value });

        // setIsValid({ ...isValid, [name]: value});
        // setIsValid(target.closest("form").checkValidity());


        // setErrors(errors);
        // return errors;
        // if (errors.email) {
        //     setIsValid(false)
        //     }
        //     if (inputValues.password.length < 5) {
        //         errors.password = 'неправильный пароль'
        //     }
        //     if (errors.email || errors.password) {
        //         setIsValid(true)
        //     } else {
        //         setIsValid(false)
        //     }
        //     setErrors(errors);
        //     return errors;
        // };
    };
    // function handleChangeInput(e) {
    //     handleChange(e);
    //     if (isSuccess.length > 0) {
    //       setIsSuccess("");
    //     }
    //   }

    function handleSubmit(evt) {
        evt.preventDefault();
        setIsValid(validateForm())

        if (validateForm()) {
            alert("Form submitted");
        } else {
            alert("Form has errors.");
        }

        onRegister(inputValues.name, inputValues.email, inputValues.password);
        console.log("s");
    }
    // useEffect(() => {
    //     validateForm()
    // }, [inputValues]);

    return (
        <>
            <main className="main">
                <section className="register">
                    <div className="register__container">
                        <Link to="/" rel=''>
                            <img className="register__container-logo" src={imageLogo} alt="Логотип" />
                        </Link>
                        <form className="form form_login" name="form-login" noValidate
                            onSubmit={handleSubmit}
                        >
                            <h1 className="form__title form__title_login">Добро пожаловать!</h1>
                            <div className="form__container form__container_login" >
                                <label className="form__container-span">Имя</label>
                                <input id="name" type="text" placeholder="Введите Ваше имя" name="name"
                                    className={`form__container-item form__container-item_register ${errors.name ? 'form__container-item_register-none' : ' '}`}
                                    minLength="2"
                                    maxLength="30"
                                    value={inputValues.name || ""}
                                    onChange={inputOnChange}
                                    required
                                />
                                <span className={`register__error ${errors.name ? 'register__error_active' : ''}`}>{errors.name}</span>

                                {/* <span className={`register__error ${errors.name ? 'register__error_active' : ''}`}>{errors.name}
                                </span> */}
                                <label className="form__container-span">E-mail</label>
                                <input id="email" type="email" placeholder="Введите email" name="email"
                                    className={`form__container-item form__container-item_register ${errors.email ? 'form__container-item_register-none' : ' '}`}
                                    value={inputValues.email || ""}
                                    onChange={inputOnChange}
                                    required
                                />

                                <span className={`register__error ${errors.email ? 'register__error_active' : ''}`}>{errors.email}</span>
                                {/* <span className={`register__error ${errors.email ? 'register__error_active' : ''}`}>{errors.email} */}
                                {/* </span> */}

                                <label className="form__container-span">Пароль</label>
                                <input id="password" type="password" placeholder="Введите пароль" name="password"
                                    className={`form__container-item form__container-item_register ${errors.password ? 'form__container-item_register-none' : ' '}`}
                                    minLength="5"
                                    maxLength="30"
                                    value={inputValues.password || ""}
                                    onChange={inputOnChange}
                                    required
                                />
                                <span className={`register__error ${errors.password ? 'register__error_active' : ''}`}>{errors.password}</span>
                                {/* <span className={`register__error ${errors.password ? 'register__error_active' : ''}`}>{errors.password}
                                </span> */}

                            </div>

                            {/* <span className={`register__errors ${errors ? 'register__errors_active' : ' '}`}>
                                {isWarning}

                            </span> */}
                            {/* <span className="register__error">
                            {!isWarning ? (
                                    'ошибка' ) : ("нет ошибк")
                                }
                                </span>  */}


                            <span className="profile__error"> </span>

                            <button type="submit" aria-label="Зарегистрироваться"

                                className={`form__button-register ${isValid ? "form__button-register_disabled" : ''}`}
                                disabled={isValid}

                            > Зарегистрироваться</button>

                            {/* <button
                                className={
                                    isValid
                                        ? `form__button-register`
                                        : `form__button-register_disabled`
                                }
                                type="submit"
                                name="submit"
                                disabled={isValid}
                            // disabled={isValid && isloading? 'true': !isValid && isloading? 'true':!isValid && !isloading?'false':""}
                            > */}
                            {/* Зарегистрироваться
                            </button> */}
                        </form>

                        <p className="register__container-subtitle  register__subtitle">
                            Уже зарегистрированы?
                            <Link to="/signin" className="register__container-link" rel=''>Войти</Link>
                        </p>
                    </div>
                </section>
            </main >
        </>
    )
}





// export default function Register({ onRegister }) {
//     const initialValuesRegister = {
//         name: '',
//         email: '',
//         password: '',
//     };
//     const [valuesRegister, setValuesRegister] = useState(initialValuesRegister);
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValuesRegister({
//             ...valuesRegister,
//             [name]: value
//         });
//     }
//     function handleSubmit(e) {
//         e.preventDefault();
//         onRegister(valuesRegister)
//         reset(e)
//     }
//     function reset(e) {
//         setValuesRegister(initialValuesRegister)
//     }
//     return (
//         <>
//             <main className="main">
//                 <section className="register">
//                     <div className="register__container">
//                         <Link to="/" rel=''>
//                             <img className="register__container-logo" src={imageLogo} alt="Логотип" />
//                         </Link>
//                         <form className="form form_login" name="form-login" onSubmit={handleSubmit} noValidate>
//                             <h1 className="form__title form__title_login">Добро пожаловать!</h1>
//                             <div className="form__container form__container_login" >
//                                 <label className="form__container-span">Имя</label>
//                                 <input id="name" type="text" placeholder="Введите Ваше имя" minLength='2' name="name"
//                                     className="form__container-item form__container-item_register" onChange={handleChange} value={valuesRegister.name} required />
//                                 <label className="form__container-span">E-mail</label>
//                                 <input id="email" type="email" placeholder="Введите email" name="email"
//                                     className="form__container-item form__container-item_register" onChange={handleChange} value={valuesRegister.email} required />
//                                 <label className="form__container-span">Пароль</label>
//                                 <input id="password" type="password" placeholder="Введите пароль" name="password"
//                                     className="form__container-item form__container-item_register" onChange={handleChange} value={valuesRegister.password} required />
//                             </div>
//                             <button type="submit" aria-label="Зарегистрироваться" className="form__button-register" >Зарегистрироваться</button>
//                         </form>

//                         <p className="register__container-subtitle  register__subtitle">
//                             Уже зарегистрированы?
//                             <Link to="/signin" className="register__container-link" rel=''>Войти</Link>
//                         </p>
//                     </div>
//                 </section>
//             </main>
//         </>
//     )
// }

