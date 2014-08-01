import View from './view';

class LogView extends View {
    render() {
        var compiled = super();
        console.log('yeah!', compiled);
    }
}

export default LogView;
