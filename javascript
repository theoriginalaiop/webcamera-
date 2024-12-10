const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const photo = document.getElementById('photo');

// Access the user's webcam
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing the camera:', error);
    alert('Unable to access the camera. Please check permissions.');
  });

// Take a photo when the button is clicked
snap.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert canvas content to an image and display it
  const imageData = canvas.toDataURL('image/png');
  photo.setAttribute('src', imageData);
});
