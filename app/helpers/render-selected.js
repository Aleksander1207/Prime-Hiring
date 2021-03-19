import { helper } from '@ember/component/helper';

function renderSelected({itemValue, vehicleValue}){
    return itemValue == vehicleValue;
}

export default helper(renderSelected);