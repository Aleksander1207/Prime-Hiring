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
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let existingProfile = false;
    users.forEach(user =>{
        if(user.data.email == this.email && user.data.password == this.password){
            existingProfile = true;
        }
    });
    if(existingProfile){
        this.router.transitionTo('home');
    }
    else{
        alert("Incorrect username/password");
    }
  }

}
