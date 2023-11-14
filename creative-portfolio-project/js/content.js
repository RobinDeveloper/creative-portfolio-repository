import { contentData } from './contentData.js';
import { blogData } from './blogData.js';

// Function to create the content item
function createContentItem(title, imageUrl, author, date, htmlFileName) {
    const contentItem = document.createElement('div');
    contentItem.classList.add('content-item');

    const link = document.createElement('a');
    link.href = htmlFileName;
    link.target = '_blank'; // Open link in a new tab

    link.innerHTML = `
        <h2 class="content-title">${title}</h2>
        <img class="content-image" src="${imageUrl}" alt="Image Description">
        <p class="content-author">Author: ${author}</p>
        <p class="content-date">Date: ${date}</p>
    `;

    contentItem.appendChild(link);
    return contentItem;
}

// Function to create the blog item
function createBlogItem(imageUrl, author, date, summary, blogLink) {
    const blogItem = document.createElement('div');
    blogItem.classList.add('blog-item');

    const link = document.createElement('a');
    link.href = blogLink;
    link.target = '_blank'; // Open link in a new tab

    link.innerHTML = `
        <img class="blog-image" src="${imageUrl}" alt="Blog Image">
        <p class="blog-author">Author: ${author}</p>
        <p class="blog-date">Release Date: ${date}</p>
        <p class="blog-summary">${summary}</p>
    `;

    blogItem.appendChild(link);
    return blogItem;
}


const panelContent = document.getElementById('panelContent1'); // Replace with your panel ID
const panelContent3 = document.getElementById('panelContent3');

contentData.forEach(data => {
    const item = createContentItem(data.title, data.imageUrl, data.author, data.date, data.htmlFileName);
    panelContent.appendChild(item);
});

blogData.forEach(data => {
    const blogItem = createBlogItem(data.imageUrl, data.author, data.date, data.summary, data.blogLink);
    panelContent3.appendChild(blogItem);
});