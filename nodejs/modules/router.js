function handle(req, res) {

    const head = require('./head');

    const pages = {
        '/': { 'view': 'home', 'code': 200, 'type': 'text/html' },
        '/about': { 'view': 'about', 'code': 200, 'type': 'text/html' },
        '/404': { 'view': '404', 'code': 404, 'type': 'text/html' },
    }; // TODO : create a module to handle the routes creation

    if (pages[req.url]) {

        head.handle(pages[req.url].code, pages[req.url].type, res);
        res.write(`load here the page : ${pages[req.url].view}<br>`);
    
    } else {

        head.handle(pages['/404'].code, pages['/404'].type, res);
        res.write(`load here the page : ${pages['/404'].view}<br>`);
        
    }

}

module.exports = { handle };