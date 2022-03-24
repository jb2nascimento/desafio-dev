
export class ServerResponse {
    code: number;
    message: string;
    details: any;

    public static builder(): ServerResponseBuilder {
        return new ServerResponseBuilder();
    }
}

export default class ServerResponseBuilder {

    private readonly _response: ServerResponse;

    constructor() {
        this._response = {
            code: 200,
            message: null,
            details: null
        }
    }

    public code(_code: number): ServerResponseBuilder {
        this._response.code = _code;
        return this;
    }

    public message(message: string): ServerResponseBuilder {
        this._response.message = message;
        return this;
    }

    public details(details: any): ServerResponseBuilder {
        this._response.details = details;
        return this;
    }

    public build(): ServerResponse {
        return this._response;
    }
}