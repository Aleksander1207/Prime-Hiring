import Component from '@ember/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import {inject as service} from "@ember/service";

export default class LoginComponent extends Component{
  @tracked email;
  @tracked password;
  @service router;

  @action
  togglePassword(){
      let input = document.getElementById('exampleInputPassword1');
      if(input.type == 'password'){
          input.type='text';
      }
      else{
          input.type='password';
      }
  }

  @action
  logUser(e){
    e.preventDefault();
    let userData = {
        'email' : this.email,
        'password' : this.password
    };
    let fetchObject = {
        method: 'POST',
        credentials: 'include',
        headers : {
            'content-type' : 'application/json',
        },
        body : JSON.stringify(userData),
    };
    fetch('https://gara6.bg/auto-api/users/login', fetchObject)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            if(data.statusCode == 'SUCCESS'){
                this.redirectHome();
            }
            else{
                throw Error('Check your data or connection');
            }
        })
        .catch(error =>{
            alert('Unable to log in ! ' + error);
        });
  }

  redirectHome(){
      this.router.transitionTo('home');
  }

}
