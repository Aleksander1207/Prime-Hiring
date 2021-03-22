import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeVehiclesRoute extends Route {
    @service('custom-fetch') customFetchService;

    model(){
        return this.customFetchService.makeRequest({
          endPoint:'vehicles'
        }).then((data)=>{
          return data.results || [];
        });
    }

}
