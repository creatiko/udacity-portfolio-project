## Building a Portfolio Homepage

This site was made to put my newly acquired skills into practice by building the homepage for my portfolio site. This project will showcase my ability to create responsive, accessible, and professional webpages.

This site consists of two key sections: an **Intro Banner** (featuring my photo and a short blurb) and a **Latest Projects** section.
The site is fully responsive across devices and meet **A and AA accessibility standards**.

This project demonstrates my proficiency with CSS methodologies, preprocessors, accessibility practices, and advanced CSS techniques.

## Project Breakdown

2. **Folder Structure**:

    - As per BEM methodology, `scss` was used and it is in a folder containing `base`, `blocks`, and `utils` folders with a primary stylesheet that matches the name.
        - **Base**: Contains foundational styles such as resets, typography, and general element styles.
        - **Blocks**: Houses styles for individual components, each in its own file, following the BEM methodology.
        - **Utils**: Includes reusable helper styles like variables, mixins, and utility classes that support the design system.

3. **Intro Banner**:

    - **Content**:
        - Includes a background image for the banner.
        - Includes a bio section with:
            - A profile image.
            - A main heading.
            - A short paragraph describing myself.
    - **Responsive Behavior**:
        - The profile image and text content are aligned side by side on larger screens.
        - The profile image stacks above the text content on mobile.

4. **Latest Projects Section**:

    - **Content**:
        - Includes a heading.
        - Includes three project cards, each with:
            - An image.
            - A title.
            - A short description.
        - Includes a centered button below the cards that would link to a projects page.
    - **Design**:
        - The cards are equal in width and height.
        - Includes hover or tabbing transitions to project cards.

5. **Navigation Header**:

    - Includes a fixed navbar with projects, skills, resume, and contact links.
    - The navbar:
        - Sticks to the top of the page and shrink in height on scroll.
        - Displays links on desktop and optionally collapse into a mobile-friendly "burger" menu for smaller screens.

6. **Footer**:

    - Includes a footer at the bottom of the page with copyright information.

7. **Accessibility**:

Meets **A and AA accessibility standards**.

### Style Folder Structure

```javascript
root
├── index.html
├── scss
│     ├── base
│     │   ├── _resets.scss
│     │   └── base.scss
│     ├── blocks
│     │   ├── _footer.scss
│     │   ├── _header.scss
│     │   ├── _any_block_partial.scss
│     │   └── blocks.scss
│     └── utils
│         ├── _mixins.scss
│         ├── _variables.scss
│         └── utils.scss
```
