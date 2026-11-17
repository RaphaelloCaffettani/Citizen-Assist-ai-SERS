# Registro de verificação da aplicação

**Data:** 17/11/2026  
**Objetivo:** avaliar o funcionamento e a clareza das orientações de consumo, LED e energia solar na interface do Citizen Assist AI.

## Situações avaliadas

| Situação de uso | Procedimento | Resultado observado |
|---|---|---|
| Consulta inicial | Abrir a página com os dados do exemplo | Apresentação de 72,00 kWh/mês, R$ 68,40/mês, economia de R$ 58,14 com LED e R$ 51,30 com geração solar |
| Alteração do consumo | Alterar as horas de uso de 5 para 3 e atualizar a análise | Consumo recalculado para 43,20 kWh/mês; economia LED de R$ 34,88/mês; os demais indicadores também foram atualizados |
| Consulta ao assistente | Selecionar as perguntas sobre consumo e limitações após alterar os dados | A explicação da fórmula apresentou 43,20 kWh/mês, correspondendo à simulação atual; a resposta de limitações informou que os números são hipotéticos |
| Restauração do exemplo | Selecionar **Restaurar exemplo** | Os valores iniciais e os resultados de 72,00 kWh/mês foram recuperados |
| Layout responsivo | Executar os mesmos percursos nas larguras de 1366 px e 390 px | Informações visíveis sem rolagem horizontal e sem erros de JavaScript detectados |

## Avaliação de compreensão e ajustes

Durante a revisão da interface, foi identificada a necessidade de diferenciar **redução de consumo** e **compensação econômica por geração solar**. Por esse motivo, a alternativa solar apresenta a geração em kWh e um **custo residual ilustrativo**, enquanto a alternativa LED mostra o novo consumo físico. As mensagens do assistente também explicam a diferença e informam as limitações das estimativas.

O formulário permite alterar valores de maneira independente e oferece uma opção para restaurar o cenário, facilitando a comparação entre situações. As respostas do assistente foram confrontadas com os valores exibidos na tela nos percursos documentados.

**Escopo:** estes registros são verificações técnicas da interface e de situações de uso; não incluem depoimentos coletados de participantes externos. O documento não atribui comentários a pessoas que não participaram da avaliação.
