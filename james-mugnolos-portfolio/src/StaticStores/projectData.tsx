interface IProjectDataLayout {
  id: number;
  name: string;
  description: string;
  githubLink: string;
  deployLink: string | null;
}
export const ProjectData: IProjectDataLayout[] = [
  {
    id: 1,
    name: "CI/CD Calculator (school Project)",
    description:
      "Using Java to write the app, Gradle to run tests and build the app, Docker to deploy the app in a container, and GitLab Pipelines to run the Docker and Gradle Commands, I created a simple calculator app that deployed to a container for every push to the repository that had no errors. Click the link below and view the ReadMe.txt file to find out more.",
    githubLink: "https://github.com/JamesMugnolo/SimpleCalculator",
    deployLink: null,
  },
  {
    id: 2,
    name: "Todo List",
    description:
      "This is a simple full stack web app to monitor a user's todos. It has an angular frontend, a spring boot backend and PostgreSQL database. This app is also fully containerized through docker and uses Cloudflare tunnels to host the services through docker.",
    githubLink: "https://github.com/JamesMugnolo/todo-list",
    deployLink: "https://todos.jm-projects.com/",
  },
  {
    id: 3,
    name: "Portfolio",
    description:
      "This project is my portfolio which you are currently on! My portfolio is a static React and Typescript based website that's hosted through Netlify.",
    githubLink: "https://github.com/JamesMugnolo/Portfolio",
    deployLink: null,
  },
  {
    id: 4,
    name: "Nerd Cache Catalog",
    description:
      "NerdCache is a full stack web application that allows a user to manage their video game, book, and movie collections. The frontend uses React.js with MUI material library for some styling and Redux.js for ephemeral data storage. The backend uses Node.js to process restful API calls for getting and formatting data from external APIs as well as storing and modifying user and item data in a Postgres database.The website is orchestrated with docker containers and hosted through cloudflare.",
    githubLink: "https://github.com/JamesMugnolo/My-Catalog-Manager",
    deployLink: "https://nerdcashe.jm-projects.com/",
  },
];
