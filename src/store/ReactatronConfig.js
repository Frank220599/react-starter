import Reactotron from 'reactotron-react-js'
import sagaPlugin from 'reactotron-redux-saga'
import {reactotronRedux} from 'reactotron-redux'

Reactotron
    .configure() // we can use plugins here -- more on this later
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect(); // let's connect!



export default Reactotron
