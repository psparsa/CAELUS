<img src='https://i.ibb.co/Zc7kMKQ/Desktop.png?' />

### CÆLUS

CÆLUS is a browser homepage created using <a href="https://www.gatsbyjs.com">Gatsby.js</a>

### Prerequisites

- [Node.js](https://nodejs.org/en) <= v18
- [WeatherAPI Key](https://www.weatherapi.com)
- [Abstract Key](https://www.abstractapi.com)

### Development

1. Populate the `.env.development` file:

```bash
cp .env.example .env.development
# Then set the API keys in the .env.development
```

2. Start the development server:

```bash
npm install
npm run develop
```

Then open http://127.0.0.1:8000 to see the webpage.

### Deployment

1. Populate the `.env.production` file:

```bash
cp .env.example .env.production
# Then set the API keys in the .env.production
```

2. Generate the artifacts:

```bash
npm install
npm run build
```

3. Serve the `public` folder
