import Model, { attr , belongsTo } from '@ember-data/model';

export default class SelectedModuleModel extends Model {
    @attr('string') name;
    @attr('string') email;
    @attr('number') gsm;
    @attr({defaultValue : null}) licensedTo;
    @attr('boolean', {defaultValue : false}) licensed;
    @attr({defaultValue : null}) moduleType;
    @attr currency;
    @attr('string') country;
    @attr('string') firmName;
    @attr('string') firmOwner;
    @attr('string') firmAddress;
    @attr firmVat;
    @attr('number') userCount;
    @attr('number') vehicleCount;
    @attr('number') vehicleGroupCount;
    @belongsTo('user') user;
    @attr moduleAttributes;
    @attr({defaultValue : null}) billingStripe;
}