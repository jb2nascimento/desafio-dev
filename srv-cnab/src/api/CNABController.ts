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
     *      summary: Realiza upload do arquivo CNAB
     *      requestBody:
     *        content:
     *          multipart/form-data:
     *            schema:
     *              type: object
     *              properties:
     *                cnab:
     *                  type: string
     *                  format: binary
     *                  name: cnab
     *      responses:
     *        200:
     *          description: OK.
     *        400:
     *          description: Arquivo nao enviado
     *        503:
     *          description: Serviço indisponivel.
     */
    public upload = async (request: any, response: Response, next: NextFunction) => {

        if (!request.files || Object.keys(request.files).length === 0) {
            return next(ExceptionUtils.badRequest());
        }

        if(!request.files.cnab.name.includes('.txt')) {
            return next(ExceptionUtils.badRequest());
        }       

        try {
            let data = request.files.cnab.data.toString('utf8');           
            if(this.service.isValidFile(data)) {
                this.logger.log.info(`Iniciando importacao do arquivo cnab`);            
                this.service.importCNABFile(data);
                this.logger.log.info(`Fim importacao do arquivo cnab`);
                response.status(200).json(ServerResponse.builder().message('Importacao realizada com sucesso').build());
            } else {
                return next(ExceptionUtils.unavaible);
            }
        } catch (err) {
            this.logger.log.error(err);
            return next(ExceptionUtils.unavaible);
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
    public getAll = async (request: any, response: Response, next: NextFunction) => {
        try {
            let itens = await this.service.selectAll();
            response.status(200).json(ServerResponse.builder().details(itens).build());
        } catch (err) {
            this.logger.log.error(err);
            return next(ExceptionUtils.unavaible);
        }
    }

}