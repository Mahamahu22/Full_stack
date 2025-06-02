1. Server-Side Rendering (SSR)

HTML is rendered on the server before being sent to the browser.

Improves SEO and initial load time.


Example: Using Next.js with a Node.js backend to render React components on the server.


---

2. Client-Side Rendering (CSR)

Rendering happens in the browser using JavaScript.

The server sends a minimal HTML page and JavaScript handles the rest.


Example: A React app created with Create React App (CRA), fetching data from an Express API and rendering UI in the browser.


---

3. Single-Page Application (SPA)

Loads a single HTML file and updates content dynamically without full page reloads.


Example: A MERN (MongoDB, Express, React, Node.js) stack app where routes like /dashboard and /profile are handled in the browser without reloading the page.


---

4. SQL vs NoSQL

Feature	SQL (Relational)	NoSQL (Non-relational)

Structure	Tables	Collections with documents
Schema	Fixed schema	Dynamic schema
Query Language	SQL	JSON-like queries (MongoDB)
Example	MySQL, PostgreSQL	MongoDB
Use Case	Structured data	Unstructured, scalable data



---

5. History API

Allows changing the browser URL without reloading the page.

Commonly used in SPAs for navigation.


Example (React):

navigate("/profile");