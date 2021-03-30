import Model, { attr , belongsTo} from '@ember-data/model';

export default class VehicleModel extends Model {
    @attr('string') regNum;
    @attr('string') engineNum;
    @attr('string') vinNum;
    @attr('number') km;
    @attr('number') startKm;
    @attr('number') year;
    @attr('number') month;
    @attr('string', {defaultValue : null}) vehicleModelName;
    @attr('string', {defaultValue : null}) vehicleBrandName;
    @attr vehicleType;
    @attr vehicleBrand;
    @attr vehicleModel;
    @attr('string') primaryImgHash;
    @attr primaryFuelType;
    @attr({defaultValue : null}) secondaryFuelType;
    @attr('number') displacement;
    @attr('number') hp;
    @attr('number') kw;
    @attr('number') primaryFuelTankCapacity;
    @attr('number', {defaultValue : null}) secondaryFuelTankCapacity;
    @belongsTo('module') module;
    @attr vehicleAttributes;
    @attr({defaultValue : null}) vehicleAttributesToRemove;
    @attr documents;
    @attr({defaultValue : null}) documentsToRemove;
    @attr({defaultValue : null}) vehicleDocumentsToRemove;
    @attr imgs;
    @attr({defaultValue : null}) imgsToRemove;
    @attr({defaultValue : null}) tiresToRemove;
    @attr({defaultValue : null}) vehicleEventsToRemove;
    @attr({defaultValue : null}) vehicleFuelLogsToRemove;
    @attr vehicleUsers;
    @attr({defaultValue : null}) vehicleUsersToRemove;
    @attr({defaultValue : null}) workCardsToRemove;
}
