/**
 * AlunoService — Armazena os dados cadastrais mockados e métodos de edição com persistência (RF03)
 */
angular
  .module('ucsalApp')
  .factory('AlunoService', [
    'AuthService',
    function (AuthService) {
      var CHAVE_CADASTRO = 'ucsal_portal_cadastro_aluno';

      var cadastroPadrao = {
        nome: 'Eduardo Rocha Santos',
        matricula: '20261001',
        curso: 'Engenharia de Software',
        campus: 'Pituaçu',
        email: 'eduardo.santos@ucsal.edu.br',
        telefone: '(71) 99123-4567',
        cep: '41740-090',
        rua: 'Av. Prof. Pinto de Aguiar, 2589',
        bairro: 'Pituaçu',
        cidade: 'Salvador - BA',
      };

      function carregarCadastro() {
        var logado = AuthService.obterAlunoLogado();
        try {
          var salvo = localStorage.getItem(CHAVE_CADASTRO);
          if (salvo) {
            var dados = JSON.parse(salvo);
            dados.nome = logado.nome || cadastroPadrao.nome;
            dados.matricula = logado.matricula || cadastroPadrao.matricula;
            dados.curso = logado.curso || cadastroPadrao.curso;
            return dados;
          }
        } catch (e) {}

        var copia = angular.copy(cadastroPadrao);
        copia.nome = logado.nome || cadastroPadrao.nome;
        copia.matricula = logado.matricula || cadastroPadrao.matricula;
        copia.curso = logado.curso || cadastroPadrao.curso;
        return copia;
      }

      var dadosAtuais = carregarCadastro();

      return {
        obterDadosAluno: function () {
          dadosAtuais = carregarCadastro();
          return angular.copy(dadosAtuais);
        },

        salvarDadosAluno: function (novosDados) {
          // Mantém os campos institucionais bloqueados inalterados
          dadosAtuais.email = String(novosDados.email || '').trim();
          dadosAtuais.telefone = String(novosDados.telefone || '').trim();
          dadosAtuais.cep = String(novosDados.cep || '').trim();
          dadosAtuais.rua = String(novosDados.rua || '').trim();
          dadosAtuais.bairro = String(novosDados.bairro || '').trim();
          dadosAtuais.cidade = String(novosDados.cidade || '').trim();

          try {
            localStorage.setItem(CHAVE_CADASTRO, JSON.stringify(dadosAtuais));
          } catch (e) {}

          return angular.copy(dadosAtuais);
        },
      };
    },
  ]);
