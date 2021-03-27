export default {
  name: 'services',
  after: ['ember-data'],
  initialize(application) {

    let services = [
      ['customFetchService', 'custom-fetch'],
      ['vehicleBrandService', 'vehicle-brand'],
      ['vehicleModelService', 'vehicle-model'],
      ['vehicleTypeService', 'vehicle-type'],
      ['fuelTypeService', 'fuel-type']
    ];

    services.forEach((sv) => {
      application.inject('controller', sv[0], 'service:' + sv[1]);
      application.inject('component', sv[0], 'service:' + sv[1]);
      application.inject('route', sv[0], 'service:' + sv[1]);
      application.inject('template', sv[0], 'service:' + sv[1]);
      application.inject('model', sv[0], 'service:' + sv[1]);
      application.inject('helper', sv[0], 'service:' + sv[1]);
    });

  }
};
