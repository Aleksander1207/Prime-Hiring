import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";

export default class OptionButtonsComponent extends Component {

    @service router;

    @action
    userMe(){
      this.router.transitionTo('home.user');
    }

    @action
    vehiclesList(){
        this.router.transitionTo('home.vehicles');
    }

    @action
    logOut(){
        let fetchObject = {
            method: 'POST',
            credentials : 'include',
            headers : {
                'content-type' : 'application/json',
            },
        };
        fetch('https://gara6.bg/auto-api/users/logout', fetchObject)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if(data.statusCode == 'SUCCESS'){
                    this.backToLogin();
                }
                else{
                    throw ('Check your internet connection');
                }
            })
            .catch(error =>{
                alert('Unable to Log out ! '+ error);
            });
    }

    backToLogin() {
        this.router.transitionTo('login');
    }
}
