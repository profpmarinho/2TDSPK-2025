
### CP2 – Entrega em 23/5

** Objetivo:

** Desenvolver um aplicativo mobile em React Native que funcione em dispositivos Android ou iOS, preferencialmente em ambos, adaptando-se a orientações de portrait e landscape. O aplicativo deverá utilizar componentes de navegação, listview e seus derivados, eventos de click, ter controle de estado e uma base local assincrona

### Requisitos do Aplicativo (40%)

1. **Navegação** (10%)
- Implementar um menu de navegação que permita ao usuário navegar entre diferentes telas do aplicativo.
- O aplicativo deve ter no mínimo 2 itens de navegação, um para a lista e outra paraq a seleçao de itens/carrinho 
- O estado deve ser mantido durante a navegação

2. **Lista de Produtos** (10%)
- Criar uma lista que permita rolagem (scroll) para visualizar os produtos disponíveis.
- Deve haver uma busca pelo campo título e descrição (Não somente um deles!!!! Não é pegadinha, só tomem cuidado!)
- Cada item da lista deve exibir uma imagem, título e descrição.
- Deve haver uma ampliação do produto, com a imagem maior e se possível mais itens de detalhes.
- Os dados de produto devem vir de um json salvo no aplicativo, salvo no storage assincrono


3. **Carrinho de Compras** (20%)
- Implementar um sistema de carrinho onde os usuários podem selecionar produtos da lista.
- Utilizar um badge no item de navegação para mostrar quantos itens estão no carrinho na navegação.
- O aplicativo deve permitir a remoção de itens do carrinho diretamente dele
- Caso seja possivel selecionar o item mais de uma vez, deve haver a possibilidade de controlar a quantidade de itens, adicionando ou removendo direto do carrinho
- Os dados do carrinho devem estar salvos em estado na aplicação.



### Estrutura do Código (60%)

1. **Código Próprio seguindo as regras abaixo** (30%)

- __Todos__ os metodos, funções e variaveis que não forem do react native ou de uma library utilizada devem ser inicializadas com letras iniciais dos membros do grupo.


2. ## Organização do código ## (15%)

- O código deve ser organizado em pelo menos 3 componentes reutilizáveis, 3 telas, e um estado global
- Deve haver um provedor de estado que gerencie o estado do aplicativo.
- Clean Architecture é uma obrigatoriedade, não pelos nomes específicos do padrão, mas por organização (ex: componentes, pages, stores, providers, services, assets)

3. ## Execução do aplicativo ## (15%)

- O aplicativo deve ter uma UX funcional em portrait e landscape
- O aplicativo deve rodar nativo em Android ou iOS, escolha dos alunos, por favor, indiquem em qual no README

### Restrições

- É expressamente proibido o uso do código do aplicativo de exemplo (como o app de pizza). A lógica pode ser baseada nesse exemplo, mas deve ser reescrita de maneira original.
- As variáveis do código devem incluir as iniciais do aluno.
- O aplicativo deve funcionar offline, garantindo que as imagens estejam acessíveis desde que tenham sido carregadas anteriormente.
- Todas as bibliotecas utilizadas devem estar listadas no `package.json`.

### Entrega

- O aplicativo deve ser entregue via github, havendo no repositorio tambem __o app testado pelos alunos como build nativo__ em formato APK (Android) ou no formato adequado para iOS.
- Instruções de instalação e uso devem acompanhar a entrega.

### Considerações Finais

Certifique-se de seguir todas as diretrizes e requisitos para garantir que o aplicativo atenda às expectativas. Boa sorte no desenvolvimento!
