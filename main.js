var mediaStream;
function abrirCamera(){
    navigator.mediaDevices.getUserMedia({video: true, audio:false})
    .then(function(stream) {
        const areaVideo= document.getElementById('camera');
        areaVideo.scrObject= stream;
})
        .catch(function(error){
            console.error('Erro ao acessar a camera',error)
        });
}

function tirarFoto(){
    const areaVideo= document.getElementById('camera');
    const canvas = document.createElement('canvas');
    canvas.width= areaVideo.videoWidth;
    canvas.height= areaVideo.videoheight;
    const context = canvas.getContext('2d');
    context.drawImage(areaVideo, 0, 0, canvas.width, canvas.height);


const imageDataURL = canvas.toDataURL();

const fotoDiv = document.getElementById('foto');
fotoDiv.style.backgroundImage = `url(${imageDataURL})`;

const downloandLink = document.createElement('a');

downloandLink.href = imageDataURL;
downloandLink.download = 'foto.png';
downloandLink.textContent = 'clique para baixar'
document.body.appendChild(downloandLink);

}

function fechar(){
    navigator.mediaDevices.getUserMedia({video: false});
    const areaVideo= document.getElementById('camera');
    areaVideo.scrObject= null;
    mediaStream = null;
}  
      