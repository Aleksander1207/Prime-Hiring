import Helper from '@ember/component/helper';

export default class Includes extends Helper{
  compute([val1,val2]){
      return val2.includes(val1.toString());
  }
}