import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class HomeVehiclesVehicleVehicleInfoController extends Controller{
    @tracked imgSrc;
    @tracked regNum;
    @tracked km;
    @tracked years;
    @tracked months;
    @tracked types;
    @tracked brands;
    @tracked models;
    @tracked fuelTypes;
    @tracked primaryFuelTankCapacity;
    @tracked hp;
    @tracked kw;
    @tracked displacement;
    @tracked vin;
    @tracked engineNum;
    @tracked startKm;
    @tracked vehicleAttr;

    @action
    calculatePower(value){
        if(value == "kw"){
            this.kw = Math.round(this.hp / 1.36); 
        }
        else{
            this.hp = Math.round(this.kw * 1.36);
        }
    }

    @action
    addDocument(num){
        this.vehicleAttr.forEach(element =>{
            let index = element.value.indexOf(num);
            if(index != -1){
                alert(element.value);
                let docs = element.value.replace(num.toString(), ',');
                element.value = docs;
            }
            else{
                alert(element.value);
                element.value = element.value + ',' + num.toString();
            }
        });
        this.vehicleAttr.forEach(element =>{
            alert(element.value);
        })
    }

}