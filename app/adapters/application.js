import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    host = 'https://gara6.bg';
    namespace = 'auto-api';
    headers = {
        'content-type': 'application/json'
    }
}