Feature: Validação da funcionalidade busca do site Advantage Online Shopping

  Scenario: Ativar funcionalidade de busca de produto
    Given acesso o site da Advantage Online Shopping
    When clico no ícone de pesquisa
    Then aparecerá o elemento de pesquisa

  Scenario: Limpar pesquisa de um produto
    Given acesso o site da Advantage Online Shopping
    When clico no ícone de pesquisa
    And pesquiso pelo produto "HP"
    And clico o ícone de limpar pesquisa
    Then o elemento de pesquisa não ficará visível

  Scenario: Realizar busca de um produto
    Given acesso o site da Advantage Online Shopping
    When clico no ícone de pesquisa
    When pesquiso pelo produto "HP"
    Then deverá aparecer os produtos que contenham a palavra "HP" no modal
    And também serão visiveis as categorias da pesquisa

  Scenario: Realizar busca de um produto que não existe
    Given acesso o site da Advantage Online Shopping
    When clico no ícone de pesquisa
    When pesquiso pelo produto "Teste"
    Then não aparecerá o modal com os produtos

  Scenario: Realizar busca de um produto pelo View All
    Given acesso o site da Advantage Online Shopping
    When clico no ícone de pesquisa
    And pesquiso pelo produto "HP"
    And seleciono a opção View All
    Then validar se é mostrado em tela as categorias
    And validar se é mostrado em tela o preço
    And validar se é mostrado em tela as cores
    And validar se é mostrado em tela os produtos