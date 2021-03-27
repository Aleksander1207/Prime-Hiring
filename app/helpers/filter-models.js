import Helper from '@ember/component/helper';

export default class FilterModels extends Helper{
  compute([val1,val2]){
    let models = [];
    val2.forEach(element =>{
      if(element.vehicleBrand != null && element.vehicleBrand.name !=null && element.vehicleBrand.name == val1){
        models.push(element);
      }
    });
    return models;
  }
}