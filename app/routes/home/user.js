import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeUserRoute extends Route {
    @service('custom-fetch') customFetchService;

    model(){
      return this.store.queryRecord('user',{
        endPoint:'users/me'
      });
    }

}
