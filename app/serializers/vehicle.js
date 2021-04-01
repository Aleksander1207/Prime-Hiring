import ApplicationSerializer from 'gara6/serializers/application';

export default class VehicleSerializer extends ApplicationSerializer {
  attrs = {
    primaryImgHash: { serialize : false, deserialize : 'records' },
    module: {serialize : 'records', deserialize : 'records'}
  };
}