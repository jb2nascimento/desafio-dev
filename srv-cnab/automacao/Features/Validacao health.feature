Feature: Funcionalidade para verificar health

  Scenario Outline: Verifica se é possível chamar API Health usando método GET
    Given eu quero chamar no "<service>" o seguinte "<endpoint>"
    When envio a solicitação GET
    Then eu valido o codigo de status <statuscode>

    Examples: 
      | service | endpoint | statuscode |
      |         |          |        200 |
