import Helper from '@ember/component/helper';

export default class PretifyRegNum extends Helper{
  compute(regNum){
    let result='';
    let text = ((regNum).toString()).split('');
     for(let i=0; i<text.length; i++){
         let char = Number(text[i]);
         if(( isNaN(char) && !isNaN(text[i+1]) ) || ( !isNaN(char) && isNaN(text[i+1]) ) && (i+1 !=text.length)){
             result+=text[i] + ' ' + text[i+1];
             i++;
         }
         else{
             result+=text[i];
         }
     }
     return result;
  }
}