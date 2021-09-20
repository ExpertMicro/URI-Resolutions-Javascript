
let casos = 10000;

do {

  let cpf = prompt();

  const limpar = function limpar(cpf) {
    let cpfString = '';
    cpfString = cpf; 
    const cpfLimpo = cpfString.replace(/\D/g, '');
    return cpfLimpo;
  }

  const cpfLimpo = limpar(cpf);
  const arrayCpf = Array.from(cpfLimpo);

  

  const validaPdigito = function validaPdigito(cpf) {
    const cpfLimpo = limpar(cpf);
    const arrayCpf = Array.from(cpfLimpo);

    let somaTotalPdigito = 0;
    let i = 10;
    let k = 0;

    do {
      somaTotalPdigito = somaTotalPdigito + arrayCpf[k] * i;
    k++;
    i--;
    } while(i > 1);


    const restoPdigito = somaTotalPdigito % 11;
    let pDigitoVerificador;
    if(restoPdigito === 1 || restoPdigito === 0) {
      pDigitoVerificador = 0;
      return pDigitoVerificador;
    }
    else {
      pDigitoVerificador = 11 - restoPdigito;
      return pDigitoVerificador;
    }
  }


  const validaSdigito = function validaSdigito(cpf) {
    const cpfLimpo = limpar(cpf);
    const arrayCpf = Array.from(cpfLimpo);

    let somaTotalSdigito = 0;
    let i = 11;
    let k = 0;

    do {
      somaTotalSdigito = somaTotalSdigito + arrayCpf[k] * i;
    k++;
    i--;
    } while(i > 1);


    const restoSdigito = somaTotalSdigito % 11;
    let sDigitoVerificador;
    if(restoSdigito === 1 || restoSdigito === 0) {
      sDigitoVerificador = 0;
      return sDigitoVerificador;
    }
    else {
      sDigitoVerificador = 11 - restoSdigito;
      return sDigitoVerificador;
    }
  }

  const pDigitoVerificador = validaPdigito(cpf);
  const sDigitoVerificador = validaSdigito(cpf);


  if (cpfLimpo.length != 11 || cpfLimpo == '00000000000' || cpfLimpo == '11111111111' || cpfLimpo == '22222222222' || cpfLimpo == '33333333333' || cpfLimpo == '44444444444' || cpfLimpo == '55555555555' || cpfLimpo == '66666666666' || cpfLimpo == '77777777777' || cpfLimpo == '88888888888' || cpfLimpo == '99999999999' || cpfLimpo == '01234567890')
  {
    console.log('CPF invalido');
  }
  else if (pDigitoVerificador != arrayCpf[9] || sDigitoVerificador != arrayCpf[10]) {
    console.log('CPF invalido');
  }
  else {
    console.log('CPF valido');
  }


  casos--;
} while(casos > 0)


