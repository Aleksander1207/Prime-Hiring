import Component from '@glimmer/component';

export default class MonthsComponent extends Component {

    get months(){
        let months = [];
        for(let i=1; i<13; i++){
            months.push(i);
        }
        return months;
    }
}