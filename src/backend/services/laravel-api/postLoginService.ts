import { LaravelApi } from "backend/ApiTypesObjects/ApiTypeLaravel";
import { httpController } from "backend/controllers/htppController";


export class postLoginService {
    execute(data: string) {
        const http = new httpController();
        
        const config = {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            }
        }

        return http
        .handle( new LaravelApi() )
        .post("/login", data, config);
    }
}
