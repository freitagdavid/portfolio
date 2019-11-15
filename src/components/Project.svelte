<script>
  export let project;
  import ProjectLink from "./ProjectLink.svelte";
</script>

<style>
  /* li {
    margin-top: 50px;
  }

  article {
    width: 100%;
    margin: 0 auto;
    border: solid black 1px;
    border-radius: 6px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-items: stretch;
  }

  h4 {
    width: 100%;
    text-align: center;
    border-bottom: black 1px solid;
  }

  article > div {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;
    height: 100%;
    padding: 10px;
  }

  img {
    width: 200px;
    height: auto;
    padding: 5px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  p {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
  }

  div > div {
    display: flex;
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    justify-content: space-around;
    align-self: flex-end;
  }

  a {
    border-radius: 7px;
    margin: auto;
    line-height: 30px;
    height: 30px;
    width: 45%;
    text-align: center;
    border: solid 1px #0070996b;
    text-decoration: none;
  }

  a:hover {
    color: #007199;
    background-color: var(--secondary-bg);
    border: solid 1px #007199;
  } */

  .project-container {
    margin-top: 50px;
  }

  article {
    display: grid;
    grid-template-columns: 10vw auto auto;
    grid-template-rows: auto auto auto;
    border: solid black 1px;
    border-radius: 6px;
  }

  .project-title {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 0;
    grid-row-end: 1;
    border-bottom: 1px solid black;
    text-align: center;
    width: 100%;
  }

  .project-description {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    padding-right: 15px;
  }

  .project-img {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
    align-self: center;
    justify-self: center;
    width: 9vw;
  }

  .project-links {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
  }

  .tech-list {
    margin-left: 15px;
    margin-top: 5px;
    list-style: square;
  }

  .tech-list-title {
    margin-top: 15px;
  }
</style>

<li class="project-container">
  <article>
    <h4 class="project-title">{project.name}</h4>
    <img class="project-img" src={project.screenshot} />
    <div class="project-description">
      <p>{project.description}</p>
      <p class="tech-list-title">Technologies used:</p>
      <ul class="tech-list">
        {#each project.technologies as tech}
          <li>{tech}</li>
        {/each}
      </ul>
    </div>
    <div class="project-links">
      <ProjectLink href={project.github}>Github</ProjectLink>
      <ProjectLink href={project.live}>Live Site</ProjectLink>
    </div>
  </article>
</li>
