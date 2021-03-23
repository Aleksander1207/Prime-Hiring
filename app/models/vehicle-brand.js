import Model, { attr } from '@ember-data/model';

export default class VehicleBrandModel extends Model {
    @attr('string') name;
    @attr('string') types;
}
