import { NextFunction, Response } from 'express';
import { CNABService } from '../services/CNABService';
import { ExceptionUtils } from '../exception/ExceptionUtils';
import Logger from '../config/logger/Logger';

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
     *          description: Serviço de Importacao indisponivel.
     */
    public upload = async (request: any, response: Response, next: NextFunction) => {

        if (!request.files || Object.keys(request.files).length === 0) {
            next(ExceptionUtils.badRequest());
        }

        try {
            this.logger.log.info(`Iniciando importacao do arquivo cnab`);
            this.service.importFileCNAB(request.files.cnab.data.toString('utf8'));
            response.status(200).json('Importacao realizada com sucesso');
        } catch (err) {
            this.logger.log.error(err);
            next(ExceptionUtils.unavaible);
        }

    }

}