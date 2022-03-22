import { Exception } from "./Exception";

export class ExceptionUtils {

    public static unavaible() {
        return new Exception(503, "Ops! Uma indisponibilidade aconteceu.");
    }

    public static badRequest() {
        return new Exception(400, "Humm! Não entendi o que você precisa");
    }
}
