const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I did not understand that.";

    if (message.includes('how are you')) {
      speech.text = "I am fine, thanks. How are you?";
    }

    if (message.includes('fine')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }

    if (message.includes('weather')) {
      speech.text = "Of course. Where are you currently?";
    }

    if (message.includes('follow')) {
      speech.text = "If you feel someone is following you, seek help from family or friends or call the police to let them know what's going on. Or simply drive to your local police station, and tell them you believe you're being followed. Give an officer the information on the car that's following you and let them take it from there..";
    }
    if (message.includes('following')) {
      speech.text = "If you feel someone is following you, seek help from family or friends or call the police to let them know what's going on. Or simply drive to your local police station, and tell them you believe you're being followed. Give an officer the information on the car that's following you and let them take it from there..";
    }
    if (message.includes('protection')) {
      speech.text = "Carry with yourself a pepper spray, and knife";
    }
    if (message.includes('equipments')) {
      speech.text = " Carry with yourself a pepper spray, and knife  ";
    }
    if (message.includes('car')) {
      speech.text = " Don’t give lift to strangers and don’t stop your car for strangers, especially at night";
    }
    if (message.includes('drive')) {
      speech.text = " Don’t give lift to strangers and don’t stop your car for strangers, especially at night";
    }
    if (message.includes('areas')) {
      speech.text = "Use your knees to hit hard between the legs of the attacker,using your fingers to poke hard in the eyes, hitting front part of the neck on the Adams apple will leave him in a shock,punching in the stomach will leave the attacker breathless & unable to chase you,Hitting hard in the chest area";
    }
    if (message.includes('attack')) {
      speech.text = "Use your knees to hit hard between the legs of the attacker,using your fingers to poke hard in the eyes,hitting front part of the neck on the Adams apple will leave him in a shock,punching in the stomach will leave the attacker breathless & unable to chase you,Hitting hard in the chest area";
    }
    if (message.includes('contact')) {
      speech.text = " Police Control Room(All Over India)-100 (in case your phone can’t dial this add area code before 100 for example for Delhi 011 100";
    }
    if (message.includes('number')) {
      speech.text = " Police Control Room(All Over India)-100 (in case your phone can’t dial this add area code before 100 for example for Delhi 011 100";
    }
    if (message.includes('teasing')) {
      speech.text = "  Respond with a stern voice,threaten to take a picture which might scare them away,if the eve teasing still persists then immediately raise your voice to gather a crowd.";
    }
    if (message.includes('unsafe')) {
      speech.text = "  If things seem even a slight unsafe get out of that place immediately.";
    }
if (message.includes('defend')) {
     
  speech.text = "use keys, bottle even your purse to inflict damage to your attacker ,if you have pepper spray use it";
}
if (message.includes('call')) {
  speech.text = " Police Control Room(All Over India)-100 (in case your phone can’t dial this add area code before 100 for example for Delhi 011 100";
}
speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});