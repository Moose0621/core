import createStore from './htmlStore';

export default function sessionStore(config = {}, provider = sessionStorage) {

    return createStore(config, provider);

}