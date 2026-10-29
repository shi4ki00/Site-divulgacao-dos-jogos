document.addEventListener('DOMContentLoaded', () => {
  const secInicio = document.querySelector('.inicio');

  const tela1 = document.getElementById('tela1');
  const tela2 = document.getElementById('tela2');
  const telaJogo1 = document.getElementById('tela3_jogo1');
  const telaJogo2 = document.getElementById('tela3_jogo2');
  const telaJogo3 = document.getElementById('tela3_jogo3');

  const cabecalhoInicio = document.getElementById('cabecalho_inicio');
  const cabecalhoEscolha = document.getElementById('cabecalho_escolha');
  const cabecalhoJogo1 = document.getElementById('cabecalho_jogo1');
  const cabecalhoJogo2 = document.getElementById('cabecalho_jogo2');
  const cabecalhoJogo3 = document.getElementById('cabecalho_jogo3');
  const logoHeader = document.getElementById('logoHeader');

  const btnAvancar = document.getElementById('botao_avancar_principal');
  const btnVoltarTela1 = document.getElementById('btnVoltarTela1');

  const btnJogo1 = document.getElementById('btnJogo1');
  const btnJogo2 = document.getElementById('btnJogo2');
  const btnJogo3 = document.getElementById('btnJogo3');

  const btnFooterJogo1 = document.getElementById('btnFooterJogo1');
  const btnFooterJogo2 = document.getElementById('btnFooterJogo2');
  const btnFooterJogo3 = document.getElementById('btnFooterJogo3');

  const botoesVoltarTela2 = document.querySelectorAll('.btnVoltarTela2');

  const btnLateral_j1_para_j2 = document.getElementById('btnLateral_j1_para_j2');
  const btnLateral_j1_para_j3 = document.getElementById('btnLateral_j1_para_j3');

  const btnLateral_j2_para_j1 = document.getElementById('btnLateral_j2_para_j1');
  const btnLateral_j2_para_j3 = document.getElementById('btnLateral_j2_para_j3');

  const btnLateral_j3_para_j1 = document.getElementById('btnLateral_j3_para_j1');
  const btnLateral_j3_para_j2 = document.getElementById('btnLateral_j3_para_j2');

  function esconderTelas() {
    if (tela1) tela1.classList.add('hidden');
    if (tela2) tela2.classList.add('hidden');
    if (telaJogo1) telaJogo1.classList.add('hidden');
    if (telaJogo2) telaJogo2.classList.add('hidden');
    if (telaJogo3) telaJogo3.classList.add('hidden');
  }

  function esconderCabecalhos() {
    if (cabecalhoInicio) cabecalhoInicio.classList.add('hidden');
    if (cabecalhoEscolha) cabecalhoEscolha.classList.add('hidden');
    if (cabecalhoJogo1) cabecalhoJogo1.classList.add('hidden');
    if (cabecalhoJogo2) cabecalhoJogo2.classList.add('hidden');
    if (cabecalhoJogo3) cabecalhoJogo3.classList.add('hidden');
  }

  function restaurarTituloInicial() {
    esconderCabecalhos();
    if (cabecalhoInicio) cabecalhoInicio.classList.remove('hidden');
    if (logoHeader) logoHeader.src = "assets/img/logoheader.svg";
    if (secInicio) secInicio.classList.remove('inicio--reduzido');
  }

  function mudarTitulo() {
    esconderCabecalhos();
    if (cabecalhoEscolha) cabecalhoEscolha.classList.remove('hidden');
    if (logoHeader) logoHeader.src = "assets/img/logo2.svg";
    if (secInicio) secInicio.classList.add('inicio--reduzido');
  }

  function mudarTitulo2() {
    esconderCabecalhos();
    if (cabecalhoJogo1) cabecalhoJogo1.classList.remove('hidden');
    if (logoHeader) logoHeader.src = "assets/img/logo2.svg";
    if (secInicio) secInicio.classList.add('inicio--reduzido');
  }

  function mudarTitulo3() {
    esconderCabecalhos();
    if (cabecalhoJogo2) cabecalhoJogo2.classList.remove('hidden');
    if (logoHeader) logoHeader.src = "assets/img/logo2.svg";
    if (secInicio) secInicio.classList.add('inicio--reduzido');
  }

  function mudarTitulo4() {
    esconderCabecalhos();
    if (cabecalhoJogo3) cabecalhoJogo3.classList.remove('hidden');
    if (logoHeader) logoHeader.src = "assets/img/logo2.svg";
    if (secInicio) secInicio.classList.add('inicio--reduzido');
  }

  function abrirJogo1() {
    esconderTelas();
    if (telaJogo1) telaJogo1.classList.remove('hidden');
    mudarTitulo2();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function abrirJogo2() {
    esconderTelas();
    if (telaJogo2) telaJogo2.classList.remove('hidden');
    mudarTitulo3();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function abrirJogo3() {
    esconderTelas();
    if (telaJogo3) telaJogo3.classList.remove('hidden');
    mudarTitulo4();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (btnAvancar) {
    btnAvancar.addEventListener('click', () => {
      if (tela1) tela1.classList.add('hidden');
      if (tela2) tela2.classList.remove('hidden');
      mudarTitulo();
    });
  }

  if (btnVoltarTela1) {
    btnVoltarTela1.addEventListener('click', (e) => {
      e.preventDefault();
      if (tela2) tela2.classList.add('hidden');
      if (tela1) tela1.classList.remove('hidden');
      restaurarTituloInicial();
    });
  }

  if (btnJogo1) btnJogo1.addEventListener('click', (e) => { e.preventDefault(); abrirJogo1(); });
  if (btnJogo2) btnJogo2.addEventListener('click', (e) => { e.preventDefault(); abrirJogo2(); });
  if (btnJogo3) btnJogo3.addEventListener('click', (e) => { e.preventDefault(); abrirJogo3(); });

  if (btnFooterJogo1) btnFooterJogo1.addEventListener('click', (e) => { e.preventDefault(); abrirJogo1(); });
  if (btnFooterJogo2) btnFooterJogo2.addEventListener('click', (e) => { e.preventDefault(); abrirJogo2(); });
  if (btnFooterJogo3) btnFooterJogo3.addEventListener('click', (e) => { e.preventDefault(); abrirJogo3(); });

  if (btnLateral_j1_para_j2) btnLateral_j1_para_j2.addEventListener('click', abrirJogo2);
  if (btnLateral_j1_para_j3) btnLateral_j1_para_j3.addEventListener('click', abrirJogo3);

  if (btnLateral_j2_para_j1) btnLateral_j2_para_j1.addEventListener('click', abrirJogo1);
  if (btnLateral_j2_para_j3) btnLateral_j2_para_j3.addEventListener('click', abrirJogo3);

  if (btnLateral_j3_para_j1) btnLateral_j3_para_j1.addEventListener('click', abrirJogo1);
  if (btnLateral_j3_para_j2) btnLateral_j3_para_j2.addEventListener('click', abrirJogo2);

  botoesVoltarTela2.forEach((botao) => {
    botao.addEventListener('click', (e) => {
      e.preventDefault();
      esconderTelas();
      if (tela2) tela2.classList.remove('hidden');
      mudarTitulo();
    });
  });
    
    const itensLaterais = document.querySelectorAll('.item_jogo_lateral');

  itensLaterais.forEach((item) => {
    const disco = item.querySelector('.tamanho_disco');

    if (!disco) return;

    let animacao = null;
    let angulo = 0;

    item.addEventListener('mouseenter', () => {
      if (animacao) return;

      animacao = disco.animate(
        [
          { transform: `rotate(${angulo}deg)` },
          { transform: `rotate(${angulo + 360}deg)` }
        ],
        {
          duration: 3000,
          iterations: Infinity,
          easing: 'linear'
        }
      );
    });

    item.addEventListener('mouseleave', () => {
      if (!animacao) return;

      const estilo = window.getComputedStyle(disco);
      const matriz = new DOMMatrixReadOnly(estilo.transform);

      angulo = Math.atan2(matriz.b, matriz.a) * (180 / Math.PI);

      if (angulo < 0) angulo += 360;

      animacao.cancel();
      disco.style.transform = `rotate(${angulo}deg)`;
      animacao = null;
    });
  });


});

