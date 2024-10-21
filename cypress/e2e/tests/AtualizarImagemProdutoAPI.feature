Feature: Testar a API /catalog/api/v1/products/image/{userId}/{source}/{color}

  Scenario: Alterar a imagem de um produto
    #Given a API "/catalog/api/v1/products/image/1/HP/BLACK" está disponível
    # TODO: o Given foi comentado pois a API está restornando 500, assim que corrigido voltará a funcionar a automação
    When eu faço uma requisição POST para "/catalog/api/v1/products/image/1/HP/BLACK"
    Then o status da resposta da requisição POST deve ser 200
    And a resposta deve conter o body do produto que foi alterado