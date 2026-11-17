/* Citizen Assist AI — módulo de energia. Sem bibliotecas e sem serviços externos. */
const BASE = typeof module !== 'undefined' ? require('../data/premissas.js') : PREMISSAS;

function calcular(dados) {
  const p = { ...BASE, ...dados };
  const campos = ['lampadas','potenciaAtual','potenciaLed','horasDia','diasMes','tarifa','custoLed','solarKwp','produtividadeSolar','custoSolar','fatorCompensacao'];
  if (campos.some(c => !Number.isFinite(p[c]) || p[c] < 0)) throw new Error('Use somente números iguais ou maiores que zero.');
  if (p.diasMes === 0 || p.diasMes > 31 || p.horasDia > 24 || p.lampadas > 1000 || p.potenciaAtual > 5000 || p.potenciaLed > 5000 || p.fatorCompensacao > 1) {
    throw new Error('Confira os limites dos campos informados.');
  }
  const atualKwh = p.lampadas * p.potenciaAtual * p.horasDia * p.diasMes / 1000;
  const ledKwh = p.lampadas * p.potenciaLed * p.horasDia * p.diasMes / 1000;
  const custoAtual = atualKwh * p.tarifa;
  const custoLedMensal = ledKwh * p.tarifa;
  const economiaLed = custoAtual - custoLedMensal;
  const investimentoLed = p.lampadas * p.custoLed;
  const geracaoSolar = p.solarKwp * p.produtividadeSolar;
  const energiaCompensavel = Math.min(atualKwh, geracaoSolar);
  const economiaSolar = energiaCompensavel * p.tarifa * p.fatorCompensacao;
  const custoSolarMensal = custoAtual - economiaSolar;
  const retorno = (investimento, economia) => economia > 0 ? investimento / economia : null;
  return {
    ...p, atualKwh, ledKwh, custoAtual, custoLedMensal, economiaLed,
    reducaoLed: atualKwh > 0 ? (atualKwh - ledKwh) / atualKwh * 100 : 0,
    investimentoLed, retornoLed: retorno(investimentoLed, economiaLed),
    geracaoSolar, energiaCompensavel, economiaSolar, custoSolarMensal,
    retornoSolar: retorno(p.custoSolar, economiaSolar)
  };
}

const num = (n, d=2) => n.toLocaleString('pt-BR', {minimumFractionDigits:d,maximumFractionDigits:d});
const brl = n => n.toLocaleString('pt-BR', {style:'currency',currency:'BRL'});
const kwh = n => `${num(n)} kWh`;
const meses = n => n === null ? 'não aplicável' : `${num(n,1)} meses`;

function responder(pergunta, r) {
  const q = pergunta.toLowerCase();
  if (/f[oó]rmula|calcul|consumo|kwh|quilowatt/.test(q)) {
    return `Consumo = quantidade × potência (W) × horas por dia × dias ÷ 1.000. Com ${r.lampadas} lâmpadas de ${num(r.potenciaAtual,0)} W, por ${num(r.horasDia,1)} h/dia durante ${r.diasMes} dias: ${kwh(r.atualKwh)} por mês. Com LED de ${num(r.potenciaLed,0)} W: ${kwh(r.ledKwh)}.`;
  }
  if (/solar|fotovoltaic|renov[aá]vel/.test(q)) {
    return `O sistema solar hipotético de ${num(r.solarKwp,1)} kWp gera ${kwh(r.geracaoSolar)} por mês (produtividade suposta de ${num(r.produtividadeSolar,0)} kWh/kWp/mês). Neste recorte, no máximo ${kwh(r.energiaCompensavel)} é considerada. Economia financeira simplificada: ${brl(r.economiaSolar)}/mês. Solar não diminui o consumo físico das lâmpadas; a compensação real depende de regras e da conta de luz.`;
  }
  if (/limit|risc|garant|ambient|impact|real|fonte/.test(q)) {
    return `A simulação usa dados hipotéticos, não medições. Custos variam por região e tarifa; a solar depende de irradiação, telhado, sombras e regras da distribuidora. Não foram considerados tributos individualizados, custo mínimo, manutenção, degradação nem financiamento. LED consome menos eletricidade no uso, mas exige descarte adequado; painéis solares também têm impactos de fabricação e descarte. Consulte as fontes em docs/referencias.md.`;
  }
  if (/melhor|vale|recomend|escolh|vantag|retorno|economia/.test(q)) {
    if (r.economiaLed > 0 && r.retornoLed !== null && (r.retornoSolar === null || r.retornoLed < r.retornoSolar)) {
      return `Para a iluminação deste exemplo, trocar por LED é o primeiro passo mais acessível: economia estimada de ${brl(r.economiaLed)}/mês, investimento de ${brl(r.investimentoLed)} e retorno simples de ${meses(r.retornoLed)}. A solar é renovável, mas exige ${brl(r.custoSolar)} de investimento hipotético e condições adequadas. Os resultados não são garantidos.`;
    }
    return `Compare investimento, consumo e condições reais. LED: economia ${brl(r.economiaLed)}/mês e retorno ${meses(r.retornoLed)}. Solar: economia ${brl(r.economiaSolar)}/mês e retorno ${meses(r.retornoSolar)}. Os números são ilustrativos.`;
  }
  return `Posso explicar o consumo, a troca por LED, a energia solar, qual alternativa compensa mais e as limitações. Os resultados atuais são ${kwh(r.atualKwh)}/mês de iluminação e ${brl(r.custoAtual)}/mês estimados.`;
}

