# 🙌 রিয়েক্টিভ অ্যাক্সেলারেটরে আপনাকে স্বাগতম!

আমরা তৈরি করছি এমন একটা ডকুমেন্টেশন প্ল্যাটফর্ম, যেখানে **JavaScript Ecosystem** (React, Next.js, Zustand, React Query, TypeScript, ইত্যাদি) বিষয়গুলো শেখা হবে একদম সহজ ভাষায়, ব্যাখ্যাসহ, উদাহরণসহ — একেবারে নিজের ভাষায়!

এখানে আপনি শুধু পড়বেন না, চাইলে **অংশও নিতে পারবেন আমাদের সাথে**, লিখে, শেয়ার করে, বা সাহায্য করে।

---

## ✍️ কীভাবে কন্ট্রিবিউট করবেন?

### ১. রিপোজিটরি ফর্ক ও ক্লোন করুন

```bash
git clone https://github.com/deveripon/reactive-accelarator.git
cd reactive-accelarator
```

### ২. নতুন একটি ব্রাঞ্চ তৈরি করুন

```bash
git checkout -b feature/your-topic-name
```

### 📁 কনটেন্ট কোথায় লিখবেন?

আমাদের ডকুমেন্টেশন গুলো রাখা আছে `.mdx` ফাইল আকারে, বিভিন্ন ক্যাটাগরি ফোল্ডারে।

![Filetree](./public/filetree.png)

প্রতিটি টপিকের জন্য একটি `.mdx` ফাইল তৈরি করুন

ফাইলের নাম হবে `kebab-case.mdx `(যেমন `state-management.mdx`)

সেই ক্যাটাগরির `_meta.json` ফাইলে আপনার টপিক যুক্ত করুন:

```json
{
    "state-management": "State Management"
}
```

উদাহরণ:

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
=======
### 🧠 লেখার সময় মাথায় রাখবেন

✅ নিজে বোঝেন এমন বিষয় লিখবেন
✅ ব্যাখ্যা দিয়ে লিখবেন যেন কেউ নতুন শেখার সময় না হারিয়ে ফেলে
✅ কোড উদাহরণ দিন, প্রয়োজন হলে কমেন্ট করে বুঝিয়ে দিন
✅ গঠনমূলক, বন্ধুত্বপূর্ণ টোনে লিখুন

### ফাইল রেডি? এখন PR তৈরি করুন

```bash
git add .
git commit -m "docs: State Management ডকুমেন্টেশন যোগ করা হয়েছে"
git push origin feature/your-topic-name
```

**এরপর GitHub-এ গিয়ে একটা Pull Request তৈরি করুন।**

### 🎖️ Contributor? আপনার নামও থাকবে সাইটে!

আমাদের হোমপেজে একটি Contributor Wall আছে।
যারা কন্ট্রিবিউট করছেন, তাদের ছবিসহ নাম সেখানে দেখা যাবে।
আপনিও থাকতে পারেন সেখানেই! 🌟

### 😕 সমস্যা হলে?

Issue খুলুন

অথবা সরাসরি ইমেইল করুন: devripon.io@gmail.com


