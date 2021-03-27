import Component from '@glimmer/component';

export default class YearsComponent extends Component {

    get years(){
        let years = [];
        for(let i=1977; i<2023; i++){
            years.push(i);
        }
        return years;
    }
}