import Model, { attr } from '@ember-data/model';

export default class ModuleModel extends Model {
    @attr('number') vehicleCount;
    @attr('boolean', {defaultValue : false}) licensed;
    @attr({defaultValue : null}) licensedTo;
}