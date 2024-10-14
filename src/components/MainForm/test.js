async function requesting() {
  const pessoas = fetch('/receivers').then((data) => data.json());
  return pessoas;
}

requesting().then((data) => {
  console.log(data);
});
