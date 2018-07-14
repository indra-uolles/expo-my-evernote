import apisauce from 'apisauce';

const create = (baseURL = 'http://192.168.1.56:3000') => {

    const api = apisauce.create({
        baseURL,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
        timeout: 10000
    });
    
    // Logging
    if (__DEV__) {
        api.addMonitor((response) => console.log('API:', response));
    }

    const init = async(identifier, password) => { 
        api.setHeaders({Authorization: ''});

        const response = await api.post('/auth/local', { 
            identifier: identifier, 
            password: password 
        });

        if (response.ok) {
            api.setHeaders({
                'Authorization': `Bearer ${response.data.jwt}`
            });
        } else {
            throw new Error('forgot to start mongo & strapi? ' + response.problem);
        }
    };

    const getItems = async() => {
        const response = await api.get('/note');
        return response.data;
    };

    const getItem = async(id) => {
        const response = await api.get(`/note/${id}`);
        return response.data;
    };

    const createItem = async(data) => {
        const response = await api.post('/note', data);
        return response.data;
    };

    const findByTitle = async(txt) => {
        const response = await api.get(`/note?title_contains=${txt}`);
        return response.data;
    };

    const findByDescription = async(txt) => {
        const response = await api.get(`/note?description_contains=${txt}`);
        return response.data;
    };

    const findByTitleDescription = async(title, description) => {
        const response = await api.get(`/note?title_contains=${title}&description_contains=${description}`);
        return response.data;
    };


    return {
        init,
        getItems,
        getItem,
        createItem,
        findByTitle,
        findByDescription,
        findByTitleDescription
    };
};

export default create();

/* class Api {
    constructor() {

    }
}

const api = new Api();

export default api; */