var panelContent = document.getElementById('panelContent1');

var mediaData = [
    {
        type: 'image',
        source: 'content/opera_F2lwDo947f.png',
        alt: 'Description of image 1',
        description: 'Quick description of image 1'
    },
    {
	type: 'image',
	source: 'content/WhatsApp Image 2023-06-15 at 01.00.24.jpg',
	alt: 'f',
	description: 'description'
    },
    {
	type: 'image',
	source: 'content/WhatsApp Video 2023-06-15 at 01.00.28.mp4',
	alt: 'f',
	description: 'f'
    }

    // Add more media objects as needed
];

mediaData.forEach(function (media) {
    var mediaContainer = document.createElement('div'); // Use a generic container
    mediaContainer.className = 'media-item-container'; // Add a new class

    if (media.type === 'image') {
        var imageElement = document.createElement('img');
        imageElement.src = media.source;
        imageElement.alt = media.alt;
        mediaContainer.appendChild(imageElement);
    } else if (media.type === 'video') {
        var videoElement = document.createElement('video');
        videoElement.src = media.source;
        videoElement.controls = true;
        mediaContainer.appendChild(videoElement);
    } else if (media.type === 'youtube') {
        var youtubeContainer = document.createElement('div');
        youtubeContainer.innerHTML = `
            <iframe width="100%" height="512" src="https://www.youtube.com/embed/${media.source}" frameborder="0" allowfullscreen></iframe>
        `;
        mediaContainer.appendChild(youtubeContainer);
    }

    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = media.description;
    descriptionElement.className = 'media-description';

    mediaContainer.appendChild(descriptionElement);
    panelContent.appendChild(mediaContainer);
});
