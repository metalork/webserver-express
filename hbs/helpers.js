const hbs = require('hbs');

// helpers
hbs.registerHelper('getAno', ()=>{
    return new Date().getFullYear();
})