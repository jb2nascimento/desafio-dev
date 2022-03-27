import express from "express";
import CNABController from "../../api/CNABController";
import swaggerUi from "swagger-ui-express";
import specs from "../../swagger/Swagger";
import cors from "cors";

const router = express.Router();

const options = {
    explorer: true
};

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

// SRV API Documentation
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(specs, options));

// SRV Health check
router.get("/health", (req, res) => res.send("OK"));

const cnabController = new CNABController();

router.post("/cnab", cors(corsOptions), cnabController.upload);
router.get("/cnab", cors(corsOptions), cnabController.getAll);

export = router;
