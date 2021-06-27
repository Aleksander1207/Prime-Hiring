import Route from '@ember/routing/route';

export default class HomeDevelopersCreateRoute extends Route {

    model(){
        let developers = JSON.parse(localStorage.getItem('developers')) || [];

        let id;
        if(developers.length == 0){
            id = 1;
        }
        else{
            id = (developers[developers.length - 1].id) + 1;
        }
        let developer = {
            'id' : id,
            'isAvailable' : true,
            'data' : {
                'name' : '',
                'email' : '',
                'phone' : '',
                'location' : '',
                'picture' : '',
                'price' : '',
                'tech' : 'JavaScript',
                'description' : '',
                'years' : '',
                'lang' : 'English',
                'linkedIn' : '',
            }
        };
        return developer;
    }

}