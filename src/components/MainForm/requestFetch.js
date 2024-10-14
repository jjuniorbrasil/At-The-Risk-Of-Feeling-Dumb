const ip = '192.168.0.39';
const url = `http://${ip}:3000/receivers/`;
export default async function request(email) {
  const data = await fetch(url + `${email}`, {
    method: 'GET',
  });
  const response = await data.json();
  // If you need to filter the data based on email, you can do it here
  return response; // or data.filter(item => item.email === email);
}
