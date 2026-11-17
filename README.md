# Citizen Assist AI — Energia Inteligente

**Global Solution | Ciência da Computação — 1CC**  
**Disciplina:** Soluções em Energias Renováveis e Sustentáveis  
**Integrantes:** Lucca Bertolini - RM 569552

Raphaello Caffettani - RM 572334


## Projeto

Desenvolvemos um módulo de orientação energética do Citizen Assist AI voltado a **moradores de residências**. A proposta é explicar o consumo elétrico da iluminação e auxiliar na escolha entre duas alternativas para a mesma necessidade: a **substituição de lâmpadas por LED** e a **geração solar fotovoltaica**.

O usuário informa a quantidade de lâmpadas, as potências, as horas de uso e os dados de custo. O sistema calcula o consumo e a despesa mensal, compara as alternativas e apresenta recomendações no assistente. As respostas são geradas a partir dos resultados calculados, com linguagem acessível e indicação das limitações.

## Execução e funcionalidades

O projeto utiliza HTML, CSS e JavaScript, sem dependências externas. Para executá-lo, basta abrir [`index.html`](index.html) no navegador.

1. Informar ou modificar os dados de consumo no simulador.
2. Selecionar **Atualizar análise** para comparar os resultados mensais.
3. Consultar o assistente por meio das perguntas sugeridas ou do campo de texto.

A página apresenta o consumo atual, o consumo com LED, uma estimativa de geração solar, custos, economias, retorno simples e uma recomendação para o cenário informado. O assistente é baseado em regras e cálculos; não utiliza um modelo de linguagem generativa.

## Resultados do exemplo

Cenário didático: oito lâmpadas de 60 W utilizadas cinco horas por dia, em um mês de 30 dias. A comparação usa tarifa ilustrativa de R$ 0,95/kWh.

| Indicador | Situação atual | LED | Solar fotovoltaica |
|---|---:|---:|---:|
| Consumo da iluminação | 72,00 kWh/mês | 10,80 kWh/mês | 72,00 kWh/mês |
| Custo mensal estimado | R$ 68,40 | R$ 10,26 | R$ 17,10 |
| Economia mensal estimada | — | R$ 58,14 | R$ 51,30 |
| Investimento inicial ilustrativo | — | R$ 120,00 | R$ 4.000,00 |
| Retorno simples estimado | — | 2,1 meses | 78,0 meses |

A alternativa LED **reduz o consumo físico** da iluminação. Na alternativa solar, o consumo permanece em 72 kWh/mês, mas consideramos uma compensação financeira hipotética da geração. As duas soluções são comparadas separadamente, no mesmo período de referência.

**Recomendação:** nas condições do exemplo, a troca por LED apresenta menor investimento e retorno mais rápido. A instalação solar precisa de avaliação específica de geração, custos, imóvel e regras da distribuidora. Os valores são **premissas ilustrativas, não medições, cotações ou promessas de economia**.

## Documentação técnica

- **Código:** [`index.html`](index.html), [`assets/app.js`](assets/app.js) e [`assets/style.css`](assets/style.css).
- **Dados e premissas:** [`data/premissas.js`](data/premissas.js).
- **Cálculos, comparação e justificativas:** [`docs/analise_energetica.md`](docs/analise_energetica.md).
- **Referências utilizadas:** [`docs/referencias.md`](docs/referencias.md).
- **Validação do funcionamento e da usabilidade:** [`docs/testes_usuarios.md`](docs/testes_usuarios.md).

## Limitações

Os resultados consideram apenas a iluminação residencial e dependem das informações inseridas. Não calculamos uma conta de energia oficial, já que tarifas, impostos, custos mínimos, produção fotovoltaica e regras de compensação variam conforme cada instalação. Também é necessário verificar o fluxo luminoso das lâmpadas para garantir iluminação adequada. A análise e as fontes estão detalhadas nos documentos vinculados acima.
