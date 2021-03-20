import { helper } from '@ember/component/helper';
import { get } from '@ember/object';

function renderSelected(itemValue, vehicleValue){
    return itemValue.name == vehicleValue.name;
}

export default helper(renderSelected);