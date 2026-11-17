/* Valores ilustrativos. Veja docs/analise_energetica.md para origem e limitações. */
const PREMISSAS = {
  lampadas: 8,
  potenciaAtual: 60,          // W por lâmpada, exemplo de lâmpada incandescente
  potenciaLed: 9,            // W por lâmpada, modelo ilustrativo
  horasDia: 5,               // horas/dia
  diasMes: 30,               // dias
  tarifa: 0.95,              // R$/kWh: hipótese, NÃO tarifa local verificada
  custoLed: 15,              // R$/unidade: hipótese, NÃO cotação
  solarKwp: 0.6,             // potência hipotética do sistema em kWp
  produtividadeSolar: 120,   // kWh/kWp/mês: hipótese, NÃO dado medido
  custoSolar: 4000,          // R$: hipótese, NÃO orçamento
  fatorCompensacao: 0.75     // fator financeiro simplificado de 0 a 1, NÃO taxa oficial
};
if (typeof module !== 'undefined') module.exports = PREMISSAS;
