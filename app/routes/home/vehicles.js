import Route from '@ember/routing/route';

export default class HomeVehiclesRoute extends Route {

    model(){
        return this.store.query('vehicle', {
          endPoint : 'vehicles'
        }).then((vehicles) =>{
          vehicles.forEach(vehicle =>{
            vehicle.regNum = pretifyRegNum(vehicle.regNum);
          });
          return vehicles;
        });
    }

}
