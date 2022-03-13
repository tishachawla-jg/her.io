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

    if (message.includes('one')) {
      speech.text = "Teenagers have a busy schedule, and healthy meals might not often be a part of their to-do list. This diet plan includes simple, healthy foods that you can get them to eat despite their packed routines. This simple plan caters to the needs of vegans and vegetarians as well.Natural protein foods — red meat, pulses, cereals, green vegetables, and fish.Calcium-rich foods — soya beans, tofu, nuts, milk products,Iron-rich foods — beans, poultry, seafood, dark green leafy vegetables, peas, iron-fortified foods,Vitamin D rich foods — breakfast cereals, oily fishes, and margarine,Vitamin C rich foods — lemon, grapefruit, potatoes, tomatoes, and oranges,Folate-rich foods — green vegetables, brown rice, fortified bread and breakfast cereals"
    }
    if (message.includes('teenagers')) {
        speech.text = "Teenagers have a busy schedule, and healthy meals might not often be a part of their to-do list. This diet plan includes simple, healthy foods that you can get them to eat despite their packed routines. This simple plan caters to the needs of vegans and vegetarians as well.Natural protein foods — red meat, pulses, cereals, green vegetables, and fish.Calcium-rich foods — soya beans, tofu, nuts, milk products,Iron-rich foods — beans, poultry, seafood, dark green leafy vegetables, peas, iron-fortified foods,Vitamin D rich foods — breakfast cereals, oily fishes, and margarine,Vitamin C rich foods — lemon, grapefruit, potatoes, tomatoes, and oranges,Folate-rich foods — green vegetables, brown rice, fortified bread and breakfast cereals"
      }
      if (message.includes('students')) {
        speech.text = "Teenagers have a busy schedule, and healthy meals might not often be a part of their to-do list. This diet plan includes simple, healthy foods that you can get them to eat despite their packed routines. This simple plan caters to the needs of vegans and vegetarians as well.Natural protein foods — red meat, pulses, cereals, green vegetables, and fish.Calcium-rich foods — soya beans, tofu, nuts, milk products,Iron-rich foods — beans, poultry, seafood, dark green leafy vegetables, peas, iron-fortified foods,Vitamin D rich foods — breakfast cereals, oily fishes, and margarine,Vitamin C rich foods — lemon, grapefruit, potatoes, tomatoes, and oranges,Folate-rich foods — green vegetables, brown rice, fortified bread and breakfast cereals"
      }
    if (message.includes('Blood Pressure')) {
        speech.text = "Eat more fruits, vegetables, and low-fat dairy foods. Cut back on foods that are high in saturated fat, cholesterol, and trans fats. Eat more whole-grain foods, fish, poultry, and nuts,Limit sodium, sweets, sugary drinks, and red meats.Drink low-fat or skim dairy products any time you would normally use full-fat or cream. Limit meat to 6 ounces a day. Make some meals vegetarian. Add more vegetables and dry beans to your diet. Instead of snacking on chips or sweets, eat unsalted pretzels or nuts, raisins, low-fat and fat-free yogurt, frozen yogurt, unsalted plain popcorn with no butter, and raw vegetables.";
      }
      if (message.includes('BP')) {
        speech.text = "Eat more fruits, vegetables, and low-fat dairy foods. Cut back on foods that are high in saturated fat, cholesterol, and trans fats. Eat more whole-grain foods, fish, poultry, and nuts,Limit sodium, sweets, sugary drinks, and red meats.Drink low-fat or skim dairy products any time you would normally use full-fat or cream. Limit meat to 6 ounces a day. Make some meals vegetarian. Add more vegetables and dry beans to your diet. Instead of snacking on chips or sweets, eat unsalted pretzels or nuts, raisins, low-fat and fat-free yogurt, frozen yogurt, unsalted plain popcorn with no butter, and raw vegetables.";
      }
      if (message.includes('two')) {
        speech.text = "Eat more fruits, vegetables, and low-fat dairy foods. Cut back on foods that are high in saturated fat, cholesterol, and trans fats. Eat more whole-grain foods, fish, poultry, and nuts,Limit sodium, sweets, sugary drinks, and red meats.Drink low-fat or skim dairy products any time you would normally use full-fat or cream. Limit meat to 6 ounces a day. Make some meals vegetarian. Add more vegetables and dry beans to your diet. Instead of snacking on chips or sweets, eat unsalted pretzels or nuts, raisins, low-fat and fat-free yogurt, frozen yogurt, unsalted plain popcorn with no butter, and raw vegetables.";
      }
      if (message.includes('three')) {
        speech.text = "plenty of fruit and vegetables — aim for at least 5 portions of vegetables and 2 portions of fruit a day.some bread, rice, potatoes, pasta and other starchy foods — choose wholegrain varieties if you can.some milk and dairy foods-some meat, fish, eggs, beans and other non-dairy sources of protein — try to eat at least 2 portions of fish a week, including a portion of oily fish. just a small amount of foods and drinks that are high in fat or sugar";
      }
      if (message.includes('above60')) {
        speech.text = "plenty of fruit and vegetables — aim for at least 5 portions of vegetables and 2 portions of fruit a day.some bread, rice, potatoes, pasta and other starchy foods — choose wholegrain varieties if you can.some milk and dairy foods-some meat, fish, eggs, beans and other non-dairy sources of protein — try to eat at least 2 portions of fish a week, including a portion of oily fish. just a small amount of foods and drinks that are high in fat or sugar";
      }
      if (message.includes('aged')) {
        speech.text = "plenty of fruit and vegetables — aim for at least 5 portions of vegetables and 2 portions of fruit a day.some bread, rice, potatoes, pasta and other starchy foods — choose wholegrain varieties if you can.some milk and dairy foods-some meat, fish, eggs, beans and other non-dairy sources of protein — try to eat at least 2 portions of fish a week, including a portion of oily fish. just a small amount of foods and drinks that are high in fat or sugar";
      }
      if (message.includes('Diabetes')) {
        speech.text = "Enjoy having regular meals with proper portion sizes. Your healthcare professional can help you learn to make healthy food choices and proper portion sizes.Eat a variety of nutrient-rich foods in each meal, including healthy fats, lean meats or proteins, whole grains and low-fat dairy in appropriate portion sizes. Choose fiber-rich foods, such as fruits, vegetables and whole grains (bran cereals, whole wheat pasta, brown rice) as often as possible.Try alternatives to meat, such as lentils, beans or tofu. Choose calorie-free liquids, such as unsweetened tea, coffee or water. Choose sugar substitutes.Choose lower-salt options.";
      }
      if (message.includes('four')) {
        speech.text = "Enjoy having regular meals with proper portion sizes. Your healthcare professional can help you learn to make healthy food choices and proper portion sizes.Eat a variety of nutrient-rich foods in each meal, including healthy fats, lean meats or proteins, whole grains and low-fat dairy in appropriate portion sizes. Choose fiber-rich foods, such as fruits, vegetables and whole grains (bran cereals, whole wheat pasta, brown rice) as often as possible.Try alternatives to meat, such as lentils, beans or tofu. Choose calorie-free liquids, such as unsweetened tea, coffee or water. Choose sugar substitutes.Choose lower-salt options.";
      }
      if (message.includes('Pregnanacy')) {
        speech.text = "A healthy diet is high in vegetables (five serves daily), fruit (two serves per day), nuts, seeds, fish (up to three servings per week) and other sources of omega-3 foods such as flax or chia seeds, low-fat dairy food, proteins such as legumes and eggs, and a variety of wholegrains such as rice (brown, basmati, doongara), traditional rolled oats, buckwheat flour, wholegrain breads (rye, essene, spelt, kamut), wholemeal pasta, couscous, millet or amaranth. Lean meat (red meat or chicken) is an important source of iron and protein, especially for women with heavy periods. Avoid saturated fats such as butter, cream, bacon and potato chips; limit salt and caffeine. Drink more water and herbal teas such as chamomile.";
      }
      if (message.includes('five')) {
        speech.text = "A healthy diet is high in vegetables (five serves daily), fruit (two serves per day), nuts, seeds, fish (up to three servings per week) and other sources of omega-3 foods such as flax or chia seeds, low-fat dairy food, proteins such as legumes and eggs, and a variety of wholegrains such as rice (brown, basmati, doongara), traditional rolled oats, buckwheat flour, wholegrain breads (rye, essene, spelt, kamut), wholemeal pasta, couscous, millet or amaranth. Lean meat (red meat or chicken) is an important source of iron and protein, especially for women with heavy periods. Avoid saturated fats such as butter, cream, bacon and potato chips; limit salt and caffeine. Drink more water and herbal teas such as chamomile.";
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