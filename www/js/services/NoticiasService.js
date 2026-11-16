/**
 * NoticiasService — Array mockado de notícias institucionais e atividades/eventos da UCSal (RF02)
 */
angular
  .module('ucsalApp')
  .factory('NoticiasService', function () {
    var publicacoes = [
      {
        id: 1,
        titulo: 'Calendário de Rematrícula 2026.2 disponível para Engenharia de Software',
        data: '10/11/2026',
        categoria: 'Notícia',
        campus: 'Pituaçu e Federação',
        imagem: 'img/noticia-rematricula.svg',
        resumo:
          'Confira os prazos oficiais para ajuste de grade curricular, renovação de bolsa e matrícula online pelo Portal do Aluno.',
        conteudoCompleto:
          'A Secretaria Geral de Cursos da Universidade Católica do Salvador (UCSal) informa que o período de rematrícula para o semestre letivo 2026.2 estará aberto entre os dias 05 e 20 de dezembro. Para efetuar a renovação, o estudante deve estar com a situação financeira regularizada e confirmar o aceite do contrato educacional diretamente no módulo Financeiro deste aplicativo.',
      },
      {
        id: 2,
        titulo: 'SEMOC 2026: Semana de Mobilização Científica abre submissão de artigos',
        data: '12/11/2026',
        categoria: 'Evento',
        campus: 'Campus Pituaçu',
        imagem: 'img/evento-semoc.svg',
        resumo:
          'Maior evento acadêmico da UCSal reunirá palestras, oficinas de tecnologia, mostras de pesquisa e certificação de 30 horas.',
        conteudoCompleto:
          'A Semana de Mobilização Científica (SEMOC) acontecerá no Campus Pituaçu com trilhas dedicadas à Engenharia de Software, Inteligência Artificial, Cidades Inteligentes e Direitos Humanos. Os estudantes podem se inscrever como ouvintes ou submeter resumos expandidos desenvolvidos nas disciplinas de projeto integrador.',
      },
      {
        id: 3,
        titulo: 'Edital de Iniciação Científica PIBIC/PIBITI oferece bolsas para Tecnologia',
        data: '14/11/2026',
        categoria: 'Notícia',
        campus: 'Campus Pituaçu',
        imagem: 'img/noticia-iniciacao.svg',
        resumo:
          'Estudantes a partir do 2º semestre podem concorrer a bolsas de desenvolvimento tecnológico e inovação.',
        conteudoCompleto:
          'A Pró-Reitoria de Pesquisa e Pós-Graduação publicou o novo edital de Iniciação Científica e Tecnológica. Os grupos de pesquisa da Escola de Tecnologias selecionam estudantes interessados em desenvolvimento mobile multiplataforma, arquiteturas front-end modernas e engenharia de dados.',
      },
      {
        id: 4,
        titulo: 'Maratona de Programação e Extensão Universitária da Escola de Tecnologias',
        data: '16/11/2026',
        categoria: 'Evento',
        campus: 'Pituaçu e Federação',
        imagem: 'img/evento-hackathon.svg',
        resumo:
          'Equipes multidisciplinares desenvolverão soluções digitais para demandas reais da comunidade acadêmica de Salvador.',
        conteudoCompleto:
          'Durante o sábado letivo nos laboratórios do Bloco B (Campus Pituaçu), os alunos participarão de um desafio prático de prototipação de interfaces mobile e resolução de algoritmos. A participação garante horas complementares de extensão universitária registradas automaticamente no histórico escolar.',
      },
    ];

    return {
      listarTodas: function () {
        return angular.copy(publicacoes);
      },

      buscarPorId: function (id) {
        var idNumerico = Number(id);
        for (var i = 0; i < publicacoes.length; i++) {
          if (publicacoes[i].id === idNumerico) {
            return angular.copy(publicacoes[i]);
          }
        }
        return null;
      },
    };
  });
