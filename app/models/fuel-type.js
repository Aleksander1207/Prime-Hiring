import Model, { attr } from '@ember-data/model';

export default class FuelTypeModel extends Model {
    @attr('string') code;
    @attr uom;
}
