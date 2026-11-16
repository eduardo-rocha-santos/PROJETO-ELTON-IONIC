/**
 * PerfilCtrl — Consulta e Atualização Cadastral do Aluno com $ionicPopup (RF03)
 */
angular
  .module('ucsalApp')
  .controller('PerfilCtrl', [
    '$scope',
    '$ionicPopup',
    'AlunoService',
    function ($scope, $ionicPopup, AlunoService) {
      $scope.cadastro = AlunoService.obterDadosAluno();

      $scope.$on('$ionicView.beforeEnter', function () {
        $scope.cadastro = AlunoService.obterDadosAluno();
      });

      $scope.salvarAlteracoes = function () {
        if (
          !$scope.cadastro.email ||
          !$scope.cadastro.telefone ||
          !$scope.cadastro.cep ||
          !$scope.cadastro.rua ||
          !$scope.cadastro.bairro ||
          !$scope.cadastro.cidade
        ) {
          $ionicPopup.alert({
            title: 'Campos Obrigatórios',
            template:
              'Por favor, preencha todos os campos de contato e endereço antes de salvar.',
            okText: 'Entendi',
            okType: 'button-assertive',
          });
          return;
        }

        $scope.cadastro = AlunoService.salvarDadosAluno($scope.cadastro);

        $ionicPopup.alert({
          title: 'Cadastro Atualizado',
          template:
            'Seus dados de contato e endereço foram salvos com sucesso no Portal do Aluno UCSal!',
          okText: 'OK',
          okType: 'button-ucsal',
        });
      };
    },
  ]);
