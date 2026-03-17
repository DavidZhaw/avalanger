
import axios from "axios";
import 'dotenv/config';

const API_ROOT = process.env.API_ROOT;

export async function load() {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: API_ROOT + '/api/avalange',
            headers: {}
        };
        let response = await axios.request(config);

        return {
            avalanches: response.data
        }
    } catch (error) {
        console.log(error)
    }
}

export const actions = {
    registerAvalanche: async ({ request }) => {
        const data = await request.formData();
        const avalanche = {
            "country": data.get('country'),
            "description": data.get('description'),
        }

        try {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: API_ROOT + '/api/avalange',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            await axios.request(config);
        } catch (error) {
            console.log(error);
        }
    }
}
