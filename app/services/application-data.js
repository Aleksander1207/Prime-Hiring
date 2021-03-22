import Service from '@ember/service';
import {
  inject as service
} from '@ember/service';
import RSVP from 'rsvp';

export default class ApplicationDataService extends Service {
  @service('custom-fetch') customFetchService;

  getData() {
    return RSVP.hash({
      types: this.customFetchService.makeRequest({
        endPoint: 'vehicleTypes',
        queryParams: {
          pageSize: this.constants.MAX_INT
        }
      }),
      brands: this.customFetchService.makeRequest({
        endPoint: 'vehicleBrands',
        queryParams: {
          pageSize: this.constants.MAX_INT
        }
      }),
      models: this.customFetchService.makeRequest({
        endPoint: 'vehicleModels',
        queryParams: {
          pageSize: this.constants.MAX_INT
        }
      }),
      fuelTypes: this.customFetchService.makeRequest({
        endPoint: 'fuelTypes',
        queryParams: {
          pageSize: this.constants.MAX_INT
        }
      })
    });
  }
}
