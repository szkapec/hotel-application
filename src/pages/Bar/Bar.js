import React, { useEffect, useState } from 'react'
import Wine from './Menu/Wine';
import Beer from './Menu/Beer';
import Whisky from './Menu/Whisky';
import '../../sass/style/Bar/Bar.css';
import { Link } from 'react-router-dom';

const Bar = () => {

    const [choince, setChoince] = useState("wine")

    let handleClick = (e) => {
        setChoince(e.target.dataset.type)
    }

    let filter = () => {

        switch (choince) {
            case 'wine': return <Wine />;
            case 'beer': return <Beer />;
            case 'whisky': return <Whisky />;
        }
    }

    return (
        <div style={{ marginTop: '40px' }}>
            <section className="choince-menu">
                <button data-type="wine" onClick={handleClick}> Karta win</button>
                <button data-type="beer" onClick={handleClick}> Karta Piw</button>
                <button data-type="whisky" onClick={handleClick}> Karta Whisky</button>
            </section>
            <section>
                {filter(choince)}
            </section>
            <div className="contact">
                <div>Jeśli chcesz zamówić do pokoju zadzwoń <a href="tel:+ 661360889">recepcja</a></div>
                <div>Średni czas dostarczenia to około 8min</div>
                <div className="btn">
                    <button>
                        <Link to="/rooms">Zobacz pokoje</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Bar
