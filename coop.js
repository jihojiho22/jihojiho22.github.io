let result = prompt('when is newnmes birthday?');

if (result === '0824'){
    alert('Welcome gomdol')

} else{
    alert('GET OUT')
}

class Model {
    constructor () {

    }
}

class View {
    constructor () {
        this.$press = document.querySelector('.press');
        this.$home = document.querySelector('.home');
        this.press = this.press.bind(this);
        this.home = this.home.bind(this);

        this.$press.addEventListener('click', this.press);
        this.$home.addEventListener('click', this.home);

    }

    home () {
        console.log('hi');
    }

    press () {
        this.clearForm();
        document.querySelector('section').innerHTML = `
        <input class ="btn" placeholder="preesss">
        
        `;


    }

    clearForm () {
        document.querySelector('section').innerHTML = '';

    }
}

class Controller {
    constructor (model, view) {
        this.model = model;
        this.view = view;

    }

}

model = new Model();
view = new View();
controller = new Controller(model, view);