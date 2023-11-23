import { useState } from "react";

import validationIcon from "../assets/validationIcon.svg";

const RegisterDog = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  // const [breed, setBreed] = useState("");
  // const [vaccinated, setVaccinated] = useState("");
  // const [unfriendly_dog, setUnfriendly_dog] = useState("");
  // const [weight, setWeights] = useState("");
  // const [has_allergies, setHas_allergies] = useState("");
  // const [allergies, setAllergies] = useState("");
  // const [notes, setNotes] = useState("");
  const [show, setShow] = useState(false);

  function handleForm(event) {
    event.preventDefault();
    let userData = {
      name: name,
      age: age,
      // breed: breed,
      // vaccinated: vaccinated,
      // unfriendly_dog: unfriendly_dog,
      // weight: weight,
      // has_allergies: has_allergies,
      // allergies: allergies,
      // notes: notes,
    };
    console.log("Clicked");
    fetch("https://perrin-api2.onrender.com/dog", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div style={{ padding: "0 1rem" }}>
      {/* 
  age: Joi.number().max(60).required(),
  breed: Joi.string().max(20).required(),
  vaccinated: Joi.boolean().required(),
  is_unfriendly_dog: Joi.boolean().required(),
  weight: Joi.number().min(1).max(70).optional(),
  has_allergies: Joi.boolean().required(),
  allergies: Joi.string().max(200).optional(),
  notes: Joi.string().max(200).optional(), */}

      <h1>Agregar Perrin</h1>
      <h2>Llena los campos correctamente</h2>
      <form onSubmit={handleForm} className="formulario_registro_perro">
        <div className="form-item">
          <label htmlFor="name">Nombre*</label>
          <div className="form-item-input-container">
            <input
              className="form-item_input"
              type="text"
              id="name"
              name="name"
              placeholder="Patotas"
              required
              //   pattern="/^(?=.{2,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z._]+(?<![_.])$/"
              maxLength="50"
              autoComplete="false"
              onSelect={() => setShow(true)}
              onChange={(e) => setName(e.target.value)}
            />
            <img
              className="validation-icon"
              src={validationIcon}
              alt="Icono de validación de campo"
            />
          </div>
          <div className="toolTip-container">
            {show ? (
              <p
                className="small"
                style={{ opacity: "1", transition: "all .5s ease-in-out" }}
              >
                No debe de llevar espacios
              </p>
            ) : (
              <p
                className="small"
                style={{ opacity: "0", transition: "all .5s ease-in-out" }}
              ></p>
            )}
          </div>
        </div>
        <div>
          <div className="form-item" style={{ width: "48%" }}>
            <label htmlFor="age">Edad*</label>
            <div className="form-item-input-container">
              <input
                className="form-item_input"
                type="number"
                id="age"
                name="age"
                placeholder="1"
                required
                maxLength="60"
                autoComplete="false"
                onSelect={() => setShow(true)}
                onChange={(e) => setAge(e.target.value)}
              />
              <img
                className="validation-icon"
                src={validationIcon}
                alt="Icono de validación de campo"
              />
            </div>
            <div className="toolTip-container">
              {show ? (
                <p
                  className="small"
                  style={{ opacity: "1", transition: "all .5s ease-in-out" }}
                >
                  Años
                </p>
              ) : (
                <p
                  className="small"
                  style={{ opacity: "0", transition: "all .5s ease-in-out" }}
                ></p>
              )}
            </div>
          </div>
          {/* <div className="form-item" style={{ width: "48%" }}>
            <label htmlFor="vaccinated">Vacunación vigente</label>
            <div className="form-item-input-container">
              <select
                id="vaccinated"
                name="vaccinated"
                required
                onSelect={() => setShow(true)}
                onChange={(e) => setVaccinated(e.target.value)}
                defaultValue={true}
              >
                <option value={"True"}>Si</option>
                <option value={"False"}>No</option>
              </select>
            </div> */}

          {/* <fieldset>
              <input
                className="form-item_input"
                type="radio"
                id="vaccinated"
                name="vaccinated"
                required
                onSelect={() => setShow(true)}
                onChange={(e) => setAge(e.target.value)}
              />
              <img
                className="validation-icon"
                src={validationIcon}
                alt="Icono de validación de campo"
              />
            </fieldset> */}
        </div>
        <div className="toolTip-container">
          {show ? (
            <p
              className="small"
              style={{ opacity: "1", transition: "all .5s ease-in-out" }}
            >
              Años
            </p>
          ) : (
            <p
              className="small"
              style={{ opacity: "0", transition: "all .5s ease-in-out" }}
            ></p>
          )}
        </div>

        <button type="submit">Crear perrin</button>
      </form>
    </div>
  );
};

export default RegisterDog;
