  
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

    if (message.includes('India')) {
      speech.text = "It is calm and sunny here.";
    }
    if (message.includes('excercise')) {
        speech.text = "During lighter menstrual days, try moderate-intensity aerobic exercises like walking or light jogging. This type of physical activity can reduce bloating (extra water weight) and the pain of cramping. Aerobic exercise helps your blood circulation and the release of “feel-good hormones” called endorphins (en DORF ins).";
      }
      if (message.includes('problem')) {
        speech.text = "See a doctor immediately if you:Bleed heavily, soaking through one pad or tampon every hour or two,Experience changes to your bleeding pattern,Make an appointment to see a doctor if you:,Are older than 25 and haven't had cramps before,Get more severe cramping than usual,Have symptoms that Interfere with work or other tasks";
      }
      if (message.includes('treat')) {
        speech.text = "Taking pain medication such as ibuprofen or paracetamol may help to relieve menstrual cramps and pain. Using a heating pad may also help.";
      }
      if (message.includes('treatment')) {
        speech.text = "Taking pain medication such as ibuprofen or paracetamol may help to relieve menstrual cramps and pain. Using a heating pad may also help.";
      }
      if (message.includes('relief')) {
        speech.text = "Taking pain medication such as ibuprofen or paracetamol may help to relieve menstrual cramps and pain. Using a heating pad may also help.";
      }
      if (message.includes('causes')) {
        speech.text = "Menstrual cramps can have causes that aren't due to underlying disease. Examples include normal periods, heavy periods, wind or constipation.";
      }
      if (message.includes('cramps')) {
        speech.text = "Menstrual cramps can have causes that aren't due to underlying disease. Examples include normal periods, heavy periods, wind or constipation.";
      }
      if (message.includes('workout')) {
        speech.text = "During lighter menstrual days, try moderate-intensity aerobic exercises like walking or light jogging. This type of physical activity can reduce bloating (extra water weight) and the pain of cramping. Aerobic exercise helps your blood circulation and the release of “feel-good hormones” called endorphins (en DORF ins).";
      }
      
    if (message.includes('what')) {
        speech.text = "Menstruation, or period, is normal vaginal bleeding that occurs as part of a woman's monthly cycle. Every month, your body prepares for pregnancy. If no pregnancy occurs, the uterus, or womb, sheds its lining. The menstrual blood is partly blood and partly tissue from inside the uterus.";
      }
      
    if (message.includes('periods')) {
        speech.text = "Menstruation, or period, is normal vaginal bleeding that occurs as part of a woman's monthly cycle. Every month, your body prepares for pregnancy. If no pregnancy occurs, the uterus, or womb, sheds its lining. The menstrual blood is partly blood and partly tissue from inside the uterus.";
      }
    
      if (message.includes('down')) {
        speech.text = "Menstruation, or period, is normal vaginal bleeding that occurs as part of a woman's monthly cycle. Every month, your body prepares for pregnancy. If no pregnancy occurs, the uterus, or womb, sheds its lining. The menstrual blood is partly blood and partly tissue from inside the uterus.";
      }
      
    if (message.includes('define')) {
        speech.text = "Menstruation, or period, is normal vaginal bleeding that occurs as part of a woman's monthly cycle. Every month, your body prepares for pregnancy. If no pregnancy occurs, the uterus, or womb, sheds its lining. The menstrual blood is partly blood and partly tissue from inside the uterus.";
      }
      if (message.includes('menstruation')) {
        speech.text = "Menstruation, or period, is normal vaginal bleeding that occurs as part of a woman's monthly cycle. Every month, your body prepares for pregnancy. If no pregnancy occurs, the uterus, or womb, sheds its lining. The menstrual blood is partly blood and partly tissue from inside the uterus.";
      }
      if (message.includes('feel')) {
        speech.text = "During PMS and your period, expect to feel everything from crabbiness and anger to feeling more anxious or down than normal. You can't avoid the mood swings that come with your period, but it does help to get good sleep, stay active, and steer clear of caffeine and unhealthy foods to keep the lows from feeling too low.";
      }
      if (message.includes('tired')) {
        speech.text = "During PMS and your period, expect to feel everything from crabbiness and anger to feeling more anxious or down than normal. You can't avoid the mood swings that come with your period, but it does help to get good sleep, stay active, and steer clear of caffeine and unhealthy foods to keep the lows from feeling too low.";
      }
      if (message.includes('week')) {
        speech.text = "During PMS and your period, expect to feel everything from crabbiness and anger to feeling more anxious or down than normal. You can't avoid the mood swings that come with your period, but it does help to get good sleep, stay active, and steer clear of caffeine and unhealthy foods to keep the lows from feeling too low.";
      }
      if (message.includes('boys')) {
        speech.text = "Boys do not have periods as they do not have a uterus and do not ovulate. It means there is no uterine lining or unfertilized eggs that need to be sent out of the body.";
      }
      if (message.includes('happens')) {
        speech.text = "Menstruation is a woman's monthly bleeding, often called your “period.” When you menstruate, your body discards the monthly buildup of the lining of your uterus (womb). Menstrual blood and tissue flow from your uterus through the small opening in your cervix and pass out of your body through your vagina.";
      }
      if (message.includes('function')) {
        speech.text = "Menstruation is a woman's monthly bleeding, often called your “period.” When you menstruate, your body discards the monthly buildup of the lining of your uterus (womb). Menstrual blood and tissue flow from your uterus through the small opening in your cervix and pass out of your body through your vagina.";
      }
      if (message.includes('happening')) {
        speech.text = "Menstruation is a woman's monthly bleeding, often called your “period.” When you menstruate, your body discards the monthly buildup of the lining of your uterus (womb). Menstrual blood and tissue flow from your uterus through the small opening in your cervix and pass out of your body through your vagina.";
      }
      if (message.includes('bleeding')) {
        speech.text = "Menstruation is a woman's monthly bleeding, often called your “period.” When you menstruate, your body discards the monthly buildup of the lining of your uterus (womb). Menstrual blood and tissue flow from your uterus through the small opening in your cervix and pass out of your body through your vagina.";
      }
      if (message.includes('food')) {
        speech.text = "Salt. Consuming lots of salt leads to water retention, which can result in bloating. ,Sugar,Coffee,Alcohol,Spicy foods,Red meat,Foods you don't tolerate well.";
      }
      if (message.includes('eat')) {
        speech.text = "Salt. Consuming lots of salt leads to water retention, which can result in bloating. ,Sugar,Coffee,Alcohol,Spicy foods,Red meat,Foods you don't tolerate well.";
      }
      if (message.includes('salt')) {
        speech.text = "Salt. Consuming lots of salt leads to water retention, which can result in bloating. ,Sugar,Coffee,Alcohol,Spicy foods,Red meat,Foods you don't tolerate well.";
      }
      if (message.includes('spicy')) {
        speech.text = "Salt. Consuming lots of salt leads to water retention, which can result in bloating. ,Sugar,Coffee,Alcohol,Spicy foods,Red meat,Foods you don't tolerate well.";
      }
      if (message.includes('phase')) {
        speech.text = "The menses phase: This phase, which typically lasts from day one to day five, is the time when the lining of the uterus is actually shed out through the vagina if pregnancy has not occurred. Most women bleed for three to five days, but a period lasting only two days to as many as seven days is still considered normal.";
      }
      if (message.includes('days')) {
        speech.text = 
        "The menses phase: This phase, which typically lasts from day one to day five, is the time when the lining of the uterus is actually shed out through the vagina if pregnancy has not occurred. Most women bleed for three to five days, but a period lasting only two days to as many as seven days is still considered normal.";
      }
      if (message.includes('days')) {
        speech.text = "The menses phase: This phase, which typically lasts from day one to day five, is the time when the lining of the uterus is actually shed out through the vagina if pregnancy has not occurred. Most women bleed for three to five days, but a period lasting only two days to as many as seven days is still considered normal.";
      }
      if (message.includes('pregnant')) {
        speech.text = "Menstruation only occurs when a person is not pregnant. Although it is possible for women to experience some bleeding during pregnancy, this will not be due to their menstrual cycle. Some women also do not have any periods while breast-feeding. However, they may still begin to ovulate again soon after giving birth.";
      }
      if (message.includes('pregnancy')) {
        speech.text = "Menstruation only occurs when a person is not pregnant. Although it is possible for women to experience some bleeding during pregnancy, this will not be due to their menstrual cycle. Some women also do not have any periods while breast-feeding. However, they may still begin to ovulate again soon after giving birth.";
      }
      if (message.includes('baby')) {
        speech.text = "Menstruation only occurs when a person is not pregnant. Although it is possible for women to experience some bleeding during pregnancy, this will not be due to their menstrual cycle. Some women also do not have any periods while breast-feeding. However, they may still begin to ovulate again soon after giving birth.";
      }
      if (message.includes('symptoms')) {
        speech.text = "How do I know if I have PMS symptoms? PMS symptoms usually occur 5-7 days before a girl/woman's menstrual period. There are actually a total of 150 known symptoms of PMS. The most common symptoms include: mood swings, breast soreness, bloating, acne, cravings for certain foods, increased hunger and thirst, and fatigue";
      }
      if (message.includes('PMS')) {
        speech.text = "How do I know if I have PMS symptoms? PMS symptoms usually occur 5-7 days before a girl/woman's menstrual period. There are actually a total of 150 known symptoms of PMS. The most common symptoms include: mood swings, breast soreness, bloating, acne, cravings for certain foods, increased hunger and thirst, and fatigue";
      }
      if (message.includes('before')) {
        speech.text = "How do I know if I have PMS symptoms? PMS symptoms usually occur 5-7 days before a girl/woman's menstrual period. There are actually a total of 150 known symptoms of PMS. The most common symptoms include: mood swings, breast soreness, bloating, acne, cravings for certain foods, increased hunger and thirst, and fatigue";
      }
      if (message.includes('after')) {
        speech.text = "You do not have symptoms after periods";
      }
      if (message.includes('pain')) {
        speech.text = "Many women have painful periods, also called dysmenorrhea. The pain is most often menstrual cramps, which are a throbbing, cramping pain in your lower abdomen. You may also have other symptoms, such as lower back pain, nausea, diarrhea, and headaches. Period pain is not the same as premenstrual syndrome (PMS).";
      }
      if (message.includes('cramps')) {
        speech.text = "Many women have painful periods, also called dysmenorrhea. The pain is most often menstrual cramps, which are a throbbing, cramping pain in your lower abdomen. You may also have other symptoms, such as lower back pain, nausea, diarrhea, and headaches. Period pain is not the same as premenstrual syndrome (PMS).";
      }
      if (message.includes('hello')) {
        speech.text = "Hello";
      }
      if (message.includes('good')) {
        speech.text = "I am great";
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