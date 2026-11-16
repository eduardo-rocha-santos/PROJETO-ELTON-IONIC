# Portal do Aluno UCSal — Ionic Framework + AngularJS

Protótipo funcional (MVP Front-end) multiplataforma do **Portal do Aluno UCSal** desenvolvido com **Ionic Framework (v1)** e **AngularJS** para a disciplina de **Engenharia de Software (UCSAL — Prof. Elton Figueiredo da Silva)**.

## Requisitos Funcionais Implementados

- **RF01 — Autenticação (Login Mockado):** Validação de Matrícula (`20261001`) e Senha (`123456`) via `AuthService`, bloqueio de campos vazios e armazenamento da sessão do aluno (`$rootScope` e `localStorage`).
- **RF02 — Mural de Notícias e Atividades (Home):** Listagem em cards (`ion-card`) com filtro nativo (`| filter`) por categoria (*Notícia* ou *Evento*), imagens ilustrativas e navegação para tela de detalhes (`noticia-detalhe.html`).
- **RF03 — Atualização Cadastral:** Exibição de Nome Completo, Matrícula e Curso (*Engenharia de Software*) bloqueados com `ng-disabled="true"` e edição de E-mail, Telefone e Endereço completo (CEP, Rua, Bairro, Cidade) no `AlunoService` com confirmação via `$ionicPopup`.
- **RF04 — Consulta Financeira por Semestre:** Seleção de semestre (`2026.2`, `2026.1`, `2025.2`), formatação monetária com `| currency:'R$ '`, badges condicionais (`ng-class`) para *Paga* (Verde) e *A Pagar* (Amarelo/Laranja) e botão **Copiar Código de Barras** (`ng-if`).

## Arquitetura de Diretórios

```text
www/
├── css/style.css                  # Cores institucionais UCSal (azul marinho, azul claro e branco)
├── img/                           # Ilustrações SVG locais
├── js/
│   ├── app.js                     # Módulo ucsalApp e rotas SPA ($stateProvider / $urlRouterProvider)
│   ├── controllers/
│   │   ├── LoginCtrl.js
│   │   ├── NoticiasCtrl.js
│   │   ├── PerfilCtrl.js
│   │   └── FinanceiroCtrl.js
│   └── services/
│       ├── AuthService.js
│       ├── NoticiasService.js
│       ├── AlunoService.js
│       └── FinanceiroService.js
├── templates/
│   ├── login.html
│   ├── menu.html
│   ├── noticias.html
│   ├── noticia-detalhe.html
│   ├── perfil.html
│   └── financeiro.html
└── index.html
```

## Como Executar no GitHub Codespaces ou Localmente

1. Abra o repositório no **GitHub Codespaces** e clique em **Go Live** (o `.devcontainer` já aponta automaticamente para a pasta `/www`), **ou**
2. Execute no terminal:
   ```bash
   npx --yes serve www -l 8100
   ```
