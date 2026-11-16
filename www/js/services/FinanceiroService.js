/**
 * FinanceiroService — Objeto mockado de mensalidades agrupadas por semestre letivo (RF04)
 */
angular
  .module('ucsalApp')
  .factory('FinanceiroService', function () {
    var mensalidadesPorSemestre = {
      '2026.2': [
        {
          id: 2026201,
          mesReferencia: 'Julho / 2026',
          vencimento: '10/07/2026',
          valor: 985.5,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2026202,
          mesReferencia: 'Agosto / 2026',
          vencimento: '10/08/2026',
          valor: 985.5,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2026203,
          mesReferencia: 'Setembro / 2026',
          vencimento: '10/09/2026',
          valor: 985.5,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2026204,
          mesReferencia: 'Outubro / 2026',
          vencimento: '10/10/2026',
          valor: 985.5,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2026205,
          mesReferencia: 'Novembro / 2026',
          vencimento: '10/11/2026',
          valor: 985.5,
          status: 'A Pagar',
          codigoBarras: '23793.38128 60083.013528 56000.063304 8 98970000098550',
        },
        {
          id: 2026206,
          mesReferencia: 'Dezembro / 2026',
          vencimento: '10/12/2026',
          valor: 985.5,
          status: 'A Pagar',
          codigoBarras: '23793.38128 60083.013528 56000.063305 1 99270000098550',
        },
      ],
      '2026.1': [
        {
          id: 2026101,
          mesReferencia: 'Janeiro / 2026',
          vencimento: '10/01/2026',
          valor: 940.0,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2026102,
          mesReferencia: 'Fevereiro / 2026',
          vencimento: '10/02/2026',
          valor: 940.0,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2026103,
          mesReferencia: 'Março / 2026',
          vencimento: '10/03/2026',
          valor: 940.0,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2026104,
          mesReferencia: 'Abril / 2026',
          vencimento: '10/04/2026',
          valor: 940.0,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2026105,
          mesReferencia: 'Maio / 2026',
          vencimento: '10/05/2026',
          valor: 940.0,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2026106,
          mesReferencia: 'Junho / 2026',
          vencimento: '10/06/2026',
          valor: 940.0,
          status: 'Paga',
          codigoBarras: '',
        },
      ],
      '2025.2': [
        {
          id: 2025201,
          mesReferencia: 'Julho / 2025',
          vencimento: '10/07/2025',
          valor: 895.0,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2025202,
          mesReferencia: 'Agosto / 2025',
          vencimento: '10/08/2025',
          valor: 895.0,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2025203,
          mesReferencia: 'Setembro / 2025',
          vencimento: '10/09/2025',
          valor: 895.0,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2025204,
          mesReferencia: 'Outubro / 2025',
          vencimento: '10/10/2025',
          valor: 895.0,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2025205,
          mesReferencia: 'Novembro / 2025',
          vencimento: '10/11/2025',
          valor: 895.0,
          status: 'Paga',
          codigoBarras: '',
        },
        {
          id: 2025206,
          mesReferencia: 'Dezembro / 2025',
          vencimento: '10/12/2025',
          valor: 895.0,
          status: 'Paga',
          codigoBarras: '',
        },
      ],
    };

    return {
      listarSemestres: function () {
        return ['2026.2', '2026.1', '2025.2'];
      },

      listarPorSemestre: function (semestre) {
        var lista = mensalidadesPorSemestre[semestre] || [];
        return angular.copy(lista);
      },
    };
  });
