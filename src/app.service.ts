import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHallo() {
        return "world";
    }
}
