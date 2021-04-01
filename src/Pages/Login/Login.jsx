import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
//import { useForm } from "react-hook-form";

import '../../Styles/css/login.css'

export default function Login({ history }) {

    function handleValidation(event) {
        history.push('/main')
    }
    return (
        <div id="page-home">
            <div className="content">
                <main>

                    <h1>Hour Exchange</h1>
                    <p>Ajudamos pessoas a realizarem permutas de trabalho de forma eficiente e justa.</p>

                    <a type="submit" onClick={handleValidation}><strong>Entrar</strong></a>

                </main>

            </div>
        </div>
    )
}

// export default function Autenticar(props) {

//     const history = useHistory();
//     const dispatch = useDispatch()
//     const status = useSelector(state => state.logins.status);


//     function onSubmit(login) {
//         console.log(login);
//         dispatch(loginServer(login));
//     }

//     export default function Autenticar(props) {

//         const history = useHistory();
//         const dispatch = useDispatch()
//         const status = useSelector(state => state.logins.status);

//         const { register, handleSubmit, errors } = useForm();

//         function onSubmit(login) {
//             console.log(login);
//             dispatch(loginServer(login));
//         }


//         useEffect(() => {
//             if (status === 'logged_in') {
//                 history.push('/projetos');
//             }
//         }, [status])
