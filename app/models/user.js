import Model, { attr , belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
    @attr('string') email;
    @attr('string') fName;
    @attr('string') lName;
    @attr('string') mName;
    @attr('string') primaryImgHash;
    @attr userRole;
    @attr('boolean', {defaultValue : false}) viberLinked;
    @attr moduleUsers;
    @attr vehicleGroupUsers;
    @attr language;
    @belongsTo('selected-module') selectedModule;
    @attr userAttributes;
}
