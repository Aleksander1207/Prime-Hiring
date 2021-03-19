import Model from '@ember-data/model';

export default class UserModel extends Model {
    @attr('number') id;
    @attr('string') email;
    @attr('string') fName;
    @attr('string') lName;
    @attr('string') mName;
    @attr('boolean', {defaultValue : false}) viberLinked;
    @attr language;
}