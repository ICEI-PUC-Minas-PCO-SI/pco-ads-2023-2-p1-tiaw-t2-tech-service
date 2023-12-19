# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.

**Caso de Teste** | **CT01 - Acesso a tela de cadastro**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a tela inicial do sistema e clica no botão "Cadastro", seja na barra de navegação ou no botão da tela.<br>2) A aplicação encaminha o usuário para a tela de cadastro.
**Requisitos associados** | RF-001 e RF-002
**Resultado esperado** | Encaminhar para a tela de cadastro e carregá-la.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Acesso a tela de login**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a tela inicial do sistema e clica no botão "Login", seja na barra de navegação ou no botão da tela.<br>2) A aplicação encaminha o usuário para a tela de login.
**Requisitos associados** | RF-001 e RF-002
**Resultado esperado** | Encaminhar para a tela de login e carregá-la.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, sobrenome, usuário, email, senha, seu tipo de usuário (empresa ou freelancer) e clica no botão "Cadastrar".<br>2) A aplicação verifica se os dados são válidos e estão preenchidos e informa ao usuário caso não sejam. <br> 3)A aplicação armazena os dados e direciona o usuário para a tela de login.
**Requisitos associados** | RF-003
**Resultado esperado** | Criação de cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Fazer login**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa seu login e senha e clica em logar.<br>2) A aplicação verifica se o usuário já está cadastrado no sistema, se não, informa o usuário.<br> 3) A aplicação verifica os dados e caso o usuário exista, ele é encaminhado para tela inicial do sistema.
**Requisitos associados** | RF-004
**Resultado esperado** | Usuário entra no sistema com seu respectivo login.
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Exibição do carrossel de vagas na tela inicial**
 :--------------: | ------------
**Procedimento**  | 1) Usuário, depois de logar no sistema, é encaminhado para a tela inicial.<br>2) A aplicação exibirá, na tela inicial, um carrossel mostrando, de forma dinâmica, as vagas cadastradas no sistema, uma por uma e de forma limitada, para o usuário.
**Requisitos associados** | RF-006
**Resultado esperado** | Usuário vê o carrossel de vagas disponíveis.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Aceitar ou negar vagas no carrossel da tela inicial**
 :--------------: | ------------
**Procedimento**  | 1) Usuário tem as opções de aceitar ou negar uma vaga.<br>2) Se ele aceitar, aparecerá um modal falando que ele aceitou e a vaga será incluída no seu perfil, na seção de trabalhos atuais. <br> 3)Se ele negar, aparecerá um modal falando que ele negou e apenas passará para a próxima vaga no carrossel. <br> 4)Se acabarem as vagas a serem exibidas, aparecerá um aviso mostrando isso e exibirá um link para a tela de vagas.
**Requisitos associados** | RF-007 e RF-008
**Resultado esperado** | Usuário aceita ou nega vagas.
**Dados de entrada** | Clique no botão do "X" ou coração.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 - Mostrar e filtrar vagas disponíveis**
 :--------------: | ------------
**Procedimento**  | 1) Na tela de vagas, deve ser mostrado todas as vagas que estão disponíveis, ou seja, que nenhum freelancer se inscreveu ainda. <br> 2) A tela deve apresentar filtros de vaga. <br> 3) Se o usuário clicar no filtro, serão exibidas as vagas com aquelas informações.
**Requisitos associados** | RF-005 RF-012
**Resultado esperado** | Usuário acessa as vagas disponíveis e consegue filtrar.
**Dados de entrada** | Filtro de vagas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT09 - Permitir a empresa cadastrar vagas**
 :--------------: | ------------
**Procedimento**  | 1) Na Tela de criar vagas, deve ser apresentado uma função em que a empresa possa adicionar vagas <br> 2) A tela ira mostrar várias opções de detalhes da vaga em que a empresa pode adicionar, 3)As vagas criadas irão aparecer logo em seguida na página.
**Requisitos associados** | RF-009
**Resultado esperado** | A empresa poderá registrar vagas.
**Dados de entrada** | Características da vaga.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT010 - Exibir fórum de dias a usuários**
 :--------------: | ------------
**Procedimento**  | 1) A aplicação deve apresentar um atalho que ira direcionar a tela de fórum <br> 2) A tela de fórum deve permitir que os usuários possam interagir com os outros em formato de chat.
**Requisitos associados** | RF-010 e RF-011.
**Resultado esperado** | Os usuários poderá interagir no fórum.
**Dados de entrada** | Clique no atalho "Fórum" da barra de navegação.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT010 - Exibir o perfil do freelancer**
 :--------------: | ------------
**Procedimento**  | 1) A aplicação deve apresentar um atalho que ira direcionar a tela de perfil do freelancer, onde serão apresentados os dados cadastrados pelo usuário <br> 2) A tela deve apresentar também a sessão se serviços em que estarão todos os trabalhos que o usuário já participou.
**Requisitos associados** | RF-014.
**Resultado esperado** | Os freelancers devem conseguir acessar o perfil.
**Dados de entrada** | Clique no atalho "Perfil" da barra de navegação.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT010 - Exibir o perfil da empresa**
 :--------------: | ------------
**Procedimento**  | 1) A aplicação deve apresentar um atalho que ira direcionar a tela de perfil da empresa, onde serão apresentados os dados cadastrados pela firma <br> 2) A tela deve apresentar também a sessão de vagas onde estarão todas as vagas abertas que a empresa oferece aos usuários.
**Requisitos associados** | RF-015.
**Resultado esperado** | As empresas irão conseguir acessar o perfil.
**Dados de entrada** | Clique no atalho "Perfil" da barra de navegação.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT010 - Permitir que empresas e freelancers editem o perfil**
 :--------------: | ------------
**Procedimento**  | 1) Na tela de editar perfil, o usuário deve ter a opção de modificar seus dados conforme o necessário <br> 2) Serão disponibilizados campos onde o usuário ira preencher. <br> 3) Essa funcionalidade devera alterar também os dados da página de perfil do usuário
**Requisitos associados** | RF-016 e RF-018.
**Resultado esperado** | Os usuários irão conseguir editar o perfil.
**Dados de entrada** | Clique no atalho "Editar Perfil" da barra de navegação.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT010 - Exibir um chatbot que leva ao WhatsApp**
 :--------------: | ------------
**Procedimento**  | 1) O usuário deve ter a opção de ter um chatbot que ira encaminhar para um chat no WhatsApp com a empresa para tirar dúvidas. <br> 2) Essa funcionalidade ficara disponível na tela principal 
**Requisitos associados** | RF-017.
**Resultado esperado** | O usuário poderá ser encaminhado para um chat no WhatsApp.
**Dados de entrada** | Clique no atalho do chatbot na tela principal.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT011 - Exibir um chatbot que leva ao WhatsApp**
 :--------------: | ------------
**Procedimento**  | 1)Os usuários teram a possibilidade de enviar avaliações da empresa ou freelancer, a partir de um modal que será possivel o cliente ou empregado dar sua opinião <br> 2)A avaliação devera ficar registrada no perfil do freelancer ou empresa. 
**Requisitos associados** | RF-019,20,RF-021 e RF-022.
**Resultado esperado** | O usuário ter uma função de comentar em que ficará disponível no perfil.
**Dados de entrada** | Clique no atalho "Avaliar empresa" e digite o conteúdo.
**Resultado obtido** | Sucesso.





## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                            |*TC-01 - Exibir landing page*                                         |
|---|---|
|Requisito Associado | RF-001 -	SIS. deve exibir landing page como tela inicial da aplicação.|
|Link do vídeo do teste realizado: | https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app| 

|*Caso de Teste*               |*TC-02 - landing page encaminhar para tela cadastro/login*                                         |
|---|---|
|Requisito Associado | RF-002	- Deve permitir landing page encaminhar para tela cadastro/login|
|Link do vídeo do teste realizado: | https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app | 

|*Caso de Teste*                                              |*TC-03 - Permitir cadastro*                                         |
|---|---|
|Requisito Associado | RF-003 - Deve permitir cadastro.|
|Link do vídeo do teste realizado: | https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/Cadastro.html| 

|*Caso de Teste*                          |*TC-04 - Permitir login a usuários cadastrados*                                         |
|---|---|
|Requisito Associado | RF-004	- Deve permitir login a usuários cadastrados|
|Link do vídeo do teste realizado: | https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/Login.html| 

|*Caso de Teste*                        |*TC-05 - Mostrar vagas para usuários cadastrados*                                         |
|---|---|
|Requisito Associado |RF-005	- Deve mostrar vagas para usuários cadastrados|
|Link do vídeo do teste realizado: | https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/VagasDisponiveis.html?id=null| 

|*Caso de Teste*                                               |*TC-06 - Exibir carrossel*                                         |
|---|---|
|Requisito Associado |RF-006 - Deve exibir carrossel com vagas disponíveis na tela inicial|
|Link do vídeo do teste realizado: | https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/carrossel.html?id=null| 

|*Caso de Teste*                          |*TC-07 - Permissão/Negação a vagas de empregos*                                         |
|---|---|
|Requisito Associado |RF-007 - Deve ter Permissão/Negação a vagas de empregos|
|Link do vídeo do teste realizado: | https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/carrossel.html?id=null| 

|*Caso de Teste*                                           |*TC-08 - Exibir vagas aceitas*                                         |
|---|---|
|Requisito Associado |RF-008	- Deve exibir, no perfil do usuário, as vagas que ele aceitou|
|Link do vídeo do teste realizado: | https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/Perfil.Freelancer.html?id=null| 

|*Caso de Teste*                                |*TC-09 - Permitir empresa cadastrar vaga*                                         |
|---|---|
|Requisito Associado |RF-009 - Deve permitir empresa cadastrar vaga|
|Link do vídeo do teste realizado: | https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/TelaCriarVagas.html?id=null| 

|*Caso de Teste*                                |*TC-010 - Exibir fórum de dicas a usuários*                                       |
|---|---|
|Requisito Associado |RF-010	- Deve exibir fórum de dicas a usuários|
|Link do vídeo do teste realizado: |https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/Forum.html?id=null| 

|*Caso de Teste*                                |*TC-011 - Permitir usuário interagir com o fórum*                                 |
|---|---|
|Requisito Associado |RF-011 - Deve permitir usuário interagir com o fórum|
|Link do vídeo do teste realizado: | https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/Forum.html?id=null| 

|*Caso de Teste*                                |*TC-012 - Permitir filtragem de vagas a usuário cadastrado*                       |
|---|---|
|Requisito Associado |RF-012 - Deve permitir filtragem de vagas a usuário cadastrado|
|Link do vídeo do teste realizado: |https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/VagasDisponiveis.html?id=null | 

|*Caso de Teste*                                           |*TC-014 - Exibir perfil do freelancer*                                 |
|---|---|
|Requisito Associado |RF-014	- Deve permitir exibir o perfil do freelancer|
|Link do vídeo do teste realizado: |https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/Perfil.Freelancer.html?id=null |

|*Caso de Teste*                                               |*TC-015 - Exibir perfil da Empresa                                 |
|---|---|
|Requisito Associado |RF-015 - Deve permitir exibir o perfil da empresa|
|Link do vídeo do teste realizado: |https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/Perfil.Empresa.html?id=null |

|*Caso de Teste*                                 |*TC-016 - Permitir freelancers editarem o perfil                                 |
|---|---|
|Requisito Associado |RF-016 - Deve permitir freelancers cadastrados a editar perfil|
|Link do vídeo do teste realizado: |https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/TelaEditarPerfil.html |


|*Caso de Teste*                            |*TC-17 - Exibir chatbot que leva ao whatsapp*                                         |
|---|---|
|Requisito Associado |RF-017 - Deve exibir chatbot que leva ao whatsapp, para tirar dúvidas|
|Link do vídeo do teste realizado: | https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/carrossel.html?id=null| 

|*Caso de Teste*                                    |*TC-018 - Permitir empresas editarem o perfil                                 |
|---|---|
|Requisito Associado |RF-018	- Deve permitir empresas cadastradas a editar perfil|
|Link do vídeo do teste realizado: |https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/TelaEditarPerfil.html?id=null|

|*Caso de Teste*                             |*TC-019 - Exibir avaliações no perfil do freelancer*                                 |
|---|---|
|Requisito Associado |RF-019 - Deve exibir no perfil as avaliações do freelancer cadastrado|
|Link do vídeo do teste realizado: |https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/Perfil.Freelancer.html?id=null|

|*Caso de Teste*                                 |*TC-020 - Exibir avaliações no perfil da Empresa                                 |
|---|---|
|Requisito Associado |RF-020 - Deve exibir no perfil as avaliações da empresa cadastrada|
|Link do vídeo do teste realizado: |https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/Perfil.Empresa.html?id=null|

|*Caso de Teste*                                 |*TC-021 - Permitir comentar no perfil da Empresa                                 |
|---|---|
|Requisito Associado |RF-021 - Deve permitir usuário cadastrado comentar no perfil da empresa|
|Link do vídeo do teste realizado: |https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/Perfil.Empresa.html?id=null |

|*Caso de Teste*                             |*TC-022 - Permitir comentar no perfil do freelancer*                                 |
|---|---|
|Requisito Associado |RF-022 - Deve permitir empresa cadastrada comentar no perfil do usuário|
|Link do vídeo do teste realizado: |https://pco-ads-2023-2-p1-tiaw-t2-tech-service.vercel.app/Perfil.Freelancer.html?id=null |








## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



