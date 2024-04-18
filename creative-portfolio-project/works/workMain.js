const panelContent1 = document.getElementById('panelContent1');
const panelContent2 = document.getElementById('panelContent2');

const originalContent1 = panelContent1.innerHTML; // Save the original content
const originalContent2 = panelContent2.innerHTML; // Save the original content

// Add some initial content to fill the view
panelContent1.innerHTML = originalContent1.repeat(10);
panelContent2.innerHTML = originalContent2.repeat(5);

// panelContent1.addEventListener('wheel', function() {
//     if (panelContent1.scrollTop + panelContent1.clientHeight >= panelContent1.scrollHeight) {
//         console.log("hit")
//         panelContent1.innerHTML += originalContent1.repeat(1); // Append original content when reaching the bottom
//     }
// });

panelContent2.addEventListener('wheel', function() {
    if (panelContent2.scrollTop + panelContent2.clientHeight >= panelContent2.scrollHeight) {
        console.log("hit")
        panelContent2.innerHTML += originalContent2.repeat(1); // Append original content when reaching the bottom
    }
});