import React, { useEffect, useState } from 'react'
import '../../sass/style/Bar/Bar.css';
import MainCourse from './Menu/MainCourse';
import FirstCourse from './Menu/FirstCourse';
import Desserts from './Menu/Desserts';
import Starters from './Menu/Starters';
import { Link } from 'react-router-dom';
const Restaurant = () => {

    const [choice, setChoice] = useState("first-course")
    let handleClick = (e) => {
        setChoice(e.target.dataset.type)
    }

    let filterDish: any = () => {

        switch (choice) {
            case 'first-course': return <FirstCourse />
            case 'main-course': return <MainCourse />
            case 'starters': return <Starters />
            case 'desserts': return <Desserts />
        }
    }
    return (
        <div style={{ marginTop: '40px' }}>

            <section className="choince-menu">
                <button data-type="first-course" onClick={handleClick}> Dania Pierwsze</button>
                <button data-type="main-course" onClick={handleClick}> Dania główne</button>
                <button data-type="starters" onClick={handleClick}> Przystawki</button>
                <button data-type="desserts" onClick={handleClick}> Desery</button>
            </section>
            <section>
            <section>
                {filterDish(choice)}
            </section>
               
                <div className="contact">
                    <div>Jeśli chcesz zamówić do pokoju zadzwoń <a href="tel:+ 661360889">recepcja</a></div>
                    <div>Średni czas realizacji to około 35min</div>
                    <div className="btn">
                        <button>
                            <Link to="/rooms">Zobacz pokoje</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Restaurant
