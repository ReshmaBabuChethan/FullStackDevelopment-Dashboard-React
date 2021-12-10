import axios from 'axios';

const CATTLE_API_BASE_URL ="http://localhost:8080/api/v1/cattles";

class CattleService {

    getCattle(){
        return axios.get(CATTLE_API_BASE_URL);
    }

    createCattle(cattle){
        return axios.post(CATTLE_API_BASE_URL, cattle);
    }

    getCattleById(cattleIdentifier){
        return axios.get(CATTLE_API_BASE_URL + '/' + cattleIdentifier);
    }

    updateCattle(cattle, cattleIdentifier){
        return axios.put(CATTLE_API_BASE_URL + '/' + cattleIdentifier, cattle);
    }

    deleteCattle(cattleIdentifier){
        return axios.delete(CATTLE_API_BASE_URL + '/' + cattleIdentifier);
    }
}

export default new CattleService()