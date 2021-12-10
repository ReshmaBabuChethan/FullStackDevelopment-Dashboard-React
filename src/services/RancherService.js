import axios from 'axios';

const RANCHER_API_BASE_URL ="http://localhost:8080/api/v1/ranchers";

class RancherService {

    getRancher(){
        return axios.get(RANCHER_API_BASE_URL);
    }

    createRancher(rancher){
        return axios.post(RANCHER_API_BASE_URL, rancher);
    }

    getRancherById(rancherId){
        return axios.get(RANCHER_API_BASE_URL + '/' + rancherId);
    }

    updateRancher(rancher, rancherId){
        return axios.put(RANCHER_API_BASE_URL + '/' + rancherId, rancher);
    }

    deleteRancher(rancherId){
        return axios.delete(RANCHER_API_BASE_URL + '/' + rancherId);
    }
}

export default new RancherService()