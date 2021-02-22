import React, { useEffect, useState } from 'react'
import Wine from './Menu/Wine';
import Beer from './Menu/Beer';
import Whisky from './Menu/Whisky';
import '../../sass/style/Bar/Bar.css';
import { Link } from 'react-router-dom';

type Cart = 'wine' | 'beer' | 'whisky';


const Bar = () => {

    const [choice, setChoice] = useState<Cart>("wine")

    let handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        let cartSelect = ((event.target as HTMLButtonElement).dataset);
        setChoice(cartSelect.type as Cart)
    }

    let filterDish:any = () => {
        switch (choice) {
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
                {filterDish(choice)}
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
