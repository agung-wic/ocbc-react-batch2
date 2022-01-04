import React from "react";
import './index.css'

function Header(): JSX.Element {
    return (
        <header className="header">
            <h1>My First React App</h1>
        </header>
    )
}

function Content() {
    return (
        <div className="content">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quisquam minima suscipit hic doloremque sapiente accusantium illum quidem nemo excepturi? Doloribus, ad minus non illum rem tenetur aliquid quibusdam ex.
            </p>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <p>&copy; Agung Wicaksono - 2022</p>
        </div>
    )
}

function Card() {
    return (
        <div className="card">
            <Header />
            <hr />
            <Content />
            <hr />
            <Footer />
        </div>
    )
}

export default Card