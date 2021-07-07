import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      // while requesting new breeds, delete the previous selected breeds and set the status as loading
      setBreedList([]);
      setStatus("loading");

      // fetch the breed list
      const response = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      const json = await response.json();

      // cache the breed list, if json is empty somehow, cache an empty list
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]); // everytime `animal` changes, get a new breed list
  return [breedList, status];
}
