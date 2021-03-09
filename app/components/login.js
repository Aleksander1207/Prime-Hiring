import Component from '@ember/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class LoginComponent extends Component{
  @tracked email;
  @tracked password;

  @action
  logUser(){
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
                alert(response.status);
                alert(response.statusText);
                if(!response.ok){
                    alert('Network response was not ok');
                }
                alert(response.json());
                return response.json();
                // alert('Logged In');
                // this.transitionToRoute('home');
            })
            .then(data =>{
                alert(data);
            }).catch(error => {
                alert(`There has been a problem with your fetch operation: ${error}`);
            });
    }
}