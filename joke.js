const categorytitles = {
    'Any': 'Random Joke', 
     'Programming':'Programing joke',
    'Misc': "Miscellaneous Joke",
     'Pun': 'Pun Joke',
      'Spooky': 'Spooky Joke', 
      'Christmas': 'Christmas Joke'
};

async function getJoke (category = 'Any') {
    const setupELement = document.getElementById('setup');
    const punchlineElement = document.getElementById('punchline');
    const categorytitlesElement = document.getElementById('joke-category-title');
    

    categorytitlesElement.textContent = categorytitles[category] || 'Joke';

    

};