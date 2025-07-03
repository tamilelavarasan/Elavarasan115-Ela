# API Automation Project

This project is designed for API automation testing using JavaScript. It provides a structured approach to testing API endpoints with a focus on maintainability and scalability.

## Project Structure

```
api-automation-project
├── src
│   ├── tests
│   │   └── sampleTest.js       # Contains test cases for API automation
│   ├── utils
│   │   └── requestHelper.js     # Utility functions for making HTTP requests
│   └── config
│       └── config.js           # Configuration settings for the project
├── package.json                 # npm configuration file
├── .env                         # Environment variables
├── .gitignore                   # Files and directories to ignore by Git
└── README.md                    # Project documentation
```

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd api-automation-project
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration

- Create a `.env` file in the root directory and add your environment variables, such as API keys.

### Running Tests

To run the tests, use the following command:
```
npm test
```

### Usage

- The `src/tests/sampleTest.js` file contains the test cases that you can modify to suit your API endpoints.
- Use the utility functions in `src/utils/requestHelper.js` to simplify your API requests.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.