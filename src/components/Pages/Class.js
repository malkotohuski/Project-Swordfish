import React from 'react';
import '../../App.css';
import '../../Class.css'
import { Link } from 'react-router-dom';


export default function heroClass() {

    return (
        <>

            <section id="catalog-page">
                <h1>Hero Class</h1>
                <div className='table-heroes'>
                    <div className="paladin">
                        <div className="allGames-info">

                            <h2>Paladin</h2>
                            <Link to='/class/paladin' className="details-button">Details</ Link>
                        </div>

                    </div>
                    <div className="warrior">
                        <div className="allGames-info">


                            <h2>Warrior</h2>
                            <Link to='/class/warrior' className="details-button">Details</ Link>
                        </div>

                    </div>
                    <div className="mage">
                        <div className="allGames-info">


                            <h2>Mage</h2>
                            <Link to='/class/mage' className="details-button">Details</ Link>
                        </div>
                    </div>

                    <div className="druid">
                        <div className="allGames-info">


                            <h2>Druid</h2>
                            <Link to='/class/druid' className="details-button">Details</ Link>
                        </div>
                    </div>


                    <div className="hunter">
                        <div className="allGames-info">


                            <h2>Hunter</h2>
                            <Link to='/class/hunter' className="details-button">Details</ Link>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}


