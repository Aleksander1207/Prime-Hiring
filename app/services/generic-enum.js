import Service from '@ember/service';
import {
  inject as service
} from '@ember/service';
import {
  tracked
} from '@glimmer/tracking';

export default class GenericEnumService extends Service {
  @service('custom-fetch') customFetchService;
  @tracked _data = [];
  endPoint = null;

  setup() {
    return this.loadRequest();
  }

  loadRequest() {
    if (this.endPoint == null) {
      throw "Enum service model not defined";
    }

    return this.customFetchService.makeRequest({
      endPoint: this.endPoint,
      queryParams: {
        pageSize: this.constants.MAX_INT
      }
    }).then((data) => {
      this._data = data.results;
    });
  }

  get all(){
    return this._data;
  }

}
