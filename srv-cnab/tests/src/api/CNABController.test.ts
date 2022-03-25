
import express from "express";
import { CNABService } from "../../../src/services/CNABService";
import supertest from "supertest";
import Rota from "../../../src/config/router/Router";

const mock = jest.fn();

describe("CNAB Controller", () => {

  test("Deve retornar status 200 ao bater na rota com GET", async () => {
    CNABService.prototype.selectAll = mock;
    mock.mockResolvedValue(Promise.resolve({
      code: 200,
      detail: {}
    }));

    const result = await request
      .get("/cnab")
      .type("json")
      .send();

    expect(result.status).toEqual(200);
    expect(result.type).toEqual("application/json");

  });

});

const request =
  supertest(
    express()
      .use(express.json())
      .use(express.urlencoded({ extended: true }))
      .use("/", Rota)
  );
