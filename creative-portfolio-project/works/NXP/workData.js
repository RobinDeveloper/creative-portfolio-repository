var panelContent = document.getElementById('panelContent1');

var mediaData = [
    {
        type: 'image',
        source: 'Content/poster.jpg',
        alt: 'Description of image 1',
        description: 'Poster'
    },
    {
        type: 'youtube',
        source: '2gdM61lfLq4', // Replace with your YouTube video ID
        description: 'interview about the work'
    },
    {
	type: 'youtube',
	source: '0UNBbyhc36g',
	description: 'An incident happened in The Netherlands with human injury.'

    },
    {
	type: 'youtube',
	source: 'n0eJe_eVmAk',
	description: 'realtime view of the work.'
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
