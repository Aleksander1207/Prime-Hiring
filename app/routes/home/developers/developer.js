import Route from '@ember/routing/route';

export default class HomeDevelopersAllDeveloperRoute extends Route {

    model(params){
        return this.modelFor('home.developers').find(developer => developer.id == params.developer_id);
    }

}