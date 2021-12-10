import axios from 'axios';

const LOT_API_BASE_URL ="http://localhost:8080/api/v1/lots";

class LotService {

    getLot(){
        return axios.get(LOT_API_BASE_URL);
    }

    createLot(lot){
        return axios.post(LOT_API_BASE_URL, lot);
    }

    getLotById(lotIdentifier){
        return axios.get(LOT_API_BASE_URL + '/' + lotIdentifier);
    }

    updateLot(lot, lotIdentifier){
        return axios.put(LOT_API_BASE_URL + '/' + lotIdentifier, lot);
    }

    deleteLot(lotIdentifier){
        return axios.delete(LOT_API_BASE_URL + '/' + lotIdentifier);
    }
}

export default new LotService()