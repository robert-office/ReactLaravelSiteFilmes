import axios from "axios";

class httpService{
    execute(){
        return axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/api`
        });
    }
}

export { httpService }