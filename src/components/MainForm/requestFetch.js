const url = `api/receivers/`;
export default async function request(email) {
  const data = await fetch(url + `${email}`);
  const response = await data.json();
  // If you need to filter the data based on email, you can do it here
  return response; // or data.filter(item => item.email === email);
}
