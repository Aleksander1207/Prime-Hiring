import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
    @attr('string') email;
    @attr('string') fName;
    @attr('string') lName;
    @attr('string') mName;
    @attr('boolean', {defaultValue : false}) viberLinked;
    @attr language;
}
