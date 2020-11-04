module.exports = {
  moduleNameMapper: {
    '^.+\\.(scss)$': 'identity-obj-proxy',
    'components/(.*)': '<rootDir>/components/$1',
    'styles/(.*)': '<rootDir>/styles/$1',
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  modulePathIgnorePatterns: ['node_modules', 'cypress'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
