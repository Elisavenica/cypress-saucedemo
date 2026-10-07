import Login from '../../pages/login'
import Inventory from '../../pages/login/inventory'

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