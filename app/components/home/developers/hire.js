import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';
import { tracked } from "@glimmer/tracking";

export default class HomeDevelopersHireComponent extends Component {
    @service router;

    @tracked today = new Date();
    @tracked fullDate = this.today.getFullYear() + '-0' + (this.today.getMonth()+1) + '-' + this.today.getDate();

    @action
    changed(){
        let startDate = document.getElementById('startDate').value;
        let endDate = document.getElementById('endDate');
        endDate.setAttribute('min', startDate);
    }

    @action
    hire(){
        let startDate = document.getElementById('startDate').value;
        let endDate = document.getElementById('endDate').value;
        let selectedDevelopersIds = [];
        let checkboxes = document.getElementsByName('developer');
        if(checkboxes.length == 0){
            alert('No developers available');
            this.router.transitionTo('home.developers');
        }
        for (let checkbox of checkboxes)
        {
            if (checkbox.checked) {
                selectedDevelopersIds.push(checkbox.value);
            }
        }
        if(selectedDevelopersIds.length == 0){
            alert('No developers selected');
            this.router.transitionTo('home.developers');
        }

        let developers = JSON.parse(localStorage.getItem('developers')) || [];

        let hiringRecords = JSON.parse(localStorage.getItem('hiringRecords')) || [];
        let id;
        if(hiringRecords.length == 0){
            id = 1;
        }
        else{
            id = (hiringRecords[hiringRecords.length - 1].id) + 1;
        }
        let hiredDevelopers = [];
        developers.forEach(dev =>{
            selectedDevelopersIds.forEach(selected =>{
                if(selected == dev.id){
                    dev.isAvailable = false;
                    hiredDevelopers.push(dev);
                }
            });
        });

        let hiringRecord = {
            'id' : id,
            'startDate' : startDate,
            'endDate' : endDate,
            'hiredDevelopers' : hiredDevelopers
        };
        hiringRecords.push(hiringRecord);
        localStorage.setItem('hiringRecords', JSON.stringify(hiringRecords));
        localStorage.setItem('developers', JSON.stringify(developers));
        this.router.transitionTo('home');
    }
}