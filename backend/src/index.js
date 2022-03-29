const app = require('./app')

async function main() {

    await app.listen(app.get('port'),app.get('host'))
    console.log('Server port',app.get('port'))
    console.log('Listening at http://localhost:'+ app.get('port') + '\n')
} 


main();