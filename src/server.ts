import { Server } from 'http';
import app from './app';


let server: Server;
const PORT = 7000;


async function main() {

    try {
        server = app.listen(PORT, () => {
            console.log(`App Is listening in port : ${PORT}`)
        })

    } catch (error) {

    }
}

main();