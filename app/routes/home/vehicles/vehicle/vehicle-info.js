import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeVehiclesVehicleVehicleInfoRoute extends Route {
    @service applicationData;

   async setupController(controller,model){
        this._super(controller, model);

        let applicationObject = await this.applicationData.getData();
        let years = [];
        let months = [];
        for(let i = 1977; i<2023; i++){
            years.push(i);
        }

        for(let i = 1; i<13; i++){
            months.push(i);
        }

        controller.set('types', applicationObject.types.results);
        controller.set('brands', applicationObject.brands.results);
        controller.set('models', applicationObject.models.results);
        controller.set('fuelTypes', applicationObject.fuelTypes.results);
        controller.set('years', years);
        controller.set('months', months);
    }
}