import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class HomeVehiclesVehicleVehicleInfoController extends Controller{
    @tracked years = [];
    @tracked emptyYears = true;
    @tracked months = [];
    @tracked emptyMonths = true;

    @action 
    populateYear(){
        if(this.years.length == 0){
            for(let i=1970 ; i<2023; i++){
                this.years.push(i);
            }
            this.emptyYears = false;
        }
        
    }
    @action 
    populateMonth(){
        if(this.months.length == 0){
            for(let i=1 ; i<13; i++){
                this.months.push(i);
            }
            this.emptyMonths = false;
        }
        
    }
}