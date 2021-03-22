import Route from '@ember/routing/route';

export default class HomeVehiclesVehicleRoute extends Route {
    model(params){
        return(params,params.id);
    }
}
