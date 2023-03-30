import React from 'react';
import '../CreateHero.css'
import { useState } from 'react';

export const CreateHero = ({
    onCreateHeroSubmit,
}) => {
    const [values, setValues] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateHeroSubmit(values);
    };

    return (
        <div className='create-hero'>
            <section id="create-page" className="auth">
                <form id="create" onSubmit={onSubmit}>
                    <div className="container">

                        <h1>Create Hero</h1>

                        <label htmlFor="leg-title">Character name:</label>
                        <input defaultValue={values.title} onChange={onChangeHandler} type="text" id="title" name="title" placeholder="Enter hero name..." />

                        <label htmlFor="category">Class:</label>
                        <input defaultValue={values.category} onChange={onChangeHandler} type="text" id="category" name="category" placeholder="Enter game category..." />

                        <label htmlFor="levels">Level:</label>
                        <input defaultValue={values.maxLevel} onChange={onChangeHandler} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                        <label htmlFor="game-img">Image:</label>
                        <input defaultValue={values.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                        <label htmlFor="summary">Class:</label>
                        <textarea name="summary" id="summary" defaultValue={values.summary}></textarea>
                        <input className="btn submit" type="submit" value="Create Game" />
                    </div>
                </form>
            </section>
        </div >
    );
}

