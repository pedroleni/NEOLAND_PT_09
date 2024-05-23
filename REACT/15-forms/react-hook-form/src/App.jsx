import { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Aquí procesamos los datos del formulario
    console.log("holiii", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          {...register("email", {
            required: "El correo electronico es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Formato de correo electrónico no válido",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Form;
