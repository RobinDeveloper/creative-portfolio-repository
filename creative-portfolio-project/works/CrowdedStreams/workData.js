var panelContent = document.getElementById('panelContent1');

var mediaData = [
    {
        type: 'youtube',
        source: 'WIV2MPQWcIo', // Replace with your YouTube video ID
        description: 'Invitation'
    },
    {
        type: 'youtube',
        source: 'm2SC9T-4Xfk', // Replace with your YouTube video ID
        description: 'expo'
    },
    {
        type: 'image',
        source: 'content/expo.jpg',
        alt: 'expo view',
        description: 'Expo with people'
    },
    {
        type: 'youtube',
        source: 'FUjub1i84S8', // Replace with your YouTube video ID
        description: 'Sculpture render'
    },
    {
        type: 'image',
        source: 'content/viewers.jpg',
        alt: 'expo view',
        description: 'Expo with people'
    },
    {
        type: 'youtube',
        source: 'FHQA7v2L6pk', // Replace with your YouTube video ID
        description: 'renderOFframes'
    },
    {
        type: 'youtube',
        source: 'ZNmyEO58rlk', // Replace with your YouTube video ID
        description: 'renderOFframes'
    },
    {
        type: 'image',
        source: 'content/start.jpg',
        alt: 'expo view',
        description: 'How it started'
    },
    {
        type: 'image',
        source: 'content/expo2.jpg',
        alt: 'expo view',
        description: 'Expo with people'
    },
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
            <iframe width="100%%" height="512px" src="https://www.youtube.com/embed/${media.source}" frameborder="0" allowfullscreen></iframe>
        `;
        mediaContainer.appendChild(youtubeContainer);
    }

    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = media.description;
    descriptionElement.className = 'media-description';

    mediaContainer.appendChild(descriptionElement);
    panelContent.appendChild(mediaContainer);
});
