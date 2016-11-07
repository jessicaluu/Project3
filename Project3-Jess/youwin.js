var confettiParty = function init(particle) {
    this.particle = particle;
    this.animations = ['slow', 'medium', 'fast'];
    this.colors = ['#fce18a', '#ff726d', '#b48def', '#f4306d', '#99ccff', '#ccffcc'];
    
    this.createContainer();
    this.drawConfetti();
};

confettiParty.prototype.createContainer = function () {
    var container = document.createElement('div');
    var position = this.particle.style.position;

    if (position !== 'relative' || position !== 'absolute') {
        this.particle.style.position = 'relative';
    }

    container.classList.add('confetti-container');

    this.particle.appendChild(container);

    this.container = container;
};

confettiParty.prototype.drawConfetti = function () {
    var _this = this;

    this.interval = setInterval(function () {
        var confettiParticle = document.createElement('div');
        var confettiSize = Math.floor(Math.random() * 3) + 7 + 'px';
        var confettiBackground = _this.colors[Math.floor(Math.random() * _this.colors.length)];
        var confettiLeft = Math.floor(Math.random() * _this.particle.offsetWidth) + 'px';
        var confettiAnimation = _this.animations[Math.floor(Math.random() * _this.animations.length)];

        confettiParticle.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
        confettiParticle.style.left = confettiLeft;
        confettiParticle.style.width = confettiSize;
        confettiParticle.style.height = confettiSize;
        confettiParticle.style.backgroundColor = confettiBackground;

        confettiParticle.removeTimeout = setTimeout(function () {
            confettiParticle.parentNode.removeChild(confettiParticle);
        }, 3000);

        _this.container.appendChild(confettiParticle);
    }, 25);
};

window.confettiParty = new confettiParty(document.querySelector('.js-container'));

var commonPokemon = ['', '', '', '', ''];
var rarePokemon = ['', '', '', '', ''];
var epicPokemon = ['', '', '', '', ''];
var legendaryPokemon = ['', '', '', '', ''];


function displayCommon() {
    var num = Math.floor(Math.random() * (commonPokemon.length + 1));
    document.picture.src = commonPokemon[num];
}
function displayRare() {
    var num = Math.floor(Math.random() * (rarePokemon.length + 1));
    document.picture.src = commonPokemon[num];
}
function displayEpic() {
    var num = Math.floor(Math.random() * (epicPokemon.length + 1));
    document.picture.src = commonPokemon[num];
}
function displayLegendary() {
    var num = Math.floor(Math.random() * (legendaryPokemon.length + 1));
    document.picture.src = commonPokemon[num];
}