import React, { useState } from 'react';

import '../../Styles/css/login.css'

export default function Login({ history }) {
    
    function handleValidation(event) {
        history.push('/main')
    }
    return (
        <div id="page-home">
        <div class="content">
            <main>

                <h1>Hour Exchange</h1>
                <p>Ajudamos pessoas a realizarem permutas de trabalho de forma eficiente e justa.</p>
                
                <a type="submit" onClick={handleValidation} ><strong>Entrar</strong></a>

            </main>
            
        </div>
    </div>
    )
}

