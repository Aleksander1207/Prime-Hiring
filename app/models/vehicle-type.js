import Model, { attr } from '@ember-data/model';

export default class VehicleTypeModel extends Model {
    @attr('string') code;
}
