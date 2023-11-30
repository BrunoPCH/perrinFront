import { useEffect, useState } from "react";
import "../styles/InputComponent.css";
import validationIcon from "../assets/validationIcon.svg";

const RegisterDog = () => {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  // const [breed, setBreed] = useState(null);
  const [vaccinated, setVaccinated] = useState(true);
  const [is_unfriendly_dog, setis_unfriendly_dog] = useState(false);
  const [weight, setWeight] = useState(null);
  const [has_allergies, sethas_allergies] = useState(null);
  const [allergies, setAllergies] = useState("");
  const [notes, setNotes] = useState("");

  // Show tooltips
  const [show, setShow] = useState(false);
  const [showNameTool, setShowNameTool] = useState(false);

  function handleForm(event) {
    event.preventDefault();
    let dogData = {
      name: name,
      age: age,
      breed: selectedBreed,
      vaccinated: vaccinated,
      is_unfriendly_dog: is_unfriendly_dog,
      weight: weight,
      has_allergies: has_allergies,
      allergies: allergies,
      notes: notes,
    };
    console.log("Clicked");
    fetch("https://perrin-api2.onrender.com/dog", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(dogData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("MESTIZO");
  const [idBreeds, setIdBreeds] = useState(null);

  function handleChange(event) {
    setSelectedBreed(event.target.value);
  }

  useEffect(() => {
    // invocar api dogbreeds
    // get para API dogbreeds
    fetch("https://perrin-api2.onrender.com/dog-breeds")
      .then((response) => response.json())

      .then((data) => setBreeds(data.map((breed) => breed)));
  }, []);

  useEffect(() => {
    fetch("https://perrin-api2.onrender.com/dog-breeds")
      .then((response) => response.json())
      .then((data) => setIdBreeds(data.map((breed) => breed.id)));
  }, [setBreeds]);

  return (
    <div style={{ padding: "0 1rem" }}>
      {/* 
  
  notes: Joi.string().max(200).optional(), */}

      <h1>Agregar Perrin</h1>
      <h2>Llena los campos correctamente</h2>
      <form onSubmit={handleForm} className="formulario_registro_perro">
        <div>
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
                onSelect={() => setShowNameTool(true)}
                onChange={(e) => setName(e.target.value)}
              />
              <img
                className="validation-icon"
                src={validationIcon}
                alt="Icono de validación de campo"
              />
            </div>
            <div className="toolTip-container">
              {showNameTool ? (
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
          <div className="form-item">
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
          <div className="form-item">
            <label htmlFor="vaccinated">Vacunación vigente*</label>
            <div className="form-item-input-container">
              <select
                className="input-selector"
                id="vaccinated"
                name="vaccinated"
                required
                onSelect={() => setShow(true)}
                onChange={(e) => setVaccinated(e.target.value)}
                defaultValue={true}
              >
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </select>
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
                  Contesta Si o No
                </p>
              ) : (
                <p
                  className="small"
                  style={{ opacity: "0", transition: "all .5s ease-in-out" }}
                ></p>
              )}
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="breed">Raza*</label>
            <div className="form-item-input-container">
              <select
                className="input-selector"
                id="breed"
                name="breed"
                required
                // onSelect={() => setShow(true)}
                onChange={handleChange}
              >
                {breeds.map((breed) => (
                  <option value={breed.breed} key={breed.id}>
                    {breed.breed}
                  </option>
                ))}
              </select>
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
                  Selecciona la raza segun la FCI
                </p>
              ) : (
                <p
                  className="small"
                  style={{ opacity: "0", transition: "all .5s ease-in-out" }}
                ></p>
              )}
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="is_unfriendly_dog">¿Es Amigable?*</label>
            <div className="form-item-input-container">
              <select
                className="input-selector"
                id="is_unfriendly_dog"
                name="is_unfriendly_dog"
                required
                onSelect={() => setShow(true)}
                onChange={(e) => setis_unfriendly_dog(e.target.value)}
                defaultValue={false}
              >
                <option value={false}>Si</option>
                <option value={true}>No</option>
              </select>
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
                  Contesta Si o No
                </p>
              ) : (
                <p
                  className="small"
                  style={{ opacity: "0", transition: "all .5s ease-in-out" }}
                ></p>
              )}
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="weight">Peso (opcional)</label>
            <div className="form-item-input-container">
              <input
                className="form-item_input"
                type="number"
                id="weight"
                name="weight"
                placeholder="1"
                required
                minLength="1"
                maxLength="70"
                autoComplete="false"
                onSelect={() => setShow(true)}
                onChange={(e) => setWeight(e.target.value)}
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
                  Kilos
                </p>
              ) : (
                <p
                  className="small"
                  style={{ opacity: "0", transition: "all .5s ease-in-out" }}
                ></p>
              )}
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="has_allergies">¿Tiene alergias?* </label>
            <div className="form-item-input-container">
              <select
                className="input-selector"
                id="has_allergies"
                name="has_allergies"
                required
                onSelect={() => setShow(true)}
                onChange={(e) => sethas_allergies(e.target.value)}
                defaultValue={false}
              >
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </select>
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
                  Contesta Si o No
                </p>
              ) : (
                <p
                  className="small"
                  style={{ opacity: "0", transition: "all .5s ease-in-out" }}
                ></p>
              )}
            </div>
          </div>
          <div className={has_allergies ? "creciendo" : "form-item-hide"}>
            <label htmlFor="allergies">¿Cúales son?</label>
            <div className="form-item-input-container">
              <input
                className="form-item_input"
                type="text"
                id="allergies"
                name="allergies"
                placeholder="Escríbe las Las alergías"
                maxLength="200"
                autoComplete="false"
                onSelect={() => setShow(true)}
                onChange={(e) => setAllergies(e.target.value)}
              />
              <img
                className="validation-icon"
                src={validationIcon}
                alt="Icono de validación de campo"
              />
            </div>
            <div className="toolTip-container">
              {showNameTool ? (
                <p
                  className="small"
                  style={{
                    opacity: "1",
                    transition: "all .5s ease-in-out",
                  }}
                >
                  No debe de llevar espacios
                </p>
              ) : (
                <p
                  className="small"
                  style={{
                    opacity: "0",
                    transition: "all .5s ease-in-out",
                  }}
                ></p>
              )}
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="notes">Notas (opcional)</label>
            <div className="form-item-input-container">
              <input
                className="form-item_input"
                type="text"
                id="notes"
                name="notes"
                placeholder="Algun detalle sobre el perro"
                maxLength="200"
                autoComplete="false"
                onSelect={() => setShowNameTool(true)}
                onChange={(e) => setNotes(e.target.value)}
              />
              <img
                className="validation-icon"
                src={validationIcon}
                alt="Icono de validación de campo"
              />
            </div>
            <div className="toolTip-container">
              {showNameTool ? (
                <p
                  className="small"
                  style={{ opacity: "1", transition: "all .5s ease-in-out" }}
                >
                  Que sea breve
                </p>
              ) : (
                <p
                  className="small"
                  style={{ opacity: "0", transition: "all .5s ease-in-out" }}
                ></p>
              )}
            </div>
          </div>
        </div>

        <button type="submit">Crear perrin</button>
      </form>
    </div>
  );
};

export default RegisterDog;
