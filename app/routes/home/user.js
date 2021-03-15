import Route from '@ember/routing/route';

export default class UserRoute extends Route{

   async model(){
        let fetchObject = {
            method: 'GET',
            credentials : 'include',
            headers : {
                'content-type' : 'application/json',
            },
        };
        const response = await fetch('https://gara6.bg/auto-api/users/me', fetchObject);
        const data = await response.json();
        if(data.statusCode == 'SUCCESS'){
            console.log(data.data);
            return data.data;
        }
        else{
            alert('Unable to retrieve your data ! . Please, check your internet connection !');
        }
    }

}