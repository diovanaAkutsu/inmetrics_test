Feature: GET /catalog/api/v1/products/search

  Scenario: Obter a lista de produtos
    Given a API "/catalog/api/v1/products/1" está disponível
    When eu faço uma requisição GET para "/catalog/api/v1/products/1"
    Then o status da resposta deve ser 200
    And a resposta deve conter uma lista de produtos