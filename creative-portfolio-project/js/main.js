const panelContent1 = document.getElementById('panelContent1');
const panelContent2 = document.getElementById('panelContent2');
const panelContent3 = document.getElementById('panelContent3');

const originalContent1 = panelContent1.innerHTML;
const originalContent2 = panelContent2.innerHTML;
const originalContent3 = panelContent3.innerHTML;

panelContent1.innerHTML = originalContent1.repeat(1);
panelContent2.innerHTML = originalContent2.repeat(2);
panelContent3.innerHTML = originalContent3.repeat(2);

panelContent1.addEventListener('wheel', function () {
    if (panelContent1.scrollTop + panelContent1.clientHeight >= panelContent1.scrollHeight) {
        panelContent1.innerHTML += originalContent1.repeat(1);
    }
});

panelContent2.addEventListener('wheel', function () {
    if (panelContent2.scrollTop + panelContent2.clientHeight >= panelContent2.scrollHeight) {
        panelContent2.innerHTML += originalContent2.repeat(1);
    }
});

panelContent3.addEventListener('wheel', function () {
    if (panelContent3.scrollTop + panelContent3.clientHeight >= panelContent3.scrollHeight) {
        panelContent3.innerHTML += originalContent3.repeat(1);
    }
});