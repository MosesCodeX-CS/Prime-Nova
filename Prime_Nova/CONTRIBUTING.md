# Contributing to Primenova

Thank you for your interest in contributing to Primenova! This document provides guidelines and information for contributors.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow the TypeScript and React styleguides
- Include thoughtfully-worded, well-structured tests
- Document new code based on the Documentation Styleguide
- End all files with a newline

## Development Process

### Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `pnpm install`
4. Create a feature branch: `git checkout -b feature/amazing-feature`
5. Make your changes
6. Run tests: `pnpm test`
7. Run linting: `pnpm lint`
8. Commit your changes: `git commit -m 'Add amazing feature'`
9. Push to the branch: `git push origin feature/amazing-feature`
10. Open a Pull Request

### Development Guidelines

#### Code Style

- Use TypeScript for all new code
- Follow the existing code style and conventions
- Use Prettier for code formatting
- Use ESLint for code linting
- Write meaningful commit messages

#### Component Guidelines

- Use functional components with hooks
- Follow the existing component structure
- Use TypeScript interfaces for props
- Include proper prop validation
- Write unit tests for components

#### File Naming

- Use PascalCase for React components
- Use camelCase for utility functions
- Use kebab-case for file names
- Use descriptive names that indicate purpose

#### Testing

- Write tests for all new features
- Maintain or improve test coverage
- Use Testing Library for component tests
- Use Vitest for unit tests
- Test user interactions, not implementation details

### Commit Message Format

We use a structured commit message format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(auth): add Google OAuth integration

fix(header): resolve mobile menu accessibility issue

docs(readme): update installation instructions
```

## Project Structure

```
primenova/
├── app/                    # Next.js App Router pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── sections/         # Page-specific sections
├── lib/                  # Utilities and configurations
├── styles/               # Global styles
├── public/               # Static assets
├── test/                 # Test utilities
└── .github/workflows/    # CI/CD workflows
```

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run tests with UI
pnpm test:ui
```

### Writing Tests

- Write tests for all new components and functions
- Use descriptive test names
- Test user behavior, not implementation
- Mock external dependencies
- Use data-testid for testing hooks

## Documentation

- Update README.md for significant changes
- Add JSDoc comments for new functions
- Update API documentation if applicable
- Include examples in documentation

## Release Process

1. All tests must pass
2. Code must be reviewed and approved
3. Documentation must be updated
4. Version number must be incremented
5. Changelog must be updated

## Questions?

If you have any questions about contributing, please:

1. Check the existing issues and discussions
2. Create a new issue with the "question" label
3. Contact the maintainers

Thank you for contributing to Primenova!
