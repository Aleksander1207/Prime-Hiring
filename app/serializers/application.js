import JSONSerializer from '@ember-data/serializer/json';
import {
  EmbeddedRecordsMixin
} from '@ember-data/serializer/rest';

let AppSerializer = JSONSerializer.extend(EmbeddedRecordsMixin, {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.results && Array.isArray(payload.results)) {
      let meta = payload;
      payload = payload.results;
      delete meta.results;
      payload.meta = meta;
    }

    removeNulls(payload);

    arguments[2] = payload;

    return this._super(...arguments);
  },

});

export default AppSerializer;
