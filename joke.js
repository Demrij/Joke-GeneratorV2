const categoryTitles = {
    'Any': 'Random Joke',
    'Programming': 'Programming Joke',
    'Misc': 'Miscellaneous Joke',
    'Pun': 'Pun Joke',
    'Spooky': 'Spooky Joke',
    'Christmas': 'Christmas Joke'
  };
 
  async function getJoke(category = 'Any') {
    const setupElement = document.getElementById('setup');
    const punchlineElement = document.getElementById('punchline');
    const categoryTitleElement = document.getElementById('joke-category-title');
 
    categoryTitleElement.textContent = categoryTitles[category] || 'Joke';
    setupElement.textContent = 'Loading...';
    punchlineElement.textContent = '';
 
    try {
      const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`);
      const joke = await response.json();
      console.log(joke);
 
      setupElement.textContent = '';
      punchlineElement.textContent = '';
 
      if (joke.type === 'single') {
        await typeText(setupElement, joke.joke, 20);
        setupElement.classList.add('fade-in');
      } else if (joke.type === 'twopart') {
        await typeText(setupElement, joke.setup, 20);
        setupElement.classList.add('fade-in');
        await new Promise(resolve => setTimeout(resolve, 700));
        await typeText(punchlineElement, joke.delivery, 25);
      } else {
        setupElement.textContent = 'No Joke Found :(';  
      }
    } catch (error) {
      setupElement.textContent = 'Oops! Something went wrong :(';  
      punchlineElement.textContent = '';
      console.error('Error fetching joke:', error);
    }
  }
 
  async function typeText(element, text, speed) {
    for (let i = 0; i < text.length; i++) {
      element.textContent += text.charAt(i);
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  }