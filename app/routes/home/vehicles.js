import Route from '@ember/routing/route';

export default class HomeVehiclesRoute extends Route {

    async model(transition){
        let vehiclesData;
        let typesData;
        let brandsData;
        let modelsData;
        let fuelTypesData;
        let successful = true;
        let fetchObject = {
            method: 'GET',
            credentials : 'include',
            headers : {
                'content-type' : 'application/json',
            },
        };

        const vehiclesResponse = await fetch('https://gara6.bg/auto-api/vehicles', fetchObject);
        let data = await vehiclesResponse.json();
        if(data.statusCode == 'SUCCESS'){
            vehiclesData = data.data.results;
        }
        else{
            successful = false;
        }

        const typesResponse = await fetch('https://gara6.bg/auto-api/vehicleTypes', fetchObject);
        data = await typesResponse.json();
        if(data.statusCode == 'SUCCESS'){
           typesData = data.data.results;
        }
        else{
            successful = false;
        }

        const brandsResponse = await fetch('https://gara6.bg/auto-api/vehicleBrands?pageSize=2147483647', fetchObject);
        data = await brandsResponse.json();
        if(data.statusCode == 'SUCCESS'){
           brandsData = data.data.results;
        }
        else{
            successful = false;
        }

        const modelsResponse = await fetch('https://gara6.bg/auto-api/vehicleModels?pageSize=2147483647', fetchObject);
        data = await modelsResponse.json();
        if(data.statusCode == 'SUCCESS'){
           modelsData = data.data.results;
        }
        else{
            successful = false;
        }

        const fuelTypesResponse = await fetch('https://gara6.bg/auto-api/fuelTypes', fetchObject);
        data = await fuelTypesResponse.json();
        if(data.statusCode == 'SUCCESS'){
           fuelTypesData = data.data.results;
        }
        else{
            successful = false;
        }
        if(successful){
            vehiclesData.forEach(element =>{
                element['vehicleTypes'] = typesData;
                element['vehicleBrands'] = brandsData;
                element['vehicleModels'] = modelsData;
                element['fuelTypes'] = fuelTypesData;
            });
            console.log(vehiclesData);
            return vehiclesData;
        }
        else{
            alert('Unable to retrieve your vehicle ! Check your internet connection');
            transition.abort();
        }
        
    }

}

