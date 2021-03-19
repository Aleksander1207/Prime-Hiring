import Service from '@ember/service';

export default class FetchRequestService extends Service {

   async fetchData(url){
        let fetchObject = {
            method: 'GET',
            credentials : 'include',
            headers : {
                'content-type' : 'application/json',
            },
        };
        const response = await fetch(url, fetchObject);
        const data = await response.json();
        if(data.statusCode == 'SUCCESS'){
            return data.data;
        }
        else{
            return null;
        }
        
    }
}
