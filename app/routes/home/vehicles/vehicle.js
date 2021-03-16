import Route from '@ember/routing/route';

export default class HomeVehiclesVehicleRoute extends Route {
    async model(params){
        return(params,params.id);
    }
}