import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";

export default class OptionButtonsComponent extends Component {
    @service router;

    @action
    developers(){
        this.router.transitionTo('home.developers');
    }

    @action
    logOut(){
        this.router.transitionTo('login');
    }
}
