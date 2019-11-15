<script>
  export let href;
</script>

<style>
  a {
    color: #007199;
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

<a {href}>
  <slot />
</a>
