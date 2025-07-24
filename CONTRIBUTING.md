# CONTRIBUTING

When contributing to this repository, please first discuss the change you wish to make via [issue](https://github.com/Deveripon/reactive-accelarator/issues), [email](mailto:devripon.io@gmail.com), or any other method with the owners of this repository before making a change. and **Always create a new branch before pushing you changes**

## How to work on docs

Current Files and Folder Structure is

![Filetree](./public/filetree.png)

-   **In this tree we are working on, you can create a file with the of the lesson you want to add documentation with .mdx extension.**
-   In co-located `_meta.json` file you can define the lesson name as object which will be show in UI.

Example:

![meta](./public/meta.png)

# Contributing to Reactive Accelerator

Thank you for your interest in contributing to Reactive Accelerator! This document provides guidelines for contributing to our documentation.

## Getting Started

1. **Fork & Clone**

    - Fork the repository on GitHub
    - Clone your fork locally:

    ```bash
    git clone https://github.com/deveripon/reactive-accelarator.git
    ```

2. **Branch Creation**
    - Create a new branch for your changes:
    ```bash
    git checkout -b feature/your-feature-name
    ```

## Documentation Structure

### File Organization

-   All documentation files are written in `.mdx` format
-   Files should be placed in their appropriate category folder
-   Each category folder contains a `_meta.json` file

### Creating New Content

1. **Adding a New Lesson**

    - Create a new `.mdx` file in the appropriate folder
    - File naming convention: `kebab-case.mdx`
    - Example: `state-management.mdx`

2. **Updating \_meta.json**
    ```json
    {
        "lesson-name": "Display Title for the Lesson"
    }
    ```

## Writing Guidelines

### MDX Format

-   Use clear headings (H1, H2, H3)
-   Include code examples when relevant
-   Add explanatory comments in code blocks
-   Use appropriate formatting:
    -   `inline code` for technical terms
    -   **bold** for emphasis
    -   _italic_ for secondary emphasis

### Code Examples

-   Ensure code examples are functional
-   Include comments explaining complex logic
-   Use consistent formatting

## Submission Process

1. **Before Submitting**

    - Test your changes locally
    - Ensure all files are properly formatted
    - Update relevant documentation

2. **Making a Pull Request**
    - Commit your changes:
    ```bash
    git add .
    git commit -m "docs: add documentation for [feature]"
    git push origin feature/your-feature-name
    ```
    - Create a Pull Request through GitHub
    - Link relevant issues in your PR

## Communication

-   Open an [issue](https://github.com/Deveripon/reactive-accelarator/issues) for discussions
-   Contact maintainers via [email](mailto:devripon.io@gmail.com)
-   Wait for feedback before making major changes

## Code of Conduct

-   Be respectful and inclusive
-   Follow existing documentation style
-   Help others in the community
-   Accept constructive feedback

## Need Help?

Feel free to reach out if you need assistance:

-   Create an issue for technical questions
-   Email maintainers for private inquiries
-   Check existing documentation for reference

Thank you for contributing to make Reactive Accelerator better! 🚀
