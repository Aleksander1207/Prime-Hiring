import Model, { attr } from '@ember-data/model';

export default class VehicleModelModel extends Model {
    @attr('string') name;
    @attr('string') types;
    @attr vehicleBrand;
}