if (typeof document !== 'undefined') {
  const $ = id => document.getElementById(id);
  const inputs = ['lampadas','potenciaAtual','potenciaLed','horasDia','diasMes','tarifa','custoLed','solarKwp','produtividadeSolar','custoSolar','fatorCompensacao'];
  let ultimo = calcular(BASE);

  function atualizar() {
    try {
      const valores = {};
      inputs.forEach(id => { valores[id] = Number($(id).value); });
      if (inputs.some(id => $(id).value.trim() === '')) throw new Error('Preencha todos os campos.');
      ultimo = calcular(valores);
      $('erro').textContent = '';
      $('consumo').textContent = kwh(ultimo.atualKwh);
      $('custoAtual').textContent = brl(ultimo.custoAtual);
      $('consumoLed').textContent = kwh(ultimo.ledKwh);
      $('custoLedMensal').textContent = brl(ultimo.custoLedMensal);
      $('economiaLed').textContent = brl(ultimo.economiaLed);
      $('reducaoLed').textContent = `${num(ultimo.reducaoLed,1)}%`;
      $('investimentoLed').textContent = brl(ultimo.investimentoLed);
      $('retornoLed').textContent = meses(ultimo.retornoLed);
      $('geracaoSolar').textContent = kwh(ultimo.geracaoSolar);
      $('custoSolarMensal').textContent = brl(ultimo.custoSolarMensal);
      $('economiaSolar').textContent = brl(ultimo.economiaSolar);
      $('retornoSolar').textContent = meses(ultimo.retornoSolar);
      const max = Math.max(ultimo.custoAtual, 0.01);
      for (const [id, value] of [['barraAtual',ultimo.custoAtual],['barraLed',ultimo.custoLedMensal],['barraSolar',ultimo.custoSolarMensal]]) {
        $(id).style.width = `${Math.max(0, Math.min(100, value/max*100))}%`;
      }
      $('explicacao').textContent = `Comparação para ${ultimo.lampadas} lâmpadas e ${ultimo.diasMes} dias. LED reduz o consumo físico. Solar mantém o consumo de iluminação e estima uma compensação econômica.`;
      $('recomendacao').textContent = responder('qual vale mais a pena?', ultimo);
    } catch(e) {
      $('erro').textContent = e.message;
    }
  }

  function adicionarMensagem(texto, tipo) {
    const node = document.createElement('p');
    node.className = `mensagem ${tipo}`;
    node.textContent = texto;
    $('mensagens').appendChild(node);
    $('mensagens').scrollTop = $('mensagens').scrollHeight;
  }
  function perguntar(texto) {
    if (!texto.trim()) return;
    adicionarMensagem(texto, 'usuario');
    adicionarMensagem(responder(texto, ultimo), 'bot');
  }
  inputs.forEach(id => { $(id).value = BASE[id]; });
  $('simulador').addEventListener('submit', e => { e.preventDefault(); atualizar(); });
  $('restaurar').addEventListener('click', () => { inputs.forEach(id => { $(id).value = BASE[id]; }); atualizar(); });
  $('perguntaForm').addEventListener('submit', e => { e.preventDefault(); perguntar($('pergunta').value); $('pergunta').value = ''; });
  document.querySelectorAll('[data-pergunta]').forEach(btn => btn.addEventListener('click', () => perguntar(btn.dataset.pergunta)));
  atualizar();
  adicionarMensagem('Olá! Os cálculos acima estão disponíveis. Escolha uma pergunta ou digite sua dúvida sobre energia.', 'bot');
}

if (typeof module !== 'undefined') module.exports = { calcular, responder };
