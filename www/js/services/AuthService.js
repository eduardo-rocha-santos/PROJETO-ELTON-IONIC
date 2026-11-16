/**
 * AuthService — Gerencia a lista mockada de credenciais de alunos e a sessão autenticada (RF01)
 */
angular
  .module('ucsalApp')
  .factory('AuthService', [
    '$rootScope',
    function ($rootScope) {
      var CHAVE_SESSAO = 'ucsal_portal_sessao_aluno';

      // Lista pré-definida de alunos mockados para validação do login
      var alunosAutorizados = [
        {
          matricula: '20261001',
          senha: '123456',
          nome: 'Eduardo Rocha Santos',
          curso: 'Engenharia de Software',
          campus: 'Pituaçu',
        },
        {
          matricula: '20261002',
          senha: '123456',
          nome: 'Mariana Oliveira Lima',
          curso: 'Engenharia de Software',
          campus: 'Federação',
        },
      ];

      var alunoAtual = null;

      // Restaura sessão ativa se existir no localStorage
      try {
        var salvo = localStorage.getItem(CHAVE_SESSAO);
        if (salvo) {
          alunoAtual = JSON.parse(salvo);
          $rootScope.alunoLogado = alunoAtual;
        }
      } catch (e) {
        alunoAtual = null;
      }

      return {
        autenticar: function (matricula, senha) {
          var matLimpa = String(matricula || '').trim();
          var senhaLimpa = String(senha || '').trim();

          if (!matLimpa || !senhaLimpa) {
            return {
              sucesso: false,
              mensagem: 'Preencha sua Matrícula e Senha para entrar no portal.',
            };
          }

          var encontrado = null;
          for (var i = 0; i < alunosAutorizados.length; i++) {
            if (
              alunosAutorizados[i].matricula === matLimpa &&
              alunosAutorizados[i].senha === senhaLimpa
            ) {
              encontrado = angular.copy(alunosAutorizados[i]);
              delete encontrado.senha;
              break;
            }
          }

          if (!encontrado) {
            return {
              sucesso: false,
              mensagem: 'Matrícula ou senha inválidos. Verifique os dados informados.',
            };
          }

          alunoAtual = encontrado;
          $rootScope.alunoLogado = encontrado;

          try {
            localStorage.setItem(CHAVE_SESSAO, JSON.stringify(encontrado));
          } catch (e) {}

          return {
            sucesso: true,
            aluno: encontrado,
          };
        },

        obterAlunoLogado: function () {
          if (!alunoAtual) {
            return {
              matricula: '20261001',
              nome: 'Eduardo Rocha Santos',
              curso: 'Engenharia de Software',
              campus: 'Pituaçu',
            };
          }
          return alunoAtual;
        },

        estaAutenticado: function () {
          return Boolean(alunoAtual);
        },

        encerrarSessao: function () {
          alunoAtual = null;
          $rootScope.alunoLogado = null;
          try {
            localStorage.removeItem(CHAVE_SESSAO);
          } catch (e) {}
        },
      };
    },
  ]);
