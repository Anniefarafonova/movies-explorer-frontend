import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../images/logo.svg'
import './Login.css';

export default function Login({ onLogin }) {
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    // const [isWarning, setIsWarning] = useState("");
    const [isWarning, setIsWarning] = useState(false);

    const validateForm = () => {
        const errors = {};

        if (!/^\S+@\S+\.\S+$/.test(inputValues.email)) {
            errors.email = 'Некорректный email';
        }
        if (inputValues.password.length < 5) {
            errors.password = 'неправильный пароль'
        }
        if (errors.email || errors.password) {
            setIsValid(true)
        } else if (errors){
            setIsValid(false)
        }
        setErrors(errors);
        return errors;
    };

    const inputOnChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setInputValues({ ...inputValues, [name]: value });
        validateForm({ ...errors, [name]: value });
    };
    useEffect(() => {
        validateForm()
    }, [inputValues]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // setIsValid(validateForm())
        // setErrors(validateForm());
        if (validateForm()) {
            alert("true");
            setIsWarning(true)
            onLogin(inputValues.email, inputValues.password)
        } else {
            alert("false");
            setIsWarning(false)
        }
        // if (errors) {
        //     setIsWarning(true)
        // } else {
        //     setIsWarning(false)
        // }
        onLogin(inputValues.email, inputValues.password)
    };

    return (
        <>
            <main className="main">
                <section className="login">
                    <div className="login__container">
                        <Link to="/" rel=''>
                            <img className="login__container-logo" src={imageLogo} alt="Логотип" />
                        </Link>
                        <form className="form form_login" name="form-login" onSubmit={handleSubmit} noValidate>
                            <h1 className="form__title form__title_login">Рады видеть!</h1>
                            <div className="form__container form__container_login" >
                                <label className="form__container-span">E-mail</label>
                                <input id="email" type="email" placeholder="введите E-mail" name="email"
                                    className="form__container-item form__container-item_login"

                                    value={inputValues.email || ""}
                                    onChange={inputOnChange}

                                    required />
                                <span className={`register__error ${errors.email ? 'register__error_active' : ''}`}>{errors.email}
                                </span>
                                <label className="form__container-span">Пароль</label>
                                <input id="password" type="password" placeholder="введите пароль" name="password"
                                    className="form__container-item form__container-item_login"
                                    value={inputValues.password || ""}
                                    onChange={inputOnChange}
                                    required />
                                <span className={`register__error ${errors.password ? 'register__error_active' : ''}`}>{errors.password}
                                </span>
                            </div>

                            <span className={`login__errors ${isWarning ? '' : 'login__errors_active'}`}>
                                {/* {isWarning} */}
                                {"Вы ввели неправильный логин или пароль" || "При авторизации произошла ошибка. Токен не передан или передан не в том формате" || " При авторизации произошла ошибка. Переданный токен некорректен."}
                            </span>
                            <button type="submit" aria-label="Зарегистрироваться"
                                className={`form__button-register ${isValid ? "form__button-register_disabled" : ''}`}
                                disabled={isValid}
                            > Войти</button>
                        </form>

                        <p className="login__container-subtitle">
                            Ещё не зарегистрированы?
                            <Link to="/signup" className="login__container-link" rel=''>Регистрация</Link>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}






// export default function Login({ onLogin }) {
//     const [formValue, setFormValue] = useState({
//         email: '',
//         password: ''
//     })

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setFormValue({
//             ...formValue,
//             [name]: value
//         });
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onLogin( formValue.email, formValue.password)
//     }

//     return (
//         <>
//             <main className="main">
//                 <section className="login">
//                     <div className="login__container">
//                         <Link to="/" rel=''>
//                             <img className="login__container-logo" src={imageLogo} alt="Логотип" />
//                         </Link>
//                         <form className="form form_login" name="form-login" onSubmit={handleSubmit} noValidate>
//                             <h1 className="form__title form__title_login">Рады видеть!</h1>
//                             <div className="form__container form__container_login" >
//                                 <label className="form__container-span">E-mail</label>
//                                 <input id="email" type="email" placeholder="введите E-mail" name="email"
//                                     className="form__container-item form__container-item_login" onChange={handleChange} required />
//                                 <label className="form__container-span">Пароль</label>
//                                 <input id="password" type="password" placeholder="введите пароль" name="password"
//                                     className="form__container-item form__container-item_login" onChange={handleChange}  required />
//                             </div>
//                             <button type="submit" aria-label="Зарегистрироваться" className="form__button-login">Войти</button>
//                         </form>

//                         <p className="login__container-subtitle">
//                             Ещё не зарегистрированы?
//                             <Link to="/signup" className="login__container-link" rel=''>Регистрация</Link>
//                         </p>
//                     </div>
//                 </section>
//             </main>
//         </>
//     )
// }