import LogView from './logview';
import Model from './model';
import {keys} from './generators';

var jack = new Model({
    name: 'john'
});

var view = new LogView({
    model: jack,
    template: 'Hello, <%= name %>'
});

view.render();

var obj = { 'name': 'lars', 'age': 10 };

console.log(keys(obj).next());



// arrow functions

var array = ['file-1.json', 'file-2.json', 'file-3.json'];

// old way
console.log(array.map(function(item){ return 'directory/' + item; }));

// new way
console.log(array.map( item => 'directory/' + item ));
