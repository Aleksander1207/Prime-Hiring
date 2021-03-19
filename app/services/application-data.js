import Service from '@ember/service';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class ApplicationDataService extends Service {
    @service('fetch-request') request;

    getData(){
        return RSVP.hash({
            types : this.request.fetchData('https://gara6.bg/auto-api/vehicleTypes'),
            brands :  this.request.fetchData('https://gara6.bg/auto-api/vehicleBrands?pageSize=2147483647'),
            models :  this.request.fetchData('https://gara6.bg/auto-api/vehicleModels?pageSize=2147483647'),
            fuelTypes : this.request.fetchData('https://gara6.bg/auto-api/fuelTypes')
        });
    }
}