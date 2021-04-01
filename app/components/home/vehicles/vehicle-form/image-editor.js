import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class ImageEditorComponent extends Component {

    @action
    edit(){
        let inputFile = document.getElementById('imageUploader');
        let img = document.getElementById('formVehicleImage');
        inputFile.click();
        inputFile.onchange = () =>{
            console.log(inputFile.files);
            img.src=inputFile.files[0].name;
            console.log(img.src);
        }        
    }

    @action
    delete(){
        let img = document.getElementById('formVehicleImage');
        img.src = 'https://gara6.bg/assets/images/vehicle-placeholder-10e40a480b5ec4115a147a4c6f0fa52e.jpg';
    }
}