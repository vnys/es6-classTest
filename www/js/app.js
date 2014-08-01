import View from './view';
import Model from './model';

var jack = new Model({
    name: 'john'
})

var view = new View({
    model: jack,
    template: 'Hello, <%= name %>'
});

console.log(view.render());
