function desenharRelogio() {
    const canvas = document.getElementById('tela');
    const contexto = canvas.getContext('2d');
    const raio = canvas.width / 2;

    contexto.clearRect(0, 0, canvas.width, canvas.height);

    //Desenhar números de 1 a 12
    for (let i = 1; i <= 12; i++) {
        const anguloNumero = ((i - 3) * 30);
        const x = raio + (raio - 30) * Math.cos((anguloNumero * Math.PI) / 180);
        const y = raio + (raio - 30) * Math.sin((anguloNumero * Math.PI) / 180);

        contexto.font = '24px Arial';
        contexto.fillStyle = 'black';
        contexto.fillText(i, x - 10, y + 10);
    }

    //Círculo do relógio
    contexto.beginPath();
    contexto.arc(raio, raio, raio - 10, 0, 2 * Math.PI);
    contexto.strokeStyle = 'black';
    contexto.lineWidth = 5;
    contexto.stroke();
    contexto.closePath();

    //Capturar hora
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    //Calcular angulo dos ponteiros
    const anguloHora = (horas % 12) * 30 + (minutos / 60) * 30 - 90;
    const anguloMinuto = minutos * 6 + (segundos / 60) * 6 - 90;
    const anguloSegundo = segundos * 6 - 90;

    //Ponteiro de horas
    contexto.beginPath();
    contexto.moveTo(raio, raio);
    contexto.lineTo(raio + raio * 0.4 * Math.cos((anguloHora * Math.PI) / 180), raio + raio * 0.4 * Math.sin((anguloHora * Math.PI) / 180));
    contexto.strokeStyle = 'black';
    contexto.lineWidth = 8;
    contexto.stroke();
    contexto.closePath();

    //Ponteiro de minutos 
    contexto.beginPath();
    contexto.moveTo(raio, raio);
    contexto.lineTo(raio + raio * 0.6 * Math.cos((anguloMinuto * Math.PI) / 180), raio + raio * 0.6 * Math.sin((anguloMinuto * Math.PI) / 180));
    contexto.strokeStyle = 'blue';
    contexto.lineWidth = 4;
    contexto.stroke();
    contexto.closePath();

    //Ponteiro de segundos
    contexto.beginPath();
    contexto.moveTo(raio, raio);
    contexto.lineTo(raio + raio * 0.7 * Math.cos((anguloSegundo * Math.PI) / 180), raio + raio * 0.7 * Math.sin((anguloSegundo * Math.PI) / 180));
    contexto.strokeStyle = 'red';
    contexto.lineWidth = 2;
    contexto.stroke();
    contexto.closePath();
}
//Atualizar a cada 1 segundo
setInterval(desenharRelogio, 1000);