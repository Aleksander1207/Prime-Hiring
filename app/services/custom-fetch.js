import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FetchRequestService extends Service {
  @tracked host = 'https://gara6.bg';
  @tracked namespace = 'auto-api';
  headers = {
    'content-type': 'application/json',
  };

  get baseUrl() {
    return this.host + '/' + this.namespace + '/';
  }

  makeRequest(opt) {
    opt = opt || {};
    opt.endPoint = opt.endPoint || '';
    let baseUrl = opt.baseUrl || this.baseUrl;
    let url = baseUrl + opt.endPoint + this.processQueryString(opt.queryParams);
    let data = opt.data;
    let headers = copyObject(this.headers);

    if (opt.headers) {
      for (var prop in opt.headers) {
        headers[prop] = opt.headers[prop];
      }
    }

    let fetchObject = {
      credentials: 'include',
      method: opt.method || this.constants.HTTP_METHOD_GET,
      body: data,
      headers: headers
    };
    return fetch(url, fetchObject).then((response) =>{
      if(response.status == 200){
        return response.json();
      }
      else{
        throw response;
      }
    }).then((payload) =>{
      if (payload.statusCode == this.constants.STATUS_CODE_SUCCESS) {
        return payload.data;
      } else {
        throw payload;
      }
    }).catch((err) =>{
      //logger(err);
      console.log(err);
      if(err.status){
        throw this.handleHttpException(err);
      }
      else if(err.statusCode == this.constants.STATUS_CODE_FAILURE){
        throw err.errorCode;
      }
      throw this.constants.FATAL_ERROR;
    });
  }

  handleHttpException(err){
    if(err.status == 404){
      return this.constants.HTTP_ERROR_RESOURCE_NOT_FOUND;
    }
    else if(err.status == 401){
      return this.constants.HTTP_ERROR_UNAUTHORIZED;
    }
    else if(err.status == 403){
      return this.constants.HTTP_ERROR_FORBIDDEN;
    }
    else this.constants.FATAL_ERROR;
  }

  processQueryString(queryParams) {
    if (queryParams == null) {
      return '';
    }
    let queryString = '?';
    for (let property in queryParams) {
      if (queryParams.hasOwnProperty(property) && queryParams[property] != null) {
        queryString += property + '=' + queryParams[property] + '&';
      }
    }
    return queryString.slice(0, -1);
  }

}