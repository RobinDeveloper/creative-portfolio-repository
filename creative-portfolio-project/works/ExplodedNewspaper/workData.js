var panelContent = document.getElementById('panelContent1');

var mediaData = [
    {
        type: 'youtube',
        source: 'zgsv9nggAQI', // Replace with your YouTube video ID
        description: 'Process video'
    },
    {
	type: 'youtube',
	source: 'zgsv9nggAQI',
	description: 'Reading video'
    },
    {
	type: 'image',
	source: 'content/Output0.png',
	alt: 'The code',
	description: 'Final image one'
    },
    {
	type: 'image',
	source: 'content/Output1.png',
	alt: 'The code',
	description: 'Final image two'
    },
    {
	type: 'image',
	source: 'content/Output2.png',
	alt: 'The code',
	description: 'Final image three'
    },
    {
	type: 'image',
	source: 'content/Output4.png',
	alt: 'The code',
	description: 'Final image four'
    },
    {
	type: 'image',
	source: 'content/Output5.png',
	alt: 'The code',
	description: 'Final image five'
    },
        {
	type: 'image',
	source: 'content/Output6.png',
	alt: 'The code',
	description: 'Final image six'
    },
        {
	type: 'image',
	source: 'content/Output7.png',
	alt: 'The code',
	description: 'Final image seven'
    },
    {
	type: 'image',
	source: 'content/Output8.png',
	alt: 'The code',
	description: 'Final image eight'
    },
    {
	type: 'image',
	source: 'content/Output9.png',
	alt: 'The code',
	description: 'Final image nine'
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
