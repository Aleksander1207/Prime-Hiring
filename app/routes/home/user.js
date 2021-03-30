import Route from '@ember/routing/route';

export default class HomeUserRoute extends Route {

    model(){
      return this.store.queryRecord('user',{
        endPoint:'users/me'
      });
    }

}
