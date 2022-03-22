import express from "express";
import swaggerUi from "swagger-ui-express";
import specs from "../../swagger/Swagger";

const router = express.Router();

const options = {
    explorer: true
};

// SRV API Documentation
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(specs, options));

// SRV Health check
router.get("/health", (req, res) => res.send("OK"));

export = router;
