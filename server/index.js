import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { createRequire } from 'module'; // Bring in the ability to create the 'require' method back to ES module scope
const require = createRequire(import.meta.url);
const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));
const PORT = process.env.PORT || 5000;
const routes = [
	{
		'/api/city/pharmacies': 'returns pharmacies list for in a specific area',
		'/api/city/colleges': 'returns colleges list for in a specific area',
		'/api/city/doctors': 'returns doctors list for in a specific area',
		'/api/city/hospitals': 'returns hospitals list for in a specific area',
	},
];

app.get('/api', (req, res) => {
	res.json({ message: 'Server is ready!' });
});

const Harrow = require('./data/Harrow.json');
const Heathrow = require('./data/Heathrow.json');
const Stratford = require('./data/Stratford.json');
let cities = { Harrow: Harrow, Heathrow: Heathrow, Stratford: Stratford };

app.get('/api/:city/:category', (req, res) => {
	let city = req.params.city;
	let category = req.params.category;
	try {
		if (cities[city] && cities[city][category]) {
			res.json(cities[city][category]);
		} else {
			res.status(404).json({
				message: `No data is available for '${city}' or '${category}'. Please check your request parameters and try again.`,
			});
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

app.listen(PORT, () => {
	console.log(
		`Server is listening on port ${PORT} and ready to accept requests!`
	);
});
