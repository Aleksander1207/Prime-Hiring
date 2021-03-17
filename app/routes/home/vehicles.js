import Route from '@ember/routing/route';

export default class HomeVehiclesRoute extends Route {

    async model(transition){
        let fetchObject = {
            method: 'GET',
            credentials : 'include',
            headers : {
                'content-type' : 'application/json',
            },
        };
        const response = await fetch('https://gara6.bg/auto-api/vehicles', fetchObject);
        const data = await response.json();
        if(data.statusCode == 'SUCCESS'){
            return data.data.results;
        }
        else{
            alert('Unable to retrieve vehicles ! . Please, check your internet connection !');
            transition.abort();
        }
    }

}

