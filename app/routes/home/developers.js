import Route from '@ember/routing/route';

export default class HomeDevelopersRoute extends Route {

    model(){
        return JSON.parse(localStorage.getItem('developers'));
    }

}
