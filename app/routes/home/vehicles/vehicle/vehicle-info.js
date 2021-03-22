import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeVehiclesVehicleVehicleInfoRoute extends Route {
    @service applicationData;

   async setupController(controller,model){
        this._super(controller, model);

          let years = [];
          let months = [];
          for(let i = 1977; i<2023; i++){
              years.push(i);
          }

          for(let i = 1; i<13; i++){
              months.push(i);
          }
          controller.set('imgSrc', model.primaryImgHash);
          controller.set('regNum', model.regNum);
          controller.set('km', model.km);
          controller.set('years', years);
          controller.set('months', months);
          controller.set('primaryFuelTankCapacity', model.primaryFuelTankCapacity);
          controller.set('hp', model.hp);
          controller.set('kw', model.kw);
          controller.set('displacement', model.displacement);
          controller.set('vin', model.vinNum);
          controller.set('engineNum', model.engineNum);
          controller.set('startKm', model.startKm);
          controller.set('vehicleAttr', model.vehicleAttributes);

    }
}
