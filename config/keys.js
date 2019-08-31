//keys.js - figure what to return
if(process.env.NODE_ENV === 'production') {
    //in production
    module.exports = require('./prod');
} else {
    /// in development
    module.exports = require('./dev'); 
}
//120065140749-79c4k9ruqc5dlvkgv1hl321604cds6a9.apps.googleusercontent.com
//918rGJ0CFc2tj5bguU4hKHPR
//production key:  mongodb+srv://myuser:RHXKXUn6g880nSFS@cluster0-ji4mf.mongodb.net/test?retryWrites=true&w=majority