Building an Airbnb UI Clone with Next.js and React
🎯 Challenge
A product design studio has just won a contract to rebuild the front end of a vacation rental platform. Before writing any custom design system, they want to validate the component architecture by cloning a well-known, production-grade interface: Airbnb. This way, the team learns what components are needed, what data each one requires, and how they connect across different views.

You have been brought in as a junior front-end engineer. Your job is to implement three views of the Airbnb experience in Next.js using React components: the Home page, the Catalog (search results) page, and a Room detail page. You will use vision prompting to convert screenshots into component specifications, and then implement those specs.

The studio's tech lead has sent you a short brief:

Product brief
The implementation must be mobile-first. Design for a 375px viewport first; adjust for desktop at 768px and above.
Before writing any code, create a context.md file at the root of your repository. This file should describe the interface you are going to build in your own words: what each page contains, what the main components are, who the user is, and what they are trying to accomplish. Think of it as the mini-brief you would write before starting a real project.
Use vision prompting — attach a screenshot of the original Airbnb interface to your AI coding agent to generate a component specification, then use that spec to guide your implementation.
Keep components small and focused. One responsibility per component.
All navigation between the three pages must work without full page reloads.
This is exactly the kind of task you will encounter in your first job: a real interface to replicate, a real framework to use, and the responsibility to figure out how to structure it yourself. Start from what you can see, reason about what each piece does, and build it component by component.

 IMPORTANT: Do not use any pre-built UI component library (no shadcn, no MUI, no Ant Design, no Chakra). Use Tailwind utility classes and your own components only.
 Never use a plain <a href="..."> tag for internal navigation in a Next.js app.

 Note: The optional challenges (real map, functional date picker) are not part of the base evaluation. They are there for students who finish early and want to go further.