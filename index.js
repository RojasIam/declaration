const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {

    const container = document.createElement('div');
    container.appendChild(document.createTextNode('Sabía que pondrias que sí 😁 Mentira, muchas gracias!!'));

   
    document.getElementById('modalContent').innerHTML = container.innerHTML;
    document.getElementById('myModal').style.display = 'block';

    
    const videoElement = document.createElement('video');
    videoElement.src = 'cachetes.mp4'; 
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;
    document.getElementById('modalContent').appendChild(videoElement);
});


function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
});
