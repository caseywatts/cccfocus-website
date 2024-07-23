<script>
  export let date;
  const dateObject = new Date(date);
</script>

<time class="inline" datetime={dateObject.toISOString()}>
  {dateObject.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
</time>
