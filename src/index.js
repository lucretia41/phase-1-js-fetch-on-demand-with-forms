const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event);
    // event.target.children[1].value;
    const input = document.querySelector
    ('input#searchById');

    console.log(input.value);

    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // LOG: (3) [{…}, {…}, {…}]
      });

    });

};


document.addEventListener('DOMContentLoaded', init);