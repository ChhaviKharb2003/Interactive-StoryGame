const storyText = document.getElementById('story-text');
const choicesDiv = document.getElementById('choices');

let currentStep = 'start';

const story = {
  start: {
    text: 'You wake up in a dark forest. Two paths lie ahead.',
    choices: [
      { text: 'Take the left path', next: 'leftPath' },
      { text: 'Take the right path', next: 'rightPath' }
    ]
  },
  leftPath: {
    text: 'You encounter a river. It’s too wide to jump.',
    choices: [
      { text: 'Try to swim across', next: 'drown' },
      { text: 'Follow the river', next: 'findCabin' }
    ]
  },
  rightPath: {
    text: 'You find a cave. A growl echoes inside.',
    choices: [
      { text: 'Enter the cave', next: 'bear' },
      { text: 'Run away', next: 'lost' }
    ]
  },
  drown: {
    text: 'The current is strong… You didn’t make it. GAME OVER.',
    choices: [{ text: 'Restart', next: 'start' }]
  },
  findCabin: {
    text: 'You find a cabin and a phone. You call for help and survive!',
    choices: [{ text: 'Play Again', next: 'start' }]
  },
  bear: {
    text: 'A bear attacks you. GAME OVER.',
    choices: [{ text: 'Restart', next: 'start' }]
  },
  lost: {
    text: 'You wander endlessly and get lost. GAME OVER.',
    choices: [{ text: 'Restart', next: 'start' }]
  }
};

function renderScene(step) {
  currentStep = step;
  const scene = story[step];
  storyText.textContent = scene.text;
  choicesDiv.innerHTML = '';

  scene.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice.text;
    btn.onclick = () => renderScene(choice.next);
    choicesDiv.appendChild(btn);
  });
}

renderScene(currentStep);
