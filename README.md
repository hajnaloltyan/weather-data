<a name="readme-top"></a>

<div align="center">
  <img src="./public/hajnalkaoltyan.png" alt="logo" width="140"  height="auto" />
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Weather Data ](#-weather-data-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Weather Data <a name="about-project"></a>

This is my Microverse React/Redux Capstone **Weather Data** site, created with React + Vite, React Router, Redux and CSS.

The App has the functionality to fetch location results based on the typed in search word, and after location selection to provide statistical information of the weather from the previous 14 days.

The App comes with 14 preselected popular locations to choose from.

It uses 2  different APIs, for the location results it uses: [Geocoding API](https://openweathermap.org/api/geocoding-api)
And for the historical data: [Visual Crossing Weather API](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/)

Both sites require registration to acquire the API key.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>React + Vite</summary>
</details>

<details>
  <summary>React Router</summary>
</details>

<details>
  <summary>Redux</summary>
</details>

<details>
  <summary>Redux Toolkit</summary>
</details>

<details>
  <summary>CSS</summary>
</details>

<details>
<summary>GitFlow</summary>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **React + Vite**
- **React Router**
- **Redux Toolkit**
- **GitFlow**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://hajnaloltyan.github.io/weather-data)

- [Video](https://www.loom.com/share/ffb7e160240c4a7db9e4b7aeb6796bf9?sid=1f27d319-b9df-4540-9d15-0f275e3b6558)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

  - Code editor
  - Node
  - To register for both API providers to get the personal API Key
  - Store the keys in the root folder of the project inside the .env files using this exact format:

```sh
  VITE_API_KEY_GEO='Your [Geocoding API](https://openweathermap.org/api/geocoding-api) API'
  VITE_API_KEY_WEATHER='Your [Visual Crossing Weather API](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/) API'

```

### Setup

Clone this repository to your desired folder by opening the terminal and running the following command:

```sh
  git clone git@github.com:hajnaloltyan/weather-data.git

```


### Install

Install this project with:

```sh
  npm install

```

### Usage

To run the project use the following command:

```sh
  npm run dev

```

### Run tests

To run tests, run the following commands:

  For CSS linter errors:

```sh
  npx stylelint "**/*.{css,scss}"

```

  For ESLint linter errors:

```sh
  npx eslint "**/*.{js,jsx}"

```

### Deployment

Deployed by GitHub Pages with command:

```sh
  npx run deploy

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Hajnalka Oltyan**

- GitHub: [@hajnaloltyan](https://github.com/hajnaloltyan)
- LinkedIn: [Hajnal Oltyan](https://www.linkedin.com/in/hajnalka-oltyan/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->


## 🔭 Future Features <a name="future-features"></a>

- To offer options for setting the dates
- Add more charts and data

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project please leave a star and a comment.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Original design idea by [Nelson Sakwa on Behance](https://www.behance.net/sakwadesignstudio).

I would like to thank Microverse to have this opportunity. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
