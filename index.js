document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form');
  const jokeList = document.getElementById('joke-list');
  let joke = '';

  function fetchJoke() {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(jokeData => {
        // debugger;
        joke = jokeData.joke;
      });
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    // console.log(event);
    // When we enter 'helen' in the input field, here's how we get the value
    const username = document.getElementById('name-input').value;
    // username = event.target.querySelector('p').querySelector('input').value;
    // debugger;
    if (username === '') return;
    fetchJoke();
    if (joke === '') return;
    // debugger;

    const newJokeLi = document.createElement('li');
    jokeList.appendChild(newJokeLi);

    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `;
  });
});
