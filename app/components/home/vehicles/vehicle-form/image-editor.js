import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class ImageEditorComponent extends Component {

    @action
    edit(){
        alert('hd');
    }
}