import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class HomeVehiclesVehicleVehicleInfoController extends Controller{
    @tracked years = [];

    @action 
    populateYear(){
        if(this.years.length == 0){
            for(let i=1970 ; i<2023; i++){
                this.years.push(i);
            }
        }
        let index = 0;
        this.years.forEach(element =>{
            this.set(element);
        })
    
    }
}