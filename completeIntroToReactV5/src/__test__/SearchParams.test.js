import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import pet, { ANIMALS, _breeds, _dogs } from "@frontendmasters/pet";
import SearchParams from "../SearchParams";

afterEach(cleanup);

test("SearchParams", async () => {
  const { container, getByTestId, getByText } = render(<SearchParams />);

  const animalDropdown = getByTestId("use-dropdown-animal");
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

  expect(pet.breeds).toHaveBeenCalled();
  const breedBropdown = getByTestId("use-dropdown-breed");
  expect(breedBropdown.children.length).toEqual(_breeds.length + 1);

  const searchResults = getByTestId("search-results");
  expect(searchResults.textContent).toEqual("No Pets Found");
  fireEvent(getByText("Submit"), new MouseEvent("click"));
  expect(pet.animals).toHaveBeenCalled();
  expect(searchResults.children.length).toEqual(_dogs.length);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="search-params"
    >
      <form>
        <label
          for="location"
        >
          Location
          <input
            id="location"
            placeholder="Location"
            value="Seattle, WA"
          />
        </label>
        <label
          for="use-dropdown-animal"
        >
          Animal
          <select
            data-testid="use-dropdown-animal"
            id="use-dropdown-animal"
          >
            <option />
            <option
              value="dog"
            >
              dog
            </option>
            <option
              value="cat"
            >
              cat
            </option>
            <option
              value="bird"
            >
              bird
            </option>
          </select>
        </label>
        <label
          for="use-dropdown-breed"
        >
          Breed
          <select
            data-testid="use-dropdown-breed"
            id="use-dropdown-breed"
          >
            <option />
            <option
              value="Bichon Frise"
            >
              Bichon Frise
            </option>
            <option
              value="Bolognese"
            >
              Bolognese
            </option>
            <option
              value="Bolonka"
            >
              Bolonka
            </option>
            <option
              value="Coton de Tulear"
            >
              Coton de Tulear
            </option>
            <option
              value="Havanese"
            >
              Havanese
            </option>
            <option
              value="Lowchen"
            >
              Lowchen
            </option>
            <option
              value="Maltese"
            >
              Maltese
            </option>
          </select>
        </label>
        <label
          for="location"
        >
          Theme
          <select>
            <option
              value="peru"
            >
              Peru
            </option>
            <option
              value="darkblue"
            >
              Dark Blue
            </option>
            <option
              value="chartreuse"
            >
              Chartreuse
            </option>
            <option
              value="mediumorchid"
            >
              Medium Orchid
            </option>
          </select>
        </label>
        <button
          style="background-color: green;"
        >
          Submit
        </button>
      </form>
      <div
        class="search"
        data-testid="search-results"
      >
        <a
          class="pet"
          href="/details/44461435"
        >
          <div
            class="image-container"
          >
            <img
              alt="Lee Lee & Lolo"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44461435/5/?bust=1555257141&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Lee Lee & Lolo
            </h1>
            <h2>
              Dog — Terrier — Seattle, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44461391"
        >
          <div
            class="image-container"
          >
            <img
              alt="Niko"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44461391/1/?bust=1555256631&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Niko
            </h1>
            <h2>
              Cat — Tabby — Seattle, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44461362"
        >
          <div
            class="image-container"
          >
            <img
              alt="DYLAN - Super friendly,sweet,quiet cuddler"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44461362/1/?bust=1555255095&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              DYLAN - Super friendly,sweet,quiet cuddler
            </h1>
            <h2>
              Dog — Australian Shepherd — Seattle, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460976"
        >
          <div
            class="image-container"
          >
            <img
              alt="Vinny"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460976/1/?bust=1555233068&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Vinny
            </h1>
            <h2>
              Dog — Chihuahua — Olalla, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460975"
        >
          <div
            class="image-container"
          >
            <img
              alt="Victoria"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460975/1/?bust=1555233067&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Victoria
            </h1>
            <h2>
              Dog — Chihuahua — Olalla, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460811"
        >
          <div
            class="image-container"
          >
            <img
              alt="Inez"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460811/1/?bust=1555234091&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Inez
            </h1>
            <h2>
              Dog — Mixed Breed — Lynnwood, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460812"
        >
          <div
            class="image-container"
          >
            <img
              alt="Savannah"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460812/1/?bust=1555234090&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Savannah
            </h1>
            <h2>
              Dog — Labrador Retriever — Lynnwood, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460810"
        >
          <div
            class="image-container"
          >
            <img
              alt="Blue Moon"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460810/1/?bust=1555234089&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Blue Moon
            </h1>
            <h2>
              Cat — Domestic Short Hair — Seattle, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460480"
        >
          <div
            class="image-container"
          >
            <img
              alt="Kirby"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460480/1/?bust=1555231061&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Kirby
            </h1>
            <h2>
              Cat — Tabby — Anacortes, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460366"
        >
          <div
            class="image-container"
          >
            <img
              alt="Chasee"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460366/1/?bust=1555250726&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Chasee
            </h1>
            <h2>
              Cat — Domestic Short Hair — Silverdale, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460363"
        >
          <div
            class="image-container"
          >
            <img
              alt="Kiev"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460363/1/?bust=1555250722&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Kiev
            </h1>
            <h2>
              Cat — Domestic Medium Hair — Silverdale, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460369"
        >
          <div
            class="image-container"
          >
            <img
              alt="Lady"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460369/1/?bust=1555250719&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Lady
            </h1>
            <h2>
              Dog — Hound — Silverdale, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460365"
        >
          <div
            class="image-container"
          >
            <img
              alt="Midge"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460365/1/?bust=1555250720&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Midge
            </h1>
            <h2>
              Cat — Domestic Short Hair — Silverdale, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460364"
        >
          <div
            class="image-container"
          >
            <img
              alt="Roxy"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460364/1/?bust=1555250718&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Roxy
            </h1>
            <h2>
              Dog — Chihuahua — Silverdale, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460370"
        >
          <div
            class="image-container"
          >
            <img
              alt="Mellow"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460370/1/?bust=1555250708&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Mellow
            </h1>
            <h2>
              Cat — Domestic Short Hair — Silverdale, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460373"
        >
          <div
            class="image-container"
          >
            <img
              alt="Tiger Lily"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460373/1/?bust=1555250716&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Tiger Lily
            </h1>
            <h2>
              Cat — Domestic Short Hair — Silverdale, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460374"
        >
          <div
            class="image-container"
          >
            <img
              alt="Tela"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460374/1/?bust=1555250723&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Tela
            </h1>
            <h2>
              Dog — Chihuahua — Silverdale, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460375"
        >
          <div
            class="image-container"
          >
            <img
              alt="Cooper"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460375/1/?bust=1555250714&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Cooper
            </h1>
            <h2>
              Dog — Terrier — Silverdale, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460371"
        >
          <div
            class="image-container"
          >
            <img
              alt="Cypher"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460371/1/?bust=1555250721&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Cypher
            </h1>
            <h2>
              Dog — Australian Cattle Dog / Blue Heeler — Silverdale, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/44460361"
        >
          <div
            class="image-container"
          >
            <img
              alt="Brooke"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44460361/1/?bust=1555250700&width=100"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Brooke
            </h1>
            <h2>
              Cat — Domestic Short Hair — Silverdale, WA
            </h2>
          </div>
        </a>
      </div>
    </div>
  `);
});
