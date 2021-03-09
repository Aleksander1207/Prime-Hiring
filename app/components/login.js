import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class LoginComponent extends Component{
  @tracked email;
  @tracked password;
  @service router;
  
  @action
  logRequest(){
    let result=0;
    let userData = {
        'email' : this.email,
        'password' : this.password
    };
    let fetchObject = {
        method: 'POST',
        headers : {
            'Content-type' : 'application/json', 
        },
        body : JSON.stringify(userData),
    };
    fetch('https://gara6.bg/auto-api/users/login',fetchObject)
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            result=1;
        })
        .catch(error => {
            alert(`There has been a problem with your fetch operation: ${error}`);
        });
    return result;
  }


  @action
  logUser(e){
    e.preventDefault();
        let result = this.logRequest;
        if(result){
            alert('Logged in');
            this.router.transitionTo('home');
        }
        else{
            alert('Not logged in');
        }
    }
}