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
  signUp(e){
      e.preventDefault();
      let users = JSON.parse(localStorage.getItem('users')) || [];
      let id;
      if(users.length == 0){
          id = 1;
      }
      else{
          id = (users[users.length - 1].id) + 1;
      }
      let userData = {
        'id' : id, 
        'data' : {
            'email' : this.email,
            'password' : this.password
        }
      };
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));
      this.router.transitionTo('home');
  }
}