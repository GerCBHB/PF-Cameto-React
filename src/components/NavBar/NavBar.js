import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Khali Design</p>
                </div>
            </section>
            <div className="container">
                <section>
                    <div className="columns">
                        <div className="column is--4">
                            <button>Libretas</button>        
                        </div>
                        <div className="column is-4">
                            <button>Recetarios</button>
                        </div>
                        <div className="column is-4">
                            <button>Boxes</button>
                        </div>
                    </div>
                </section>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar