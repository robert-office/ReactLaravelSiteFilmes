import { getPopularTvService } from "backend/services/getPopularTvService";

export class getPopularTvController {
    handle(page: number = 1){
        const service = new getPopularTvService();
        return service.execute(page);
    }
}