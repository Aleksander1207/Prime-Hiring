import Helper from '@ember/component/helper';

export default class IsEqual extends Helper{
  compute([val1,val2]){
      return val1 == val1;
  }
}
