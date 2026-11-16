/**
 * FinanceiroCtrl — Consulta de Mensalidades por Semestre e Cópia de Código de Barras (RF04)
 */
angular
  .module('ucsalApp')
  .controller('FinanceiroCtrl', [
    '$scope',
    '$ionicPopup',
    'FinanceiroService',
    function ($scope, $ionicPopup, FinanceiroService) {
      $scope.semestres = FinanceiroService.listarSemestres();

      $scope.filtro = {
        semestre: $scope.semestres[0],
        status: '',
      };

      $scope.mensalidades = [];

      $scope.carregarMensalidades = function () {
        $scope.mensalidades = FinanceiroService.listarPorSemestre(
          $scope.filtro.semestre
        );
      };

      $scope.copiarCodigoBarras = function (parcela) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(parcela.codigoBarras).catch(function () {});
        }

        $ionicPopup.alert({
          title: 'Código de Barras Copiado!',
          template:
            'A linha digitável da mensalidade de <strong>' +
            parcela.mesReferencia +
            '</strong> foi copiada para a área de transferência:<br/><br/>' +
            '<code style="font-size: 11px; word-break: break-all;">' +
            parcela.codigoBarras +
            '</code>',
          okText: 'Fechar',
          okType: 'button-ucsal',
        });
      };

      // Carrega o semestre inicial ao abrir a tela
      $scope.carregarMensalidades();
    },
  ]);
