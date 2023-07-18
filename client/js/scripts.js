const buttonCreate = document.getElementById('buttonCreate');
const createUserForm = document.getElementById('createUser');

const createUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:3000/api/users/create', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },  catch (error) {
        console.error('Error al crear usuario:', error);
        console.log(error); 
      }
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al crear usuario:', error);
  }
};

createUserForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = event.target.title.value;
  const name = event.target.name.value;
  const age = event.target.age.value;
  const username = event.target.username.value;
  const email = event.target.email.value;

  const userData = {
    title,
    name,
    age,
    username,
    email,
  };

  createUser(userData);
});