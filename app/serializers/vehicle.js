import JSONSerializer from '@ember-data/serializer/json';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class VehicleSerializer extends JSONSerializer.extend(EmbeddedRecordsMixin) {
  attrs = {
    primaryImgHash: { serialize : false, deserialize : 'records' }
  };
}