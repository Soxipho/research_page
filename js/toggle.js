const toggleBtn = document.getElementById('toggleBtn');
const honorContent = document.querySelector('.part-content');

toggleBtn.addEventListener('click', function() {
    if (honorContent.style.display === 'none' || honorContent.style.display === '') {
        honorContent.style.display = 'block';
        toggleBtn.innerText = '-';
    } else {
        honorContent.style.display = 'none';
        toggleBtn.innerText = '+';
    }
});


const tBtn_projects = document.getElementById('toggleBtn-projects');
const projectContent = document.getElementById('projects');

tBtn_projects.addEventListener('click', function() {
    if (projectContent.style.display === 'none' || projectContent.style.display === '') {
        projectContent.style.display = 'block';
        tBtn_projects.innerText = '-';
    } else {
        projectContent.style.display = 'none';
        tBtn_projects.innerText = '+';
    }
});

const tBtn_publications = document.getElementById('toggleBtn-publications');
const publicationsContent = document.getElementById('publications');

tBtn_publications.addEventListener('click', function() {
    if (publicationsContent.style.display === 'none' || publicationsContent.style.display === '') {
        publicationsContent.style.display = 'block';
        tBtn_publications.innerText = '-';
    } else {
        publicationsContent.style.display = 'none';
        tBtn_publications.innerText = '+';
    }
});


const tBtn_patents = document.getElementById('toggleBtn-patents');
const patentsContent = document.getElementById('patents');

tBtn_patents.addEventListener('click', function() {
    if (patentsContent.style.display === 'none' || patentsContent.style.display === '') {
        patentsContent.style.display = 'block';
        tBtn_patents.innerText = '-';
    } else {
        patentsContent.style.display = 'none';
        tBtn_patents.innerText = '+';
    }
});


const tBtn_posts = document.getElementById('toggleBtn-posts');
const postsContent = document.getElementById('posts');

tBtn_posts.addEventListener('click', function() {
    if (postsContent.style.display === 'none' || postsContent.style.display === '') {
        postsContent.style.display = 'block';
        tBtn_posts.innerText = '-';
    } else {
        postsContent.style.display = 'none';
        tBtn_posts.innerText = '+';
    }
});


const tBtn_proposals = document.getElementById('toggleBtn-proposals');
const proposalsContent = document.getElementById('proposals');

tBtn_proposals.addEventListener('click', function() {
    if (proposalsContent.style.display === 'none' || proposalsContent.style.display === '') {
        proposalsContent.style.display = 'block';
        tBtn_proposals.innerText = '-';
    } else {
        proposalsContent.style.display = 'none';
        tBtn_proposals.innerText = '+';
    }
});


const tBtn_softwares = document.getElementById('toggleBtn-softwares');
const softwaresContent = document.getElementById('softwares');

tBtn_softwares.addEventListener('click', function() {
    if (softwaresContent.style.display === 'none' || softwaresContent.style.display === '') {
        softwaresContent.style.display = 'block';
        tBtn_softwares.innerText = '-';
    } else {
        softwaresContent.style.display = 'none';
        tBtn_softwares.innerText = '+';
    }
});


const tBrn_copyrights = document.getElementById('toggleBtn-copyrights');
const copyrightsContent = document.getElementById('copyrights');

tBrn_copyrights.addEventListener('click', function() {
    if (copyrightsContent.style.display === 'none' || copyrightsContent.style.display === '') {
        copyrightsContent.style.display = 'block';
        tBrn_copyrights.innerText = '-';
    } else {
        copyrightsContent.style.display = 'none';
        tBrn_copyrights.innerText = '+';
    }
});