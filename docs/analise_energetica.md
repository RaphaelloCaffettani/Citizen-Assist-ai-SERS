# Análise energética e comparação de alternativas

## 1. Público e problema

**Público:** moradores de residências que desejam diminuir o gasto com iluminação.  
**Problema:** dificuldade de interpretar o consumo elétrico das lâmpadas e decidir entre reduzir o consumo e gerar energia renovável.  
**Solução:** um simulador calcula o consumo mensal e compara duas opções para a **mesma iluminação**, no **mesmo período de 30 dias**: (A) trocar lâmpadas por LED e (B) compensar parte do consumo com geração solar fotovoltaica.

É um **estudo didático**, não uma auditoria energética e não corresponde a uma residência medida.

## 2. Dados, unidades e origem

| Parâmetro do exemplo | Valor | Unidade | Origem / justificativa |
|---|---:|---|---|
| Quantidade de lâmpadas | 8 | unid. | Hipótese didática de residência |
| Potência atual | 60 | W por lâmpada | Exemplo de lâmpada de maior consumo |
| Potência LED | 9 | W por lâmpada | Exemplo de lâmpada de menor potência; equivalência luminosa depende do produto |
| Uso diário | 5 | h/dia | Hipótese de utilização |
| Período | 30 | dias | Mês-padrão para comparação |
| Tarifa | 0,95 | R$/kWh | **Hipótese numérica**, não valor da ANEEL ou de concessionária |
| Custo de LED | 15,00 | R$/unid. | **Preço hipotético**, não cotação de mercado |
| Potência solar | 0,6 | kWp | Dimensionamento hipotético simplificado |
| Produtividade mensal solar | 120 | kWh/kWp/mês | **Suposição de simulação**, não irradiação calculada no SunData |
| Investimento solar | 4.000,00 | R$ | **Custo hipotético**, não orçamento de instalação |
| Fator de aproveitamento financeiro solar | 75% | adimensional | **Hipótese didática de desconto**, não regra/taxa legal; representa de maneira simplificada limitações econômicas |

Esses dados estão em [`../data/premissas.js`](../data/premissas.js) e podem ser alterados nos campos do site. Os órgãos oficiais citados em [`referencias.md`](referencias.md) sustentam os **conceitos e cuidados**; não fornecem os números hipotéticos da tabela.

## 3. Fórmulas utilizadas

**Consumo mensal:**

`E (kWh/mês) = quantidade × potência (W) × horas/dia × dias ÷ 1.000`

**Custo variável estimado:** `C (R$/mês) = E × tarifa (R$/kWh)`.

**Economia mensal de LED:** `economia = C_atual - C_LED`.

**Percentual de redução:** `100 × (E_atual - E_LED) ÷ E_atual`, quando o consumo atual é maior que zero.

**Geração solar hipotética:** `G (kWh/mês) = potência (kWp) × produtividade (kWh/kWp/mês)`.

**Economia financeira solar simplificada:** `economia = mínimo(E_atual, G) × tarifa × fator`. O valor é limitado à demanda de iluminação estudada e a um fator econômico ilustrativo; não reproduz integralmente o Sistema de Compensação de Energia Elétrica (SCEE).

**Retorno simples:** `investimento inicial ÷ economia mensal`, quando a economia é positiva. Não considera inflação, juros, manutenção nem troca futura de equipamentos.

## 4. Cálculos completos do cenário inicial

### Cenário atual — manter as lâmpadas

- Consumo: `8 × 60 × 5 × 30 ÷ 1.000 = 72,00 kWh/mês`.
- Custo variável estimado: `72 × 0,95 = R$ 68,40/mês`.

### Alternativa 1 — substituir por LED

