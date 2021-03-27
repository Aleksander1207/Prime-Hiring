import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class VehicleFormComponent extends Component {
    @service('custom-fetch') customFetchService;

    @action
    update(){
        let url = window.location.href;
        let backslashIndex = url.lastIndexOf('/');
        let id = url.slice(backslashIndex+1);
        let fullImageSource = document.getElementById('formVehicleImage').src;
        let primaryImgHash = fullImageSource.slice(36);
        let regNum = document.getElementById('formRegNum').value;
        let km = document.getElementById('formVehicleKm').value;
        let vehicleTypeId = document.getElementById('typeSelect').value;
        let vehicleBrandId = document.getElementById('brandSelect').value;
        let vehicleModelId = document.getElementById('modelSelect').value;
        let yearSelect = document.getElementById('yearSelect');
        let year = yearSelect.options[yearSelect.selectedIndex].text;
        let monthSelect = document.getElementById('monthSelect');
        let month = monthSelect.options[monthSelect.selectedIndex].text;
        let primaryFuelTypeId = document.getElementById('primaryFuelTypeSelect').value;
        let primaryFuelTankCapacity = document.getElementById('formPrimaryFuelTank').value;
        let hp = document.getElementById('horsePower').value;
        let kw = document.getElementById('kiloWat').value;
        let displacement = document.getElementById('displacement').value;
        let vin = document.getElementById('vin').value;
        let engineNum = document.getElementById('engineNum').value;
        let startKm = document.getElementById('startKm').value;
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let attributesValue = '';
        for (let checkbox of markedCheckbox) {
            attributesValue+= checkbox.value.toString() + ',';
        }
        let vehicleAttributes = [];
        let requiredDocs = {
            'id' : 144,
            'name' : 'requiredDocumentTypeIds',
            'value' : attributesValue,
        }
        vehicleAttributes.push(requiredDocs);
        let newData = {
            'id' : parseInt(id),
            'regNum' : regNum,
            'km' : parseInt(km),
            'vehicleType' : {
                'id' : parseInt(vehicleTypeId),
            },
            'vehicleBrand' : {
                'id' : parseInt(vehicleBrandId),
            },
            'vehicleBrandName' : null,
            'vehicleModel' : {
                'id' : parseInt(vehicleModelId),
            },
            'vehicleModelName' : null,
            'year' : parseInt(year),
            'month' : parseInt(month),
            'primaryFuelType' : {
                'id' : parseInt(primaryFuelTypeId),
            },
            'primaryFuelTankCapacity' : parseInt(primaryFuelTankCapacity),
            'secondaryFuelType' : null,
            'secondaryFuelTankCapacity' : null,
            'hp' : parseInt(hp),
            'kw' : parseInt(kw),
            'dispacement' : parseInt(displacement),
            'vinNum' : vin,
            'engineNum' : engineNum,
            'startKm' : parseInt(startKm),
            'vehicleAttributes' : vehicleAttributes,
            'vehicleAttributesToRemove' : null,
            'documents' : [],
            'documentsToRemove' : null,
            'imgs' : [],
            'imgsToRemove' : null,
            'module' : {
                'id' : 63,
            }, 
            'regNumTemplate' : null,
            'tiresToRemove' : null,
            'vehicleDocumentsToRemove' : null,
            'vehicleEventsToRemove' : null,
            'vehicleFuelLogsToRemove' : null,
            'vehicleUsers' : [],
            'vehicleUsersToRemove' : null,
            'workCardsToRemove' : null,
        };
        let responseData =  this.customFetchService.makeRequest({
            endPoint : 'vehicles/' + id,
            data : JSON.stringify(newData),
            method : 'PUT',
        });
        console.log(responseData);
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
}