import Login from '../pages/login'
import Inventory from '../pages/login/inventory'
import Header from '../pages/login/header'
import Cart from '../pages/login/cart'

describe('Carrinho', () => {

  beforeEach(() => {
    // Arrange
   
    Login.visitarPagina()
    Login.preencherCredenciasValidas()
  })

  it('Adicionar produto ao carrinho com sucesso', () => {
    // Act
     const qtdItensAdicionados = 1
    Inventory.adicionarProduto('sauce labs backpack')
   
    // Assert
  Header.validarQueCarrinhoPossuiItens(1)
  Header.navegarParaCarrinho()

 Cart.validarProdutosPresenteNoCarrinho('Sauce Labs Backpack')
   
  })

  it('Remover produto do carrinho com sucesso', () => {
    // Arrange
    Inventory.adicionarProduto('Sauce Labs Backpack')
    
    // Act
    Inventory.removerProduto('Sauce Labs Backpack')


    // Assert
   Header.validarQueCarrinhoNaoPossuiItens()

  })
})
