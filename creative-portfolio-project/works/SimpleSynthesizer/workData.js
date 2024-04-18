var panelContent = document.getElementById('panelContent1');

var mediaData = [
    {
        type: 'image',
        source: 'content/final.png',
        alt: 'Description of image 1',
        description: 'Quick description of image 1'
    },
    {
        type: 'youtube',
        source: 'Lx_2cHEaZPQ', // Replace with your YouTube video ID
        description: 'Quick description of YouTube video'
    },
    {
	type: 'youtube',
	source: 'PcrzkwUr1-U',
	description: 'description'
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
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/${media.source}" frameborder="0" allowfullscreen></iframe>
        `;
        mediaContainer.appendChild(youtubeContainer);
    }

    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = media.description;
    descriptionElement.className = 'media-description';

    mediaContainer.appendChild(descriptionElement);
    panelContent.appendChild(mediaContainer);
});
