import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  // // create pet details
  // const pet_details = [
  //   { name: "Luna", animal: "Dog", breed: "Havanese" },
  //   { name: "Pepper", animal: "Bird", breed: "Cockatiel" },
  //   { name: "Sudo", animal: "Dog", breed: "Wheaten Terrier" },
  // ];

  // // initialise array to store pet components
  // const pet_components = pet_details.map((pet_detail) => (
  //   <Pet
  //     key="blah"
  //     name={pet_detail.name}
  //     animal={pet_detail.animal}
  //     breed={pet_detail.breed}
  //   ></Pet>
  // ));

  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
