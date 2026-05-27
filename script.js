const WHATSAPP_NUMERO = '5551999999999';

const options = document.querySelectorAll('.card-option, .radio-option');

options.forEach(option => {

  option.addEventListener('click', () => {

    const parent = option.parentElement;

    if(parent.classList.contains('cards-grid') || parent.classList.contains('radio-group')){
      parent.querySelectorAll('.card-option, .radio-option').forEach(item => {
        item.classList.remove('selected');
      });
    }

    option.classList.add('selected');

  });

});

const atendimentoInputs = document.querySelectorAll('input[name="atendimento"]');
const enderecoBox = document.getElementById('enderecoBox');

atendimentoInputs.forEach(input => {

  input.addEventListener('change', () => {

    if(input.value === 'Técnico vai até o local'){
      enderecoBox.classList.remove('hidden');
    } else {
      enderecoBox.classList.add('hidden');
    }

  });

});

document.getElementById('orcamentoForm').addEventListener('submit', function(e){

  e.preventDefault();

  const equipamento = document.querySelector('input[name="equipamento"]:checked').value;
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const problema = document.getElementById('problema').value;
  const liga = document.querySelector('input[name="liga"]:checked').value;
  const atendimento = document.querySelector('input[name="atendimento"]:checked').value;

  const endereco = document.getElementById('endereco').value;
  const bairro = document.getElementById('bairro').value;

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;

  let enderecoTexto = '';

  if(atendimento === 'Técnico vai até o local'){
    enderecoTexto = `📍 Endereço: ${endereco}
🏘️ Bairro/Cidade: ${bairro}`;
  }

  const mensagem = `🔧 *NOVO ORÇAMENTO - SOS ELETRÔNICA*

👤 Cliente: ${nome}
📞 WhatsApp: ${telefone}

📱 Equipamento: ${equipamento}
🏷️ Marca: ${marca}
📦 Modelo: ${modelo}

⚠️ Problema:
${problema}

🔌 Liga? ${liga}

🚚 Atendimento:
${atendimento}

${enderecoTexto}

`;

  const link = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, '_blank');

});
