import { NextFunction, Response } from 'express';
import { CNABService } from '../services/CNABService';
import { ExceptionUtils } from '../exception/ExceptionUtils';
import Logger from '../config/logger/Logger';
import { ServerResponse } from '../models/response/ServerResponse';

export default class CNABController {

    constructor(
        private service: CNABService = new CNABService(),
        private logger: Logger = new Logger()
    ) {
    }

    /**
     * @swagger
     * /cnab:
     *    post:
     *      summary: realiza o tratamento do arquivo.
     *      responses:
     *        200:
     *          description: OK.
     *        400:
     *          Dados invalidos para a requisicao
     *        503:
     *          description: Serviço indisponivel.
     */
    public upload = async (request: any, response: Response, next: NextFunction) => {

        if (!request.files || Object.keys(request.files).length === 0) {
            next(ExceptionUtils.badRequest());
        }

        try {
            this.logger.log.info(`Iniciando importacao do arquivo cnab`);
            this.service.importCNABFile(request.files.cnab.data.toString('utf8'));
            response.status(200).json(ServerResponse.builder().message('Importacao realizada com sucesso').build());
        } catch (err) {
            this.logger.log.error(err);
            next(ExceptionUtils.unavaible);
        }

    }

    /**
     * @swagger
     * /cnab:
     *    get:
     *      summary: Recupera todos os itens
     *      responses:
     *        200:
     *          description: OK.     
     *        503:
     *          description: Serviço indisponivel.
     */
    public getAll = async(request: any, response: Response, next: NextFunction) => {
        try {
           let itens = await this.service.selectAll();
           response.status(200).json(ServerResponse.builder().details(itens).build());
        } catch (err) {
            this.logger.log.error(err);
            next(ExceptionUtils.unavaible);
        }
    }

}