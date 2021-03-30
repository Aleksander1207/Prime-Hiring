import JSONSerializer from '@ember-data/serializer/json';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class ModuleSerializer extends JSONSerializer.extend(EmbeddedRecordsMixin) {
  attrs = {
    vehicleCount: { serialize : false, deserialize : 'records' }
  };
}