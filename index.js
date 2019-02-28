let header, avatar, headerBio;

const expandedHeaderBio =
    '<h1>Hi, I\'m <span style="color: #FFD901;">Turner</span></h1>' +
    '<br/>' +
    '<p>I\'m a junior software developer in Vancouver, British Columbia</p>';
const shrunkHeaderBio = '<h1>Turner Vink</h1>';

document.addEventListener('DOMContentLoaded', function () {
    header = document.querySelector('header');
    avatar = document.querySelector('header img');
    headerBio = document.querySelector('#header-bio');

    createListeners();
});

function createListeners() {
    window.addEventListener('scroll', function () {
        if (!header.classList.contains('shrunk') && window.pageYOffset > 100) {
            header.style.display = 'none';

            header.classList += ' shrunk';
            avatar.classList += ' shrunk';
            headerBio.innerHTML = shrunkHeaderBio;

            header.style.display = 'initial';
        } else if (header.classList.contains('shrunk') && window.pageYOffset <= 100) {
            header.classList = '';
            avatar.classList = 'avatar-lg';
            headerBio.innerHTML = expandedHeaderBio;
        }
    });
}