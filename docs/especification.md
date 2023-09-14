# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

### 1) Alyson
> - Alyson tem 25 anos, nasceu 12/02/1998, mora no Rio de Janeiro (RJ), desempregado, mas cursando em Ciências da Computação.
> - Seus hobbies são jogar Videogame, ser stremer nas horas vagas e comprar bastante, produtos eletrônicos mensalmente em sites que tem entrega rápida
    eficiente, qualidade nos produto e bom atendimento.
> - Em busca de serviços voltados ao seu curso como desenvolvedor de aplicaçõess Web e suas tecnologias.
> - Gosta de serviços Home Office e trabalhos simples de aplicações Web.
> - Ele já tentou trabalhar, mas no passado teve experiências de calote em seus serviços.
> - Um dos seus desafios é achar um trabalho que não tenha esse problema.
> - Alyson tem habito de fazer mini projetos nas linguagens HTML, CSS e JavaScript.
> - Ele usa essas tecnologias, por influência de alguns desenvolvedores famosos como Gustavo Guanabara.
> - Mas não consegue trabalhar na área com esses conhecimentos, por falta de um guia para aplicar seus conhecimentos.
> - Busca suas informações com base nas outras pessoas ao seu redor e redes sócias como Youtube, X (Twitter), Instagram e comunidades como Rocketseat.
> - Está em procura de novas plataformas pra adquirir novas experiências na sua área.


### 2) Guilherme
> - Guilherme tem 37 anos, morava em Santa Catarina e tinha uma assistência técnica em que consertava computadores e notebooks, onde tinha muitos clientes.
> - Precisou se mudar para o Rio de Janeiro, terra natal de seus pais, para cuidar do seu genitor doente.
> - Agora, abriu outro comércio de assistência técnica lá, mas não está tendo muitos clientes como tinha em Santa Catarina.
> - Pela falta de clientes, ele está procurando formas de impulsionar seu negócio e achar pessoas precisando de seu serviço, de forma fácil e eficiente.
> - Tem a disponibilidade de investir em seu negócio para alcançar mais pessoas e lucrar com isso.
> - Trabalha sozinho na loja atualmente e tem interesse em contratar um ajudante.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Desempregado  | Confiabilidade de Serviço           | Garantir  Serviço
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
Prestador de servico | Um lugar para captar clientes de forma eficiente  | Impulsionar meu negócio 

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |

Requisitos funcionais
1) Prioridade alta
Permitir que o usuário se cadastre
Permitir que o usuário faça login
Editar perfil
Mostrar vagas para os usuários
Permitir que os usuarios aceitem ou rejeitem as vagas
Filtrar vagas

2) Prioridade media
Registrar comentários na pagina da empresa de pessoas que ja trabalharam la
Exibir chat entre empresa/contratante e profissional

3) Prioridade baixa
Comentar no fórum 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
