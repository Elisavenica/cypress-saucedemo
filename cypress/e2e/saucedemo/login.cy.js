import Login from '../../pages/saucedemo/login'
import Inventory from '../../pages/saucedemo/inventory'

describe('Login', () => {
  beforeEach(() => {
    // Arrange
    Login.visitarPagina()
  })

  it('Realizar login com sucesso', () => {
    // Act
    Login.preencherCredenciasValidas()

    // Assert
    Inventory.validarAcessoAPagina()
  })

  it('Realizar login informando credenciais inválidas', () => {
    // Act
    Login.preencherCredenciasInvalidas()

    // Assert
    Login.validarErroCredenciaisInvalidas()
  })
})