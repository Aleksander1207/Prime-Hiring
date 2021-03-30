import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class VehicleFormComponent extends Component {
    @service store;

    @action
    update(){
        let url = window.location.href;
        let backslashIndex = url.lastIndexOf('/');
        let id = parseInt(url.slice(backslashIndex+1));
        let fullImageSource = document.getElementById('formVehicleImage').src;
        //let primaryImgHash = fullImageSource.slice(36);
        //console.log(primaryImgHash);
        let vehicleTypeId = document.getElementById('typeSelect').value;
        let brandSelect = document.getElementById('brandSelect');
        let brandId = brandSelect.value;
        let selectedBrand = brandSelect.options[brandSelect.selectedIndex].text;
        let vehicleBrand = {
            'id' : brandId,
            'name' : selectedBrand,
        };
        let brandName = document.getElementById('brandName').value;
        let vehicleModelId = document.getElementById('modelSelect').value;
        let modelName = document.getElementById('modelName').value;
        let yearSelect = document.getElementById('yearSelect');
        let year = parseInt(yearSelect.options[yearSelect.selectedIndex].text);
        let monthSelect = document.getElementById('monthSelect');
        let month = parseInt(monthSelect.options[monthSelect.selectedIndex].text);
        let primaryFuelTypeId = document.getElementById('primaryFuelTypeSelect').value;
        let secondaryFuelTypeId = document.getElementById('secondaryFuelTypeSelect').value;
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let attributesValue = '';
        for (let checkbox of markedCheckbox) {
            attributesValue+= checkbox.value.toString() + ',';
        }
        this.store.findRecord('vehicle', id).then((vehicle) =>{
            vehicle.year = year;
            vehicle.month = month;
            if(brandName == ''){
                vehicle.vehicleBrandName = null;
            }
            if(modelName == ''){
                vehicle.vehicleModelName = null;
            }
            console.log(vehicle.changedAttributes());
            vehicle.save();
        });
        
    }

    @action
    toggleBrand(){
        let brandSelect = document.getElementById('brandSelect');
        let brandSelectLabel = document.getElementById('brandSelectLabel');
        let brandNameField = document.getElementById('brandName');
        let brandNameLabel = document.getElementById('brandNameLabel');
        let brandToggler = document.getElementById('toggleBrand');

        let modelSelect = document.getElementById('modelSelect');
        let modelSelectLabel = document.getElementById('modelSelectLabel');
        let modelNameField = document.getElementById('modelName');
        let modelNameLabel = document.getElementById('modelNameLabel');
        let modelToggler = document.getElementById('toggleModel');

        if(brandSelect.style.display != 'none' && brandSelectLabel.style.display != 'none'){
            brandSelect.style.display = 'none';
            brandSelectLabel.style.display = 'none';
            brandNameField.style.display = 'block';
            brandNameLabel.style.display = 'block';
            brandToggler.innerHTML = 'Select Brand';

            modelSelect.style.display = 'none';
            modelSelectLabel.style.display = 'none';
            modelNameField.style.display = 'block';
            modelNameLabel.style.display = 'block';
            modelToggler.style.display = 'none';
        }
        else{
            brandSelect.style.display = 'block';
            brandSelectLabel.style.display = 'block';
            brandNameField.style.display = 'none';
            brandNameLabel.style.display = 'none';
            brandToggler.innerHTML = 'Other Brand';

            modelSelect.style.display = 'block';
            modelSelectLabel.style.display = 'block';
            modelNameField.style.display = 'none';
            modelNameLabel.style.display = 'none';
            modelToggler.style.display = 'block';
        }
    }

    @action
    toggleModel(){
        let modelSelect = document.getElementById('modelSelect');
        let modelSelectLabel = document.getElementById('modelSelectLabel');
        let modelNameField = document.getElementById('modelName');
        let modelNameLabel = document.getElementById('modelNameLabel');
        let modelToggler = document.getElementById('toggleModel');

        if(modelSelect.style.display != 'none' && modelSelectLabel.style.display != 'none'){
            modelSelect.style.display = 'none';
            modelSelectLabel.style.display = 'none';
            modelNameField.style.display = 'block';
            modelNameLabel.style.display = 'block';
            modelToggler.innerHTML = 'Select Model';
        }
        else{
            modelSelect.style.display = 'block';
            modelSelectLabel.style.display = 'block';
            modelNameField.style.display = 'none';
            modelNameLabel.style.display = 'none';
            modelToggler.innerHTML = 'Other Model';
        }
    }

    @action
    addFuelType(){
        let secondaryFuelTypeSelect = document.getElementById('secondaryFuelTypeSelect');
        let secondaryFuelTypeLabel = document.getElementById('secondaryFuelTypeLabel');
        let secondaryFuelTypeButton = document.getElementById('toggleSecondaryFuelType');
        let secondaryFuelTankCapacity = document.getElementById('formSecondaryFuelTank');
        let secondaryFuelTankLabel = document.getElementById('secondaryFuelTankLabel');
        if(secondaryFuelTypeSelect.style.display == 'none' && secondaryFuelTypeLabel.style.display == 'none'){
            secondaryFuelTypeSelect.style.display = 'block';
            secondaryFuelTypeLabel.style.display = 'block';
            secondaryFuelTypeButton.innerHTML = 'Remove';
            secondaryFuelTankCapacity.style.display = 'block';
            secondaryFuelTankLabel.style.display = 'block';
        }
        else{
            secondaryFuelTypeSelect.style.display = 'none';
            secondaryFuelTypeLabel.style.display = 'none';
            secondaryFuelTankCapacity.style.display = 'none';
            secondaryFuelTankLabel.style.display = 'none';
            secondaryFuelTypeButton.innerHTML = 'Add Secondary Fuel Type';
        }
    }
}