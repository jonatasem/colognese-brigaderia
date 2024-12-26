import { useState } from "react"

export default function Menu(){

    const [ menu, setMenu ] = useState(false);

    return (
        <section className="container-menu">
            <div className="icon-menu">

            </div>
            <article className="nav-menu">
                <nav>
                    <ul>
                        <li>Início</li>
                        <li>Sobre Mim</li>
                    </ul>
                </nav>
            </article>
        </section>
    )
}