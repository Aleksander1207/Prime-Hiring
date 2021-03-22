import Route from '@ember/routing/route';

export default class HomeUserRoute extends Route {

    async beforeModel(){
        this.vehicleTypeService.setup();
        this.vehicleModelService.setup();
        this.vehicleBrandService.setup();
        this.fuelTypeService.setup();
    }

}
