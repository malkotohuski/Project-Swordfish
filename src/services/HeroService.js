import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/create-hero';

export const getAll = async () => {
    const result =  await request.get(baseUrl);
    const heroes = Object.values(result);

    return heroes;
};