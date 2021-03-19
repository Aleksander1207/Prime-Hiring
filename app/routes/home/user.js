import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeUserRoute extends Route {
    @service('fetch-request') request;

    async model(){
        let user = await this.request.fetchData('https://gara6.bg/auto-api/users/me');
        return user;
    }

}