- Consumo: `8 × 9 × 5 × 30 ÷ 1.000 = 10,80 kWh/mês`.
- Custo estimado: `10,80 × 0,95 = R$ 10,26/mês`.
- Energia economizada: `72 − 10,8 = 61,20 kWh/mês`.
- Redução percentual de energia: `61,2 ÷ 72 × 100 = 85%`.
- Economia financeira: `68,40 − 10,26 = R$ 58,14/mês`.
- Investimento: `8 × R$ 15 = R$ 120,00`.
- Retorno simples: `120 ÷ 58,14 ≈ 2,1 meses`.

### Alternativa 2 — geração solar fotovoltaica

- Geração hipotética: `0,6 × 120 = 72,00 kWh/mês`.
- Energia considerada na comparação: `mínimo(72,72) = 72 kWh/mês`.
- Economia financeira **teórica**: `72 × 0,95 × 0,75 = R$ 51,30/mês`.
- Custo residual **simplificado**: `68,40 − 51,30 = R$ 17,10/mês`.
- Investimento ilustrativo: `R$ 4.000,00`.
- Retorno simples: `4.000 ÷ 51,30 ≈ 78,0 meses` (cerca de 6,5 anos).

**Não confundir:** no cenário solar, a iluminação ainda demanda **72 kWh/mês**. A solar produz eletricidade para eventual uso/compensação, enquanto a troca por LED diminui o consumo da iluminação. Os cenários são **alternativos**; não foram somados para evitar dupla contagem.

## 5. Comparação de custos, viabilidade e impactos ambientais

| Critério | LED | Solar fotovoltaica |
|---|---|---|
| Benefício principal | Menor eletricidade necessária à mesma atividade | Energia elétrica de fonte renovável |
| Investimento ilustrativo | R$ 120 | R$ 4.000 |
| Economia ilustrativa mensal | R$ 58,14 | R$ 51,30 |
| Viabilidade | Baixa complexidade; observar soquete, temperatura de cor e fluxo luminoso | Exige local adequado, avaliação de sombreamento, conexão à distribuidora e orçamento |
| Impactos positivos | Menor consumo elétrico e possível vida útil maior (depende do produto) | Geração solar, reduzindo demanda líquida da rede em certas condições |
| Impactos e limites | Fabricação, descarte e qualidade variada das lâmpadas | Materiais e fabricação dos módulos/inversor, descarte, uso de área e variação da geração |

**Recomendação para este exemplo:** começar pela troca por LED, pois representa menor investimento inicial e menor prazo de retorno **nas hipóteses escolhidas**. A solar merece estudo específico para o consumo **total da unidade**, pois avaliar só a iluminação pode subestimar sua utilidade real.

Não foi calculada redução de CO₂, já que seria necessário definir e documentar um fator de emissão e o contexto de geração. Evitamos apresentar números ambientais sem fundamento.

## 6. Limites metodológicos

- Tarifa, preço das lâmpadas, sistema solar, produtividade e fator de compensação são **hipóteses**.
- Não foram modelados custo mínimo da fatura, impostos específicos, tarifa horária, TUSD, créditos, sazonalidade, degradação, limpeza, manutenção, financiamento ou aumento do valor da energia.
- A geração solar varia com a região, clima, orientação, inclinação e sombreamento: consultar o **SunData/CRESESB** e profissional qualificado para estimativa local.
- A legislação brasileira sobre micro/minigeração distribuída e compensação é tratada pela **Lei 14.300/2022** e pela **ANEEL**; o valor exibido não é uma simulação regulatória da fatura.
- Potência elétrica menor não garante a mesma qualidade de iluminação: verificar fluxo luminoso (lúmens), eficiência e adequação da lâmpada.

## 7. Integração ao assistente

A função `calcular()` de `assets/app.js` devolve indicadores usando as entradas da página. A função `responder()` recebe uma pergunta e esses indicadores para explicar: consumo, LED, solar, recomendação e limitações. Assim, o assistente **não apresenta números desconectados dos cálculos**. É um módulo de perguntas e respostas baseado em regras, sem API externa.
