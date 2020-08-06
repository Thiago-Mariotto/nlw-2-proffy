import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/33105610?s=460&u=32c15e809836bde2121fe525c516f1919306f966&v=4" alt="Thiago Mariotto" />
                <div>
                    <strong>Thiago Mariotto</strong>
                    <span>Programação</span>
                </div>

            </header>

            <p>O melhor programador do mundo, talvez do Brasil
                        <br /><br />
                        Atualmente da aula pra todo mundo!
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 70,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;