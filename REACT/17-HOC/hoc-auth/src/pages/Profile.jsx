// eslint-disable-next-line react/prop-types
const Profile = ({ name = "Jhon", lastName = "Doe" }) => {
  console.log("🚀 ~ Profile ~ lastName:", lastName);
  console.log("🚀 ~ Profile ~ name:", name);
  return (
    <div>
      <h1>Perfil del usuario</h1>
      <p>Nombre: {name}</p>
      <p>Apellido: {lastName}</p>
      <p>Edad: 30 años</p>
      <p>Correo electrónico: john@example.com</p>
    </div>
  );
};

export default Profile;
