import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class HomeVehiclesRoute extends Route {
    @service('fetch-request') request;

    async model(){
        let vehicles = await this.request.fetchData('https://gara6.bg/auto-api/vehicles');
        return vehicles.results;
    }

}

