# javascript-masterclass

Esse repositório contém todo o conteúdo aprezentado no curso [javascript master class](https://app.branas.io/javascriptmasterclass).<br>
Onde cada uma das pastas presenta uma aula junto com os exemplos realizados na aula

## Conteúdo

### Variáveis

No javascript existem três maneiras de se declarar variáveis <b>var</b>, <b>let</b> e <b>const</b> e cada uma delas possuem suas caracteríscias proprias.<br>
<b>Var</b>: foi a primeira maneira de se declarar variáveis no JS porém está entrando em desuso.<br>
<i>Caracteristicas</i>:

<ul>
<li> Não respeita contexto de bloco</li>
<li>  Permite redeclaração </li>
<li>Permite reatribuição</li>
<li>Declarada e inicializa no escopo da função</li>
</ul>
<b>Let</b>: Foi introduzido no ES6 buscando corrigir algum dos problemas do <b>var</b> e como não poderia modificar todo o comportamento foi criado uma nova maneira de declaração de variáveis
<ul>
<li>Respeita o contexto de bloco</li>
<li>Não permite redeclaração</li>
<li>Permite reatribuição</li>
<li>Declarada no escopo da função mas não inicializada</li>
</ul>
<b>Const</b>: Foi introduzido no ES6 também buscando corrigir algums problemas do <b>var</b>
<ul>
<li>Respeita o contexto de bloco</li>
<li>Não permite redeclaração</li>
<li>Permite reatribuição</li>
<li>Declarada no escopo da função mas não inicializada</li>
</ul>

### Tipo de dados

No JS temos possuímos dois tipos de dados os `primitivos` e `objetos` .

Os tipos `primitivos` são eles:

- number;
- string;
- boolean;
- Symbol;
- object;
- undefined

Já os tipos `objetos` são eles:

- funções
- objetos
- arrays
- Expressões regulares

<b>Number</b>

Dentro do javascript exite somente uma maneira de se declarar números que é através do tipo `primitivo` **number.** Por existir somente um tipo de dado esse tipo aceita diversas tipos de **numbers** sendo possível representa-los através dos sistemas `decimal,hexadecimal,binário, octal`

O tipo `number` possui algumas funções que buscam facilitar a forma como número é apresentado:

- toFixed: adiciona casas decimais após o ponto conforme solicitado
- toExponential: Exibe o número em forma exponencial;
- toPression: Exibe o número com a precisão informada;
