Feature: Testar a API /catalog/api/v1/products/image/{userId}/{source}/{color}

  Scenario: Alterar a imagem de um produto
    Given a API "/catalog/api/v1/products/image" está disponível
    When eu faço uma requisição POST para "/catalog/api/v1/products/image"
    Then o status da resposta deve ser 200
    And a resposta deve conter a imagem do produto que foi alterada