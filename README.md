# Description
This repository contains a web development exercise in using a Rest API, HTML, CSS and JS. <br>
This repository contains a webpage built specifically to display data fetched from F24's instance API. I was tasked with:<br>

<ol>
  <li>Creating a form for submitting an issue, and a form for processing these tickets.</li>
  <li>Creating a webpage using HTML and CSS for displaying this information.</li>
  <li>Actually fetching data from this ticketing system to be used by my webpage.</li>
</ol>

Since the original class and API used for fetching this data is classified information, I copied the JSON object provided by the API into a separate file and wrote a function such that it's converted into a usable format for the appendTickets() function.
## Screenshots

<img width="70%" height="auto" alt="Screenshot of a webpage showing several card-like elements." src="https://github.com/user-attachments/assets/8396b61a-44d2-4bb2-a39f-2d04d310dfb6" />

**The webpage is responsive, and uses CSS variables for a faster workflow.**

<img width="35%" height="auto" alt="image" src="https://github.com/user-attachments/assets/1af53a0e-55b2-4cee-a37b-f25d068d602c" />
<img width="26%" height="auto" alt="image" src="https://github.com/user-attachments/assets/f48e699c-18b6-4eaf-9216-803cb1d95b59" />
<img width="20%" height="auto" alt="image" src="https://github.com/user-attachments/assets/a1f75373-3ee1-4b12-af45-1161f964571e" />

**The webpage switches to an alternative layout for devices whose screens are less than 600px in width.**

## Getting started
This example assumes you're using git bash and VS code. The most consistent way to open this locally is by using a VS code extension.<br>
To get started, clone the repository to your local machine:
   ````
    1. Open git bash.
    2. Navigate to the desired repo location.
    3. Clone the repository by running the following command:
   ````
   ```bash
   git clone https://github.com/alnk-n/Webutvikling-F24-Utplassering.git
   ```

Once the repository is cloned, open the folder containing the project in VS Code:
   ```bash
   cd /Webutvikling-F24-Utplassering
   code .
   ```

### 2. Open the project:
To run the project with Live Server, you need to install the extension in VS Code:
````
   (https://marketplace.visualstudio.com/items?itemName=yandeu.five-server)

    1. Open VS Code and click on the **Extensions** icon in the left sidebar (or press `Ctrl+Shift+X`).
    2. Search for **Live Server** by **Ritwick Dey**.
    3. Click **Install** on the Live Server extension.
````
### 3. Start the Live Server extension
Once the extension is installed, follow these steps to start the Live Server:
````
1. Open Index.html in VS Code.
2. Navigate to the bottom nav bar, and press "Go Live".
3. Your default browser should open with the local version of your site running.
````

Structure

    Index.html – main entry point to website

    main.css - styling sheet

    main.js - main JavaScript file

    javascript/ – JavaScript files (object.js + helpers.js)

Notes

No build steps required. The site runs locally by opening index.html.
