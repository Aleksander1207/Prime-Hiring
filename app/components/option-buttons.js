import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";

export default class OptionButtonsComponent extends Component {
    @service router;

    @action
    logOut(){
        let fetchObject = {
            method: 'POST',
            headers : {
                'Content-type' : 'application/json', 
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
