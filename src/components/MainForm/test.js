async function requesting() {
  const pessoas = fetch('http://localhost:3000/receivers').then((data) =>
    data.json(),
  );
  return pessoas;
}

requesting().then((data) => {
  console.log(data);
});
