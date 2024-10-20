Feature: Validação da funcionalidade inclusão de produtos no carrinho do site Advantage Online Shopping

  Scenario: Incluir um produto ao pesquisar por ele
    Given acesso o site da Advantage Online Shopping
    When clico no ícone de pesquisa
    And pesquiso pelo produto "HP"
    And seleciono o produto que eu quero adicionar
    And escolho a cor do produto
    And verifico se contém especificações do produto
    And adiciono o produto no carrinho
    And clico no ícone do carrinho
    Then validar se o produto que selecionei é o mesmo mostrado no carrinho
    And validar se o valor mostrado é o mesmo no carrinho
    And validar se a cor selecionada é a mesma do carrinho

  Scenario: Incluir um produto ao pesquisar por ele pelo view all
    Given acesso o site da Advantage Online Shopping
    When clico no ícone de pesquisa
    And pesquiso pelo produto "HP"
    And seleciono a opção View All
    And seleciono o produto que eu quero adicionar
    And escolho a cor do produto
    And verifico se contém especificações do produto
    And adiciono o produto no carrinho
    And clico no ícone do carrinho
    Then validar se o produto que selecionei é o mesmo mostrado no carrinho
    And validar se o valor mostrado é o mesmo no carrinho
    And validar se a cor selecionada é a mesma do carrinho

  Scenario: Incluir um produto e adicionar a quantidade
    Given acesso o site da Advantage Online Shopping
    When clico no ícone de pesquisa
    And pesquiso pelo produto "HP"
    And seleciono o produto que eu quero adicionar
    And escolho a quantidade do produto
    And adiciono o produto no carrinho
    And clico no ícone do carrinho
    Then validar se a quantidade selecionada é a mesma do carrinho

  Scenario: Excluir o item do carrinho
    Given acesso o site da Advantage Online Shopping
    When clico no ícone de pesquisa
    And pesquiso pelo produto "HP"
    And seleciono o produto que eu quero adicionar
    And adiciono o produto no carrinho
    And clico no ícone do carrinho
    Then validar se o produto que selecionei é o mesmo mostrado no carrinho
    When excluir o item do carrinho
    Then validar se o item foi excluído do carrinho