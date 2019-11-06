<script>
  export let project;
</script>

<style>
  li {
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
  }
</style>

<li>
  <article>
    <h4>{project.name}</h4>
    <div>
      <img src={project.screenshot} />
      <p>{project.description}</p>
      <div class="project_links">
        <a href={project.github}>Github</a>
        <a href={project.live}>Live Site</a>
      </div>
    </div>
  </article>
</li>
