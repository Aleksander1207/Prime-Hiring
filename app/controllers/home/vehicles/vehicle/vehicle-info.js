import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class HomeVehiclesVehicleVehicleInfoController extends Controller{
    @tracked years;
    @tracked months;
    @tracked types;
    @tracked brands;
    @tracked models;
    @tracked fuelTypes;

    @action upperCase(num){
        alert(num);
    }

}