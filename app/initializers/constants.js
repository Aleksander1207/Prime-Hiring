export function initialize(application) {


  var constants = Ember.Object.extend({
    MAX_INT: Math.pow(2, 31) - 1,
    STATUS_CODE_SUCCESS: "SUCCESS",
    STATUS_CODE_FAILURE: "FAILURE",
    FATAL_ERROR: "FATAL_ERROR",
    HTTP_METHOD_POST: "POST",
    HTTP_METHOD_PUT: "PUT",
    HTTP_METHOD_GET: "GET",
    HTTP_METHOD_DELETE: "DELETE",

    HTTP_ERROR_RESOURCE_NOT_FOUND: "HTTP_ERROR_RESOURCE_NOT_FOUND",
    HTTP_ERROR_FORBIDDEN: "HTTP_ERROR_FORBIDDEN",
    HTTP_ERROR_UNAUTHORIZED: "HTTP_ERROR_UNAUTHORIZED",
  });

  application.register('constants:main', constants);
  application.inject('controller', 'constants', 'constants:main');
  application.inject('component', 'constants', 'constants:main');
  application.inject('route', 'constants', 'constants:main');
  application.inject('template', 'constants', 'constants:main');
  application.inject('service', 'constants', 'constants:main');
};

export default {
  initialize
};
