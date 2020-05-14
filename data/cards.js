export default function getCards() {
  return cards;
}

export function getIndexedCards() {
  if ("indexedCards" in getIndexedCards) {
    return getIndexedCards.indexedCards;
  }

  getIndexedCards.indexedCards = {};
  cards.forEach((e) => (getIndexedCards.indexedCards[e.number] = e));
  return getIndexedCards.indexedCards;
}

const cards = [
  {
    number: 1,
    round: 1,
    prompt:
      "No one needs help when you arrive to your office hours (or open lab hours).",
    sample_answer:
      "Every 10 minutes I would check in with everyone and offer help. While I wait, I would grade (if possible) and review the current or next homework assignment.",
  },
  {
    number: 2,
    round: 1,
    prompt:
      "A student asks for help with their code, then goes on their phone while you are looking at the code",
    sample_answer:
      "I might take a few deep breaths and then say \"hey - I'm excited to help you, but going on your phone makes me feel like you don't appreciate my help.\"",
  },
  {
    number: 3,
    round: 1,
    prompt: "A student is being frustrating and rude when asking you for help",
    sample_answer:
      "I might take a few deep breaths and then say \"I'm sorry - it seems like you're feeling frustrated. I've been in a similar situation and felt frustrated. However, the way you asked the question didn't feel very respectful.\"",
  },
  {
    number: 4,
    round: 1,
    prompt: "Your office hours (or open lab hours) never have any students.",
    sample_answer:
      "I would email the class to encourage them to come to my tutoring hours and let the prof know that students haven’t been coming. I would ask a friend to sit in on my class to see how I might be more welcoming.",
  },
  {
    number: 5,
    round: 1,
    prompt:
      "A student compares their abilities to yours and is feeling inadequate.",
    sample_answer:
      "I would share with them times where I struggled and felt intimidated by others. I would assure them that I have learned a lot by teaching other people this content. And I would remind them that we are at different stages in our journeys.",
  },
  {
    number: 6,
    round: 1,
    prompt:
      "A student becomes overwhelmed and cries because their code isn't working.",
    sample_answer:
      "I would empathize and say that I have had similar experience. I would ask them if they want to take a break, talk about how they're feeling, or dive into debugging. If relevant, I would encourage them to get enough sleep because research suggests that staying up late to finish work is usually counterproductive.",
  },
  {
    number: 7,
    round: 1,
    prompt:
      "Students have very different levels of prior CS experience in your class.",
    sample_answer:
      "I would explain that some students have more experience than is required by the prerequisites for the course. I would apologize to these students that lecture and homework assignments will focus on students who do not have this extra experience. I would also point interested students to resources with additional explanations or practice.",
  },
  {
    number: 8,
    round: 1,
    prompt:
      "A student tells you they have read the book five times, but that they are still struggling in class.",
    sample_answer:
      "I would empathize and share my experience that sometimes rereading the book isn't helpful. If relevant, I would share that it is normal to find the content difficult to learn. I would try to help them identify other resources to help them learn and practice the material.",
  },
  {
    number: 9,
    round: 1,
    prompt: "A student seems to just want you to tell them the answer.",
    sample_answer:
      "I would pause and say that I'm worried about accidentally telling them the answer. I would explain that I want to help them be successful in the course, but have to be careful. I would offer to work through a related problem with them where I can show them the steps and tell them the answer.",
  },
  {
    number: 10,
    round: 1,
    prompt:
      "A student or TA says \"I haven't slept for more than 4 hours all week and I haven't been eating lunch.\"",
    sample_answer:
      "I would express concern. I would share a story of how I thought I could get more done by losing sleep, but it was actually counterproductive. If it seemed relevant, I would also tell them about resources in the community for people who don't have reliable access to food.",
  },
  {
    number: 11,
    round: 1,
    prompt:
      "Students are asking for help past the end of your scheduled lab time.",
    sample_answer:
      "I would say that I wish I could help them, but needed to leave. I would remind them of resources they could use to get help such as asking other students in the class or posting on Piazza. I would remind them that I'm a student just like them, and also have classes I am studying for.",
  },
  {
    number: 12,
    round: 1,
    prompt:
      "A student got frustrated working on an assignment and started crying. They said they won't be able to finish it in time.",
    sample_answer:
      "I would be empathetic and say I was sorry. I would admit that this had happened to me and that I found it stressful. I would acknowledge that they might not be able to complete it before it was due, but I could still help them learn the material.",
  },
  {
    number: 13,
    round: 1,
    prompt: "A student complains about their grade on an assignment.",
    sample_answer:
      "I would make sure I understood their complaint and perhaps share a time where I felt frustrated or surprised by my grade. If there weren't any errors in how they were graded, I would explain that for this term, it wouldn't be possible to change the rubric, but want to avoid any surprises and can likely improve the rubric for the future.",
  },
  {
    number: 14,
    round: 1,
    prompt:
      "A fellow TA is constantly on their phone rather than paying attention to students during lab.",
    sample_answer:
      "I would mention to them that I had noticed this as a pattern and worried that students might not feel as comfortable asking for help. I would encourage them to set a timer to check in with students - even if the students weren't asking for help. I would also mention the conversation to the professor.",
  },
  {
    number: 15,
    round: 1,
    prompt: "A student asks you if they should drop the class.",
    sample_answer:
      "I would ask them why they are thinking about dropping the class. I would try to help them identify relevant pros and cons. I might reassure them that finding the content difficult is normal. I would avoid making a recommendation because I would not want any unconscious biases I might have to impact their decision (e.g. about biases about gender, race, ethnicity).",
  },
  {
    number: 16,
    round: 1,
    prompt: "A student is really frustrated and has a syntax error.",
    sample_answer:
      "I'd read the syntax error with them and help identify the line of code that it is referring to. If it is a spelling or tiny syntax error, I'd point it out to them, but otherwise I'd help them search the Internet for the answer because learning to search the Internet to solve a coding problem is an important skill to develop.",
  },
  {
    number: 17,
    round: 1,
    prompt:
      "You’ve exhausted all of your strategies and can’t figure out a bug in a student’s code",
    sample_answer:
      "First, I would ask another TA. Then I would see if anyone else in the lab has taken that class and can help. Then I would encourage them to post on piazza or email the instructor. I would also do these things if someone asked me a question from a class I hadn’t taken (or didn’t remember!)",
  },
  {
    number: 18,
    round: 1,
    prompt: 'If a student says "I hate myself, and I suck at everything"',
    sample_answer:
      "I would tell them that I noticed that they seem down. I would empathize and say I have had similar feelings in the past. I would say that talking to friends has been helpful to me. I would say that the campus has people you can talk to about managing stress and anxiety and that lots of students find those resources helpful.",
  },
  {
    number: 19,
    round: 1,
    prompt:
      "A student says that they don’t know how to get started when approaching a problem",
    sample_answer:
      "I'd ask them to describe the problem they're working on and maybe ask them to describe the input and output and relationship between the two. I'd ask them to come up with a small example that they could try by hand or write some test cases. I might suggest a simpler, related problem that we could solve together first.",
  },
  {
    number: 20,
    round: 1,
    prompt:
      "A student is upset because they think the professor hasn't adequately prepared them for an assignment.",
    sample_answer:
      "I would listen to them to make sure I understood their concern and say I was sorry. I would listen sympathetically, but would avoid agreeing with them to avoid disrespecting the professor. I would tell them that the professor would likely find their feedback helpful and ask if they had provided it or would want me to provide it anonymously.",
  },
  {
    number: 21,
    round: 1,
    prompt:
      'A major lab is due tonight, and a student asks "I don\'t know how to get started; can you help?"',
    sample_answer:
      "I would explain to the student that it might be tough to complete the assignment before it is due, but that I can offer some pointers on getting started. I'd point out that even if they don't complete the assignment before the deadline, it's probably important to complete it in order to be prepared for the exam.",
  },
  {
    number: 22,
    round: 1,
    prompt: "A student has tons of compilation errors and asks for help.",
    sample_answer:
      "I would suggest to the student that they work on one compilation error at a time, starting from the top. Focus not only on the line number indicated, but the code above it. I would explain that often one error can result in a cascade of error messages, and that if they tackle one syntax error at a time, it may not be nearly as bad as it appears.",
  },
  {
    number: 23,
    round: 1,
    prompt:
      "Students in your class seem embarrassed when they get something wrong.",
    sample_answer:
      "I would draw attention to it when I made mistakes in class. I would practice responding to incorrect answers that suggests that incorrect answers are normal on the path to learning. Before asking students to speak in class, I'd give them a minute to chat with a neighbor, which can help them get a right answer or I could overhear who has a right answer that I can call on.",
  },
  {
    number: 24,
    round: 1,
    prompt:
      "You catch a student copying another students' homework. It is due in 20 minutes and they are in a panic.",
    sample_answer:
      "I would ask to speak with them where other students wouldn't hear. I would say that it appeared that they had been copying another student's homework and that it is my responsibility to report this. If they became upset, I would apologize, but repeat that this was a requirement of my job and I could get in trouble for not reporting it.",
  },
  {
    number: 25,
    round: 1,
    prompt:
      "During class a student with a lot of prior CS experience asks questions about advanced topics outside of the scope of the class content.",
    sample_answer:
      "I would say ‘That’s an interesting question, but way beyond what we’ll cover in this class. I’m happy to chat with you about this after class, but if I were in this class, I’d be intimidated even hearing this question. I’m sure that wasn’t your intention, but everyone else – don’t worry if that question didn’t make sense.",
  },
  {
    number: 26,
    round: 1,
    prompt:
      'You observe a TA being dismissive of a student asking for help, saying "your problem is you just don\'t know how to use Unix"',
    sample_answer:
      "I would say something like \"Oh - I'm sure you didn't mean for your comment to sound like it sounded to me.\" I would be cautious because they might perceive me as being judgmental, but I would want to send a clear message to the student that TAs are there to be helpful and that this TA's comment wasn't helpful.",
  },
  {
    number: 27,
    round: 1,
    prompt:
      "You see two students pair programming, but only one of them is working.",
    sample_answer:
      "I would say I had noticed that they hadn't swapped drivers recently and encourage them to set a timer so they can remember. I would share that sometimes when pair programming I didn't feel comfortable asking questions and other times I didn't realize I needed to encourage my partner to ask questions. I would also encourage them to do a web search on \"strong-style pairing\" and invite them to try it.",
  },
  {
    number: 28,
    round: 1,
    prompt:
      "A student says they had a negative experience in a class based upon their gender with a professor, TA, tutor, or other student.",
    sample_answer:
      "I would interrupt and explain that depending upon the situation, I might be required to report it to the campus. I would tell them about people who aren't mandatory reporters, who can also connect them with resources such as the Title IX office, which handles gender discrimination. If it doesn't fall under mandatory reporting, I would offer to help resolve the situation.",
  },
  {
    number: 29,
    round: 1,
    prompt:
      "A student reports that their team member hasn't been following through on their assigned tasks.",
    sample_answer:
      "I would ask them if they had talked to their team member about it and explained how it had impacted the rest of the team. I encourage them to troubleshoot with the other student to see if there were things that could help them follow through (e.g., scheduling working team meetings or creating clearer subtasks). I would encourage them to bring this up with the instructor if the situation did not improve.",
  },
  {
    number: 30,
    round: 2,
    prompt:
      "Someone says “Explain it in a way your grandmother would understand.”",
    sample_answer:
      "I would ask them what they mean. I would explain that we often think of older women and mothers or grandmothers as not technological or intelligent, but this is a little absurd.",
  },
  {
    number: 31,
    round: 2,
    prompt:
      "Someone says about an Asian woman “She looks so young; I can't believe she's a professor!”",
    sample_answer:
      "I would probably mention a professional qualification of the person to explain that she got the job because of that. I might mention that describing her has ‘so young’ might be a complement, but makes it seem like she isn’t competent.",
  },
  {
    number: 32,
    round: 2,
    prompt:
      "Someone seems to frequently interrupt women when they are speaking.",
    sample_answer:
      "I would probably try to intervene in the behavior by saying something like ‘oops – Brenda I didn’t think you were finished with your point.’ If I have to intervene multiple times, it might make it easier to have a private conversation with the interrupter about the behavior.",
  },
  {
    number: 33,
    round: 2,
    prompt: "Someone says “women just aren’t interested in CS.”",
    sample_answer:
      "I would ask if there might be other reasons we see relatively few women in CS, and if any of these reasons might lead to women expressing less interest in CS. I’d probably try to talk to them about who gets access to CS and who gets encouraged to pursue CS.",
  },
  {
    number: 34,
    round: 2,
    prompt:
      "Someone says: “Sexism used to be so much worse. People these days make a big deal about the smallest things!”",
    sample_answer:
      "I would agree with them that things have gotten better and that some of the things we talk about regarding sexism are small things. However, repeated exposure to these small things can add up and lead to measurable effects.",
  },
  {
    number: 35,
    round: 2,
    prompt: 'A student says "You made me feel stupid for asking that question"',
    sample_answer:
      'I would listen to them and make sure that they feel heard. I would say I was sorry. I would resist the urge to tell them " I didn’t mean to make you feel stupid." The impact of my words matters even if the impact doesn\'t align with my intentions.',
  },
  {
    number: 36,
    round: 2,
    prompt:
      'A student says that it\'s unfair that some students get extra time on exams just because they have a "so-called disability".',
    sample_answer:
      "I would explain that we are required by law to provide students \"reasonable accommodations.\" I would empathize that I've taken tests where extra time might have helped, but explain that it's different when a professional has certified that someone needs extra time to show what they know.",
  },
  {
    number: 37,
    round: 2,
    prompt:
      "A TA says “It is tough TA-ing for a woman professor because women are so emotional.”",
    sample_answer:
      "I would ask them what they meant. As they provided examples I would try to help them see that people of all genders might have or express that emotion. I would note that we need leaders who can connect with and motivate employees and that their human characteristics help them do that!",
  },
  {
    number: 38,
    round: 2,
    prompt:
      "Someone says “This PC stuff has gotten out of hand. People just need to be less sensitive.”",
    sample_answer:
      "I would say that I assume we both value not hurting people with our words (because that would be difficult for them to disagree with.) I might get an example from them and try to help them understand how this example of non-PC language is dehumanizing even if it is unintentional and overt.",
  },
  {
    number: 39,
    round: 2,
    prompt:
      'Brenda doesn\'t speak up much during class. A TA says: "Brenda just needs to learn to be more confident."',
    sample_answer:
      'I would say that when I hear that someone "need to be more confident" it sounds like the person needs to be fixed. I would ask them if we might be able to change some of our culture in our classes so that people don’t have to display confidence to be successful.',
  },
  {
    number: 40,
    round: 2,
    prompt:
      "Someone says to an international student: “Your name is so hard to pronounce. I’ll never remember it. Can I call you something else? ”",
    sample_answer:
      "I would interrupt and say that I’m sure we can learn to pronounce their name! I would suggest we record them saying their name on our phones because learning to pronounce a person’s name is a way of showing respect. (Also: this can happen with domestic students too).",
  },
  {
    number: 41,
    round: 2,
    prompt:
      "A student is asking for help; you have trouble understanding their accent",
    sample_answer:
      "I would tell them that I'm sure I'll get better at understanding them, but that I'm having difficulty understanding them right now. I would see if asking them to write down their question and then writing down my answer was helpful to our mutual understanding. I would chat with them about non-class things to get more practice communicating with them.",
  },
  {
    number: 42,
    round: 2,
    prompt: "Someone says “I can’t be racist! I’m a good person.”",
    sample_answer:
      "I would try to reassure them that I agree that they are a good person. I would explain that research shows that stereotypes can produce unconscious, unintentional bias. This bias is really different than intentional prejudice, which is what we normally think of as racism. Unfortunately, we are all exposed to negative racial stereotypes, which means we all may have racial biases.",
  },
  {
    number: 43,
    round: 2,
    prompt:
      'A students says "There are so few Black and Latinx students in CS; it is a lot easier for them to get CS jobs."',
    sample_answer:
      "I would ask them if there might be any reasons that Black and Latinx students have a harder time getting a CS job. I’d probably try to introduce how research about implicit bias suggests that Black and Latinx students would be less likely to be recognized as a good candidate.",
  },
  {
    number: 44,
    round: 2,
    prompt:
      "Someone says “Jack says he uses the pronoun ‘they,’ but I told him that it isn’t grammatically correct.”",
    sample_answer:
      "I would say that English is always evolving and the singular they has been accepted for a while. However, if they don’t feel comfortable with that they can just only use Jack’s name; pronouns can be avoided. However, I would state unequivocally that if Jack uses the pronouns they/them, we shouldn’t refer to Jack using he/him.",
  },
  {
    number: 45,
    round: 2,
    prompt:
      "Students in your class laughed when students answered a question incorrectly.",
    sample_answer:
      "In the moment, I might make eye contact with the students who laughed and say \"not cool.\" As class ended or when students were doing group work, I would ask them to stay after to chat. In chatting, I'd reassure them that I didn't think they meant to be hurtful, but that the classroom is for learning and laughing at incorrect answers isn't okay.",
  },
  {
    number: 46,
    round: 2,
    prompt: "A student says they’re just not a CS person",
    sample_answer:
      "I would ask them to explain what they mean. A lot of times people assume that they’re the only person who is struggling, so I would tell them about times that I have struggled. I would also point out that in every class there are people with really different levels of previous experience, which can sometimes make you feel like you’re behind, when you really aren't.",
  },
  {
    number: 47,
    round: 2,
    prompt:
      "Someone says “It is great to have women on teams, they’re so collaborative.”",
    sample_answer:
      "I would say that I’ve heard the stereotype that women are more collaborative than men, but I haven’t seen any research documenting a pattern. Some people are more collaborative and some are less collaborative independent of gender. Collaboration is important, so we might want to make sure each team has people with strong collaboration skills, but gender is a bad proxy for that.",
  },
  {
    number: 48,
    round: 2,
    prompt:
      "Someone says “scholarships and student organizations for certain groups are divisive and unfair to others.”",
    sample_answer:
      "I would ask what might motivate someone to create a program for certain groups. If they didn’t mention it, I’d point out the potential for these programs to promote belonging, which is important for student learning and employee retention! I’d probably try to introduce the difference between equality, where everyone gets the same thing, and equity, where everyone gets what they need.",
  },
  {
    number: 49,
    round: 2,
    prompt:
      "Someone says “People should just tell me if I say something that offends them.”",
    sample_answer:
      "I would acknowledge that it's awesome that want to hear feedback about their mistakes! I would point out that it can be difficult for people to share this with them because of power dynamics or concerns that the feedback won’t be well received. I’d encourage them to read stories online to help them recognize ways in which their words might have an unintentionally negative impact.",
  },
  {
    number: 50,
    round: 2,
    prompt:
      'A student says: "Girls in CS classes must get asked out all the time. So many guys. Must be great!"',
    sample_answer:
      "I would explain that the media often portrays women as sexual objects, but my assumption is that students take my class to learn CS. Responding to the advances of their peers might get in the way of that learning. Also: some of the women may not be interested in dating men; I try not to assume that all of my students are heterosexual.",
  },
  {
    number: 51,
    round: 2,
    prompt:
      "Someone says “We want diverse TAs, but we don’t want to lower our standards.”",
    sample_answer:
      "I would ask why they assume we would need to lower standards to increase diversity. I would challenge them to think about how we might reduce bias in our hiring/recruitment processes and create a more inclusive culture, none of which involves lowering standards. I’d encourage them to be more explicit when we talk about diversity to fight the taboos of talking about race, class, gender, sexual orientation, and ability.",
  },
  {
    number: 52,
    round: 2,
    prompt:
      "Someone says “If anyone works hard, they’ll be able to get ahead.”",
    sample_answer:
      "I would say that certainly to get ahead it requires a lot of work. However, sometimes the cards are stacked in some people’s favor. I might try to introduce the idea of privilege, which is an unearned, unasked for advantage. I would identify some of my privileges and explain that this doesn’t mean I didn’t work hard for my accomplishments.",
  },
  {
    number: 53,
    round: 2,
    prompt:
      'A student says "Diversity is good, but the CS department shouldn\'t water down the content."',
    sample_answer:
      "I would ask why they would assume we would need to water down the content to increase the diversity in our classes. I would challenge the assumption that more engaging and accessible content can’t still accomplish the same learning goals. I’d encourage them to be more explicit when we talk about diversity to fight the taboos of talking about race, class, gender, and sexual orientation.",
  },
];
