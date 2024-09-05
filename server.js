import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Get the __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'src'));
app.use(express.static(join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.render('pages/Index');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
