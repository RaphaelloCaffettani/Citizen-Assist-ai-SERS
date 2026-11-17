# Verificação das funcionalidades e cenários de uso

**Data:** 17/11/2026  
**Objetivo:** avaliar a consistência das informações apresentadas pelo Citizen Assist AI sobre consumo de iluminação, substituição por LED e geração solar fotovoltaica.

## Procedimento

Foram executados três cenários de uso no módulo de cálculo e respostas do assistente. Em todos, a referência temporal foi de 30 dias e foram mantidas as premissas de R$ 0,95/kWh, LED de 9 W por lâmpada, sistema solar de 0,6 kWp e geração hipotética de 120 kWh/kWp/mês. As perguntas foram avaliadas com os resultados de cada cenário.

## Cenário 1 — Consulta inicial de consumo

**Situação:** residência com oito lâmpadas de 60 W, usadas por cinco horas ao dia.  
**Verificação:** consultar o consumo da iluminação e pedir recomendação sobre a alternativa de economia.

| Indicador | Resultado |
|---|---:|
| Consumo atual | 72,00 kWh/mês |
| Custo atual estimado | R$ 68,40/mês |
| Consumo com LED | 10,80 kWh/mês |
| Economia com LED | R$ 58,14/mês |
| Economia financeira com solar | R$ 51,30/mês |
| Retorno simples do LED | 2,1 meses |

**Perguntas verificadas:** “Como calcular o consumo?” e “Qual vale mais a pena?”.  
**Resultado:** o assistente explicou a fórmula de consumo e recomendou a substituição por LED como primeira medida, considerando investimento de R$ 120,00 e retorno simples aproximado de 2,1 meses.

**Observação de clareza:** a comparação deve apresentar valores mensais e explicitar que a redução de 85% se refere à iluminação analisada, não à conta total da residência.

## Cenário 2 — Redução do tempo de utilização

**Situação:** mesma residência, com alteração de cinco para três horas diárias de iluminação.  
**Verificação:** recalcular os indicadores e consultar a explicação de consumo e as limitações das estimativas.

| Indicador | Resultado |
|---|---:|
| Consumo atual | 43,20 kWh/mês |
| Custo atual estimado | R$ 41,04/mês |
| Consumo com LED | 6,48 kWh/mês |
| Economia com LED | R$ 34,88/mês |
| Economia financeira com solar | R$ 30,78/mês |
| Retorno simples do LED | 3,4 meses |

**Perguntas verificadas:** “Como calcular consumo?” e “Quais os limites?”.  
**Resultado:** a resposta atualizou o consumo para 43,20 kWh/mês e apresentou fatores não abrangidos na análise, como tarifas locais, condições do telhado, regras da distribuidora e manutenção.

**Observação de clareza:** a resposta do assistente deve acompanhar os campos alterados, sem repetir valores do exemplo inicial. A indicação de que os números são estimativas evita interpretar os custos como uma previsão garantida.

## Cenário 3 — Demanda maior que a geração solar

**Situação:** residência com 12 lâmpadas de 60 W, utilizadas por seis horas diárias.  
**Verificação:** calcular o consumo maior, verificar o limite da energia solar considerada e comparar as economias.

| Indicador | Resultado |
|---|---:|
| Consumo atual | 129,60 kWh/mês |
| Custo atual estimado | R$ 123,12/mês |
| Consumo com LED | 19,44 kWh/mês |
| Economia com LED | R$ 104,65/mês |
| Geração solar hipotética | 72,00 kWh/mês |
| Economia financeira com solar | R$ 51,30/mês |
| Retorno simples do LED | 1,7 meses |

**Perguntas verificadas:** “A energia solar compensa?” e “Qual a economia?”.  
**Resultado:** a geração solar considerada foi limitada a 72,00 kWh/mês, sem ultrapassar a produção hipotética do sistema. A recomendação distinguiu a redução física do consumo com LED da compensação financeira estimada pela geração solar.

**Observação de clareza:** a apresentação deve diferenciar geração solar de redução do consumo dos equipamentos. A alternativa fotovoltaica depende de dimensionamento e das condições reais de instalação.

## Síntese da verificação

Os três cenários retornaram cálculos consistentes com as fórmulas documentadas e respostas correspondentes aos dados informados. Foram verificadas consultas sobre consumo, recomendação econômica, alternativa renovável e limites das estimativas.

A documentação da aplicação diferencia os resultados que decorrem da simulação matemática de valores reais da conta de energia. O LED reduz a energia consumida pela iluminação. A estimativa solar representa geração e compensação financeira hipotética, não diminuição do consumo físico das lâmpadas.

**Alcance desta verificação:** os cenários foram executados no programa. As observações acima são de revisão técnica de clareza e não constituem depoimentos de participantes externos. Não houve coleta de opinião de usuários nesta etapa.
