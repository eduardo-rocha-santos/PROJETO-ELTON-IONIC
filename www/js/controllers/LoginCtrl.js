/**
 * LoginCtrl e MenuCtrl — Autenticação do Aluno (RF01) e controle do Menu Lateral
 */
angular
  .module('ucsalApp')

  .controller('LoginCtrl', [
    '$scope',
    '$state',
    'AuthService',
    function ($scope, $state, AuthService) {
      $scope.credenciais = {
        matricula: '',
        senha: '',
      };

      $scope.erroLogin = '';

      // Preenche rapidamente os dados de demonstração para agilizar testes
      $scope.preencherCredenciaisDemo = function () {
        $scope.credenciais.matricula = '20261001';
        $scope.credenciais.senha = '123456';
        $scope.erroLogin = '';
      };

      $scope.realizarLogin = function () {
        var resultado = AuthService.autenticar(
          $scope.credenciais.matricula,
          $scope.credenciais.senha
        );

        if (!resultado.sucesso) {
          $scope.erroLogin = resultado.mensagem;
          return;
        }

        $scope.erroLogin = '';
        $state.go('app.noticias');
      };
    },
  ])

  .controller('MenuCtrl', [
    '$scope',
    '$state',
    'AuthService',
    function ($scope, $state, AuthService) {
      $scope.obterAluno = function () {
        return AuthService.obterAlunoLogado();
      };

      $scope.sair = function () {
        AuthService.encerrarSessao();
        $state.go('login');
      };
    },
  ]);
