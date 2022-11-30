import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { createRequire } from 'module'; // Bring in the ability to create the 'require' method back to ES module scope
const require = createRequire(import.meta.url);
// import bodyParser from 'body-parser';
// app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));
const Harrow = require('./data/Harrow.json');
const Heathrow = require('./data/Heathrow.json');
const Stratford = require('./data/Stratford.json');
const PORT = process.env.PORT || 5000;

const routes = [
	{
		'/pharmacies': 'returns pharmacies list for in a specific area',
		'/colleges': 'returns colleges list for in a specific area',
		'/doctors': 'returns doctors list for in a specific area',
		'/hospitals': 'returns hospitals list for in a specific area',
	},
];

app.get('/api', (req, res) => {
	res.json({ message: 'Server is ready!' });
});

app.listen(PORT, () => {
	console.log(
		`Server is listening on port ${PORT} and ready to accept requests!`
	);
});
