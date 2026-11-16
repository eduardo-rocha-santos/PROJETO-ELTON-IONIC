/**
 * NoticiasCtrl e NoticiaDetalheCtrl — Mural de Notícias e Eventos da UCSal (RF02)
 */
angular
  .module('ucsalApp')

  .controller('NoticiasCtrl', [
    '$scope',
    '$state',
    'NoticiasService',
    'AuthService',
    function ($scope, $state, NoticiasService, AuthService) {
      $scope.aluno = AuthService.obterAlunoLogado();
      $scope.publicacoes = NoticiasService.listarTodas();
      $scope.filtroCategoria = '';

      $scope.selecionarCategoria = function (categoria) {
        $scope.filtroCategoria = categoria;
      };

      $scope.abrirDetalhe = function (id) {
        $state.go('app.noticia-detalhe', { noticiaId: id });
      };
    },
  ])

  .controller('NoticiaDetalheCtrl', [
    '$scope',
    '$stateParams',
    'NoticiasService',
    function ($scope, $stateParams, NoticiasService) {
      $scope.publicacao = NoticiasService.buscarPorId($stateParams.noticiaId);
    },
  ]);
