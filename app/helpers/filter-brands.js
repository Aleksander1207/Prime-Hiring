import Helper from '@ember/component/helper';

export default class FilterBrands extends Helper{
  compute([val1,val2]){
    let typeId = val2.id;
    let brands = [];
    val1.forEach(element =>{
        if(element.types.includes(typeId)){
            brands.push(element);
        }
    });
    return brands;
  }
}