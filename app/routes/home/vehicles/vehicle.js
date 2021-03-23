import Route from '@ember/routing/route';

export default class HomeVehiclesVehicleRoute extends Route {

    model(params){
        return this.modelFor('home.vehicles').find(vehicle => vehicle.id == params.vehicle_id);
    }

}
