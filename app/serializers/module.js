import ApplicationSerializer from 'gara6/serializers/application';

export default class ModuleSerializer extends ApplicationSerializer {
  attrs = {
    vehicleCount: { serialize : false, deserialize : 'records' }
  };
}