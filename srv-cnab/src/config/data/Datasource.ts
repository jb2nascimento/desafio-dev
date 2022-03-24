import { Connection, ConnectionConfig } from 'tedious';

export class Datasource {
    
    private config: ConnectionConfig = {
        server: process.env.DATABASE_SERVIDOR,
        authentication: {
            type: 'default',
            options: {
                userName: process.env.DATABASE_USUARIO,
                password: process.env.DATABASE_SENHA
            }
        },
        options: {
            encrypt: false,
            database: process.env.DATABASE
        }
    };

    private conection: Connection;

    public createConnection(): Connection {
        this.conection = new Connection(this.config);
        this.conection.connect();
        return this.conection;
    }

}