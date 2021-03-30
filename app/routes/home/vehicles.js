import Route from '@ember/routing/route';

export default class HomeVehiclesRoute extends Route {

    model(){
        return this.store.query('vehicle', {
          endPoint : 'vehicles'
        });
    }

}
