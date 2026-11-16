/**
 * Módulo Principal (app.js) — Inicialização do Ionic e configuração das rotas SPA ($stateProvider)
 */
angular
  .module('ucsalApp', ['ionic'])

  .run([
    '$ionicPlatform',
    '$rootScope',
    'AuthService',
    function ($ionicPlatform, $rootScope, AuthService) {
      $ionicPlatform.ready(function () {
        if (window.StatusBar) {
          window.StatusBar.styleDefault();
        }
      });

      $rootScope.alunoLogado = AuthService.obterAlunoLogado();
    },
  ])

  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider

        // Rota de Login (RF01)
        .state('login', {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl',
        })

        // Rota abstrata do Menu Lateral (ion-side-menus)
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'MenuCtrl',
        })

        // Rota do Mural de Notícias e Eventos (RF02)
        .state('app.noticias', {
          url: '/noticias',
          views: {
            menuContent: {
              templateUrl: 'templates/noticias.html',
              controller: 'NoticiasCtrl',
            },
          },
        })

        // Rota de Detalhe da Notícia / Evento (RF02)
        .state('app.noticia-detalhe', {
          url: '/noticias/:noticiaId',
          views: {
            menuContent: {
              templateUrl: 'templates/noticia-detalhe.html',
              controller: 'NoticiaDetalheCtrl',
            },
          },
        })

        // Rota de Atualização Cadastral (RF03)
        .state('app.perfil', {
          url: '/perfil',
          views: {
            menuContent: {
              templateUrl: 'templates/perfil.html',
              controller: 'PerfilCtrl',
            },
          },
        })

        // Rota de Consulta Financeira por Semestre (RF04)
        .state('app.financeiro', {
          url: '/financeiro',
          views: {
            menuContent: {
              templateUrl: 'templates/financeiro.html',
              controller: 'FinanceiroCtrl',
            },
          },
        });

      // Redirecionamento padrão para a tela de Login
      $urlRouterProvider.otherwise('/login');
    },
  ]);
