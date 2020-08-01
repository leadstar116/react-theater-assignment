// tslint:disable-next-line: no-var-requires
const express = require('express'); 
// tslint:disable-next-line: no-var-requires
const cors = require('cors');
// tslint:disable-next-line: no-var-requires
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: any, res: any) => res.send('Hello World!'));
app.get('/sample-get-request', (req: any, res: any) => res.json(req.query));
app.post('/sample-post-request', (req: any, res: any) => res.json(req.body));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));