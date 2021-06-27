import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';
import { tracked } from "@glimmer/tracking";
import { doc } from 'prettier';

export default class DeveloperFormComponent extends Component {
    @service router;

    updateDeveloperData(developer){
        let developers = JSON.parse(localStorage.getItem('developers')) || [];
        developers.forEach(dev=>{
            if(dev.id == developer.id){
                dev.data.name = developer.data.name;
                dev.data.email = developer.data.email;
                dev.data.phone = developer.data.phone;
                dev.data.location = developer.data.location;
                dev.data.picture = developer.data.picture;
                dev.data.price = developer.data.price;
                dev.data.tech = developer.data.tech;
                dev.data.description = developer.data.description;
                dev.data.years = developer.data.years;
                dev.data.linkedIn = developer.data.linkedIn;
            }
        });
        localStorage.setItem('developers',JSON.stringify(developers));
        alert('Data Updated');
        this.router.transitionTo('home');
    }

    @tracked techs = [
        { 'id' : 1, 'name' : 'JavaScript'},
        { 'id' : 2, 'name' : 'Java'},
        { 'id' : 3, 'name' : '.NET'},
        { 'id' : 4, 'name' : 'Flutter'},
        { 'id' : 5, 'name' : 'Python'},
        { 'id' : 6, 'name' : 'PHP'}
    ];

    @tracked language = [
        { 'id' : 1, 'name' : 'English'},
        { 'id' : 2, 'name' : 'Serbian'},
        { 'id' : 3, 'name' : 'Bulgarian'}
    ];
    
    @action
    create(e){
        e.preventDefault();
        let isDeveloperCreated = false;
        let developers = JSON.parse(localStorage.getItem('developers')) || [];
        let id;
        let url = window.location.href;
        let lastSign = url[url.length - 1];
        if(Number.isInteger(Number(lastSign))){
            id = Number(lastSign);
            isDeveloperCreated = true;
        }
        else{
            if(developers.length == 0){
                id = 1;
            }
            else{
                id = (developers[developers.length - 1].id) + 1;
            }
        }
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let location = document.getElementById('location').value;
        let picture = document.getElementById('picture').value;
        let price = document.getElementById('price').value;

        let techs = document.getElementById('techSelect');
        let tech = techs.options[techs.selectedIndex].text;

        let description = document.getElementById('description').value;

        let years = document.getElementById('years').value;
        
        let languages = document.getElementById('langSelect');
        let lang = languages.options[languages.selectedIndex].text;

        let linkedIn = document.getElementById('linkedIn').value;

        let developer = {
            'id' : id,
            'isAvailable' : true,
            'data' : {
                'name' : name,
                'email' : email,
                'phone' : phone,
                'location' : location,
                'picture' : picture,
                'price' : price,
                'tech' : tech,
                'description' : description,
                'years' : years,
                'lang' : lang,
                'linkedIn' : linkedIn,
            }
        };

        if(isDeveloperCreated){
            this.updateDeveloperData(developer);
        }
        else{
            developers.push(developer);
            localStorage.setItem('developers', JSON.stringify(developers));
            alert('New Developer Created');
            this.router.transitionTo('home');
        }
    }

    @action
    delete(){
        let isDeletionConfirmed = confirm('Are you sure you would like to delete this developer ?');
        if(isDeletionConfirmed){
            let developers = JSON.parse(localStorage.getItem('developers')) || [];
            let url = window.location.href;
            let id = Number(url[url.length - 1]);
            console.log(id);
            for(let i=0; i<developers.length; i++){
                if(developers[i].id == id){
                    developers.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem('developers', JSON.stringify(developers));
            this.router.transitionTo('home');
        }
    }
}