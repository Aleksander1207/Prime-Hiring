import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';
import Inflector from 'ember-inflector';
import { camelize } from '@ember/string';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service('custom-fetch') customFetchService;

  prepare(snapshot, method, includeId) {
      var endPoint = '';
      var queryParams = null;
      var ignore401 = false;
      method = method || "GET";
      const inflector = Inflector.inflector;

      if (snapshot.adapterOptions && snapshot.adapterOptions.hasOwnProperty('endPoint')) {
        endPoint = snapshot.adapterOptions.endPoint;
      } else {
        endPoint = camelize(inflector.pluralize(snapshot.modelName));
      }

      if (snapshot.adapterOptions && snapshot.adapterOptions.includeId != null) {
        if (snapshot.adapterOptions.includeId) {
          endPoint += "/" + Ember.get(snapshot, 'id');
        }
      } else if (includeId) {
        endPoint += "/" + Ember.get(snapshot, 'id');
      }

      if (snapshot.adapterOptions && snapshot.adapterOptions.hasOwnProperty('method')) {
        method = snapshot.adapterOptions.method;
      }

      if (snapshot.adapterOptions && snapshot.adapterOptions.hasOwnProperty('queryParams')) {
        queryParams = snapshot.adapterOptions.queryParams;
      }

      return {
        endPoint: endPoint,
        queryParams: queryParams,
        method: method
      }
    }

    query(store, type, query) {
      query = query || {};
      return this.customFetchService.makeRequest({
        url: query.baseUrl,
        method: query.method,
        endPoint: query.endPoint,
        queryParams: query.queryParams,
        data: query.data
      });
    }

    queryRecord(store, type, query) {
      return this.query.call(this, store, type, query);
    }

    createRecord(store, type, snapshot) {
      var data = this.serialize(snapshot, {
        includeId: true
      });
      var {
        endPoint,
        queryParams,
        method
      } = this.prepare(snapshot, this.constants.HTTP_METHOD_POST);
      return this.customFetchService.makeRequest({
        method: method,
        endPoint: endPoint,
        data: JSON.stringify(data),
        queryParams: queryParams
      });
    }

    updateRecord(store, type, snapshot) {
      var data = this.serialize(snapshot, {
        includeId: true
      });
      var {
        endPoint,
        queryParams,
        method
      } = this.prepare(snapshot, this.constants.HTTP_METHOD_PUT, true);
      return this.customFetchService.makeRequest({
        method: method,
        endPoint: endPoint,
        data: JSON.stringify(data),
        queryParams: queryParams
      });
    }

    findRecord(store, type, id, snapshot) {
      var {
        endPoint,
        queryParams,
        method
      } = this.prepare(snapshot, this.constants.HTTP_METHOD_GET, true);
      return this.customFetchService.makeRequest({
        method: method,
        endPoint: endPoint,
        queryParams: queryParams
      });
    }

    deleteRecord(store, type, snapshot) {
      var {
        endPoint,
        queryParams,
        method
      } = this.prepare(snapshot, this.constants.HTTP_METHOD_DELETE, true);
      return this.customFetchService.makeRequest({
        method: method,
        endPoint: endPoint,
        queryParams: queryParams
      });
    }
}
