let data;

async function getPhotographers() {
    if (data) {
        return data;
    } else {
        try {
            let response = await fetch('data/photographers.json', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':
                        'https://david-ferrero1.github.io/Front-End-Fisheye/',
                },
            });

            data = await response.json();
            return await data;
        } catch (error) {
            console.log(error);
        }
    }
}
