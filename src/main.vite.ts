import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const promise = NestFactory.create(AppModule);
    // @ts-ignore
    if (import.meta.env.PROD) {
        const app = await promise;
        await app.listen(3000);
    } else {
        return promise;
    }
}

export const app = bootstrap();
