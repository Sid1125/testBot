/* eslint-disable no-unused-vars */
const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })

module.exports.run = async (client, message, args, utils) => {
	const truth = [
		'When was the last time you lied?',
		'When was the last time you cried?',
		'What\'s your biggest fear?',
		'What\'s your biggest fantasy?',
		'Do you have any fetishes?',
		'What\'s something you\'re glad your mum doesn\'t know about you?',
		'Have you ever cheated on someone?',
		'What\'s the worst thing you\'ve ever done?',
		'What\'s a secret you\'ve never told anyone?',
		'Do you have a hidden talent?',
		'Who was your first celebrity crush?',
		'What are your thoughts on polyamory?',
		'What\'s the worst intimate experience you\'ve ever had?',
		'Have you ever cheated in an exam?',
		'What\'s the most drunk you\'ve ever been?',
		'Have you ever broken the law?',
		'What\'s the most embarrassing thing you\'ve ever done?',
		'What\'s your biggest insecurity?',
		'Have you ever stayed friends with someone because it benefitted you beyond just the friendship?',
		'What\'s the biggest mistake you\'ve ever made?',
		'What\'s the most disgusting thing you\'ve ever done?',
		'Who would you like to kiss in this room?',
		'What\'s the worst thing anyone\'s ever done to you?',
		'Have you ever had a run in with the law?',
		'What\'s your worst habit?',
		'What\'s the worst thing you\'ve ever said to anyone?',
		'Have you ever peed in the shower?',
		'What\'s the strangest dream you\'ve had?',
		'Have you ever been caught doing something you shouldn\'t have?',
		'What\'s the worst date you\'ve been on?',
		'What\'s your biggest regret?',
		'What\'s the biggest misconception about you?',
		'Have you ever said something you regret about someone in this room?',
		'What\'s one thing you wish people knew about you?',
		'Why did your last relationship break down?',
		'What\'s the most trouble you\'ve been in?',
		'What\'s the worst thing you\'ve ever lied about?',
		'What\'s the best piece of advice you\'ve ever been given?',
		'What\'s your guilty pleasure?',
		'What\'s one thing you only do when you\'re alone?',
		'If you had to get back with an ex, who would you choose?',
		'If you had to cut one friend out of your life, who would it be?',
		'Do you have a favourite friend?',
		'Who is your best friend?',
		'Which is your favourite food?',
		'What are your top three turn-ons?',
		'What is your deepest darkest fear?',
		'Who is your crush?',
		'What was the last thing you searched for on your phone?',
		'If you had to choose between going naked or having your thoughts appear in thought bubbles above your head for everyone to read, which would you choose?',
		'Have you ever walked in on your parents doing it?',
		'After you\'ve dropped a piece of food, what\'s the longest time you\'ve left it on the ground and then ate it?',
		'Have you ever tasted a booger?',
		'What\'s the first thing you would do if you woke up one day as the opposite sex?',
		'Have you ever peed in the pool?',
		'Have you ever farted in an elevator?',
		'Of the people in this room, who do you want to trade lives with?',
		'What are some things you think about when sitting on the toilet?',
		'Did you have an imaginary friend growing up?',
		'Do you cover your eyes during a scary part in a movie?',
		'Have you ever practiced kissing in a mirror?',
		'Did your parents ever give you the “birds and the bees” talk?',
		'What is your worst habit?',
		'Have you ever had a wardrobe malfunction?',
		'What is your biggest fear in a relationship?',
		'What was your funniest first date ever?',
		'What is your biggest turn off in a partner?',
		'What is your weirdest habit?',
		'How many kids would you like to have?',
		'What is the perfect first day?',
		'What is one embarrassing fact I should know about you?',
		'What was your childhood nickname?',
		'What is your favourite movie?',
		'Describe your worst date ever?',
		'If there was no such thing as money, what would you do with your life?',
		'What is your favourite food?',
		'What are your three favourite colours, and why?',
		'What is your dream job?',
		'If you were trapped on an island for 3 days, what would you take with you?',
		'Who is your favourite person and why?',
		'Do you prefer apple or android?',
		'How do you put your toilet paper on the roll?',
		'What is your best talent?',
		'Do you believe in love at first sight?',
		'Do you believe in love at all?',
		'What is your dream wedding?',
		'Would you ever consider being a nudist?',
		'How do you feel about end pieces of a loaf of bread?',
		'Can you touch your tongue to your nose?',
		'If you could take away one bad thing in the world, what would it be?',
		'What is the most exotic food that you have ever eaten?',
		'What country would like to live in if you had the chance?',
		'If you could change one thing on your body, what would it be?',
		'What do you daydream about the most?',
		'Describe the weirdest dream you\'ve ever had?',
		'Is the dress Black and Blue or Gold and White?',
		'How do you feel about social media?',
		'What is your favourite season of the year?',
		'Could you go a week without junk food?',
		'How was your first kiss?',
		'Describe your worst kiss ever?',
		'Do you like to exercise?',
		'Have you ever blacked out from drinking too much?',
		'Did you smoke or drink before college? Or did you start when you got here?',
		'What is the craziest thing that you have ever done while drunk?',
		'What is the funniest dream that you have ever had?',
		'Who is your best looking teacher that you have ever had?',
		'Have you ever cheated on any test?',
		'Who is your crush at school?',
		'Who is the most annoying person you know?',
		'Have you ever pulled a prank on your teacher?',
		'Have you ever lied to your parents about what you were doing after school?',
		'Have you ever blamed something that you have done on one of your siblings?',
		'What college do you plan on going to?',
		'Are you still a virgin?',
		'How many boyfriends (or girlfriends) have you had?',
		'Have you ever been kissed yet? If so, who was your best kiss?',
		'What is your biggest pet peeve?',
		'What is the best vacation you\'ve ever been on?',
		'Have you ever told one of your best friend\'s secrets, even if you said you wouldn\'t?',
		'Have you ever had a crush on someone that your best friend has dated?',
		'What is the most annoying thing that one of your siblings has done?',
		'Do you have a job? If so, what is your favourite thing about it?',
		'If you were a billionaire, what would you spend your time doing?',
		'What is the longest time you have ever been grounded?',
		'What is the longest time that you think you could go without your cell phone?',
		'What is the most expensive thing you own?',
		'If you had the choice to live on your own right now, would you do it?',
		'Can you see yourself being married to the creepiest kid a your school someday?',
		'Would you ever get on a dating website?',
		'Have you ever watched an adult film without your parents knowing?',
		'If you could own your own business one day, what would it be?',
		'What is your favourite kind of clothing?',
		'What celebrity are you obsessed with?',
		'What is the funniest youtube video you have ever seen?',
		'Who is the worst teacher you have ever had, why?',
		'What is your favourite sports team?',
		'How old were you when you had your first kiss?',
		'How long have you gone without showering?',
		'What color is your underwear?',
		'What is your special talent?',
		'What\'s your ex-girlfriend/boyfriend name?',
		'What is the most embarrassing moment of your life?',
		'What would you do with a million dollars if you ever won the lottery?',
		'If you could change one thing on your body, what would it be?',
		'What is the silliest thing you have an emotional attachment to?',
		'What was your childhood nickname?',
		'What is something you have stolen?',
		'Say 5 bad habits you have?',
		'Tell 5 secrets of yours?',
		'What is the most embarrassing thing your parents have caught you doing?',
		'Have you ever peed in the swimming pool?',
		'If you could marry one teacher in the school, who would you pick and why?',
		'Have you ever lied to your best friend?',
		'What he craziest thing that you have ever done without your parents knowing?',
		'What would you do if your parents left the house to you for a whole week?',
		'What is your favourite song that is out right now?',
		'Could you go two months without talking to your friends?',
		'What was the last thing you searched for on your phone?',
		'If you had to choose between going naked or having your thoughts appear in thought bubbles above your head for everyone to read, which would you choose?',
		'Have you ever walked in on your parents doing it?',
		'After you\'ve dropped a piece of food, what\'s the longest time you\'ve left it on the ground and then ate it?',
		'Have you ever tasted a booger?',
		'Have you ever played Cards Against Humanity with your parents?',
		'What\'s the first thing you would do if you woke up one day as the opposite sex?',
		'Have you ever peed in the pool?',
		'Who do you think is the worst-dressed person in this room?',
		'Have you ever farted in an elevator?',
		'True or false: You have a crush on [fill in the blank].',
		'Of the people in this room, who do you want to trade lives with?',
		'What are some things you think about when sitting on the toilet?',
		'Did you have an imaginary friend growing up?',
		'Do you cover your eyes during a scary part in a movie?',
		'Have you ever practiced kissing in a mirror?',
		'Did your parents ever give you the “birds and the bees” talk?',
		'What is your guilty pleasure?',
		'What is your worst habit?',
		'Has anyone ever walked in on you when going #2 in the bathroom?',
		'Have you ever had a wardrobe malfunction?',
		'Have you ever walked into a wall?',
		'Do you pick your nose?',
		'Do you sing in the shower?',
		'Have you ever peed yourself?',
		'What was your most embarrassing moment in public?',
		'Have you ever farted loudly in class?',
		'Do you ever talk to yourself in the mirror?',
		'You’re in a public restroom and just went #2, then you realized your stall has no toilet paper. What do you do?',
		'What would be in your web history that you’d be embarrassed if someone saw?',
		'Have you ever tried to take a sexy picture of yourself?',
		'Do you sleep with a stuffed animal?',
		'Do you drool in your sleep?',
		'Do you talk in your sleep?',
		'Who is your secret crush?',
		'Do you think [fill in the name] is cute?',
		'Who do you like the least in this room, and why?',
		'What does your dream boy or girl look like?',
		'What is your go-to song for the shower?',
		'Who is the sexiest person in this room?',
		'How would you rate your looks on a scale of 1 to 10?',
		'Would you rather have sex with [insert name] in secret or not have sex with that person, but everyone thinks you did?',
		'What don\'t you like about me?',
		'What color underwear are you wearing right now?',
		'What was the last thing you texted?',
		'If you were rescuing people from a burning building and you had to leave one person behind from this room, who would it be?',
		'Do you think you\'ll marry your current girlfriend/boyfriend?',
		'How often do you wash your undergarments?',
		'Have you ever tasted ear wax?',
		'Have you ever farted and then blamed someone else?',
		'Have you ever tasted your sweat?',
		'What is the most illegal thing you have ever done?',
		'Who is your favorite: Mom or Dad?',
		'Would you trade your sibling in for a million dollars?',
		'Would you trade in your dog for a million dollars?',
		'What is your biggest pet peeve?',
		'If you were allowed to marry more than one person, would you? Who would you choose to marry?',
		'Would you rather lose your sex organs forever or gain 200 pounds?',
		'Would you choose to save 100 people without anyone knowing about it or not save them but have everyone praise you for it?',
		'If you could only hear one song for the rest of your life, what would it be?',
		'If you lost one day of your life every time you said a swear word, would you try not to do it?',
		'Who in this room would be the worst person to date? Why?',
		'Would you rather live with no internet or no A/C or heating?',
		'If someone offered you $1 million to break up with your girlfriend/boyfriend, would you do it?',
		'If you were reborn, what decade would you want to be born in?',
		'If you could go back in time in erase one thing you said or did, what would it be?',
		'Has your boyfriend or girlfriend ever embarrassed you?',
		'Have you ever thought about cheating on your partner?',
		'If you could suddenly become invisible, what would you do?',
		'Have you ever been caught checking someone out?',
		'Have you ever waved at someone thinking they saw you when really they didn\'t? What did you do when you realized it?',
		'What\'s the longest time you\'ve stayed in the bathroom, and why did you stay for that long?',
		'What\'s the most unflattering school picture of you?',
		'Have you ever cried because you missed your parents so much?',
		'Would you rather be caught picking your nose or picking a wedgie?',
		'Describe the strangest dream you\'ve ever had. Did you like it?',
		'Have you ever posted something on social media that you regret?',
		'What is your biggest fear?',
		'Do you pee in the shower?',
		'Have you ever ding dong ditched someone?',
		'The world ends next week, and you can do anything you want (even if it\'s illegal). What would you do?',
		'Would you wear your shirt inside out for a whole day if someone paid you $100?',
		'What is the most childish thing that you still do?',
		'How far would you go to land the guy or girl of your dreams?',
		'Tell us about a time you embarrassed yourself in front of a crush.',
		'Have you ever kept a library book?',
		'Who is one person you pretend to like, but actually don’t?',
		'What children’s movie could you watch over and over again?',
		'Do you have bad foot odor?',
		'Do you have any silly nicknames?',
		'When was the last time you wet the bed?',
		'How many pancakes have you eaten in a single sitting?',
		'Have you ever accidentally hit something with your car?',
		'If you had to make out with any Disney character, who would it be?',
		'Have you ever watched a movie you knew you shouldn’t?',
		'Have you ever wanted to try LARP (Live Action Role-Play)?',
		'What app on your phone do you waste the most time on?',
		'Have you ever pretended to be sick to get out of something? If so, what was it?',
		'What is the most food you’ve eaten in a single sitting?',
		'Do you dance when you’re by yourself?',
		'Would you have voted for or against Trump?',
		'What song on the radio do you sing with every time it comes on?',
		'Do you sleep with a stuffed animal?',
		'Do you own a pair of footie pajamas?',
		'Are you scared of the dark?',
		'What "as seen on TV" product do you secretly want to buy?',
		'Do you still take bubble baths?',
		'If you were home by yourself all day, what would you do?',
		'How many selfies do you take a day?',
		'What is something you’ve done to try to be ‘cooler’?',
		'When was the last time you brushed your teeth?',
		'Have you ever used self-tanner?',
		'What do your favorite pajamas look like?',
		'Do you have a security blanket?',
		'Have you ever eaten something off the floor?',
		'Have you ever butt-dialed someone?',
		'Do you like hanging out with your parents?',
		'Have you ever got caught doing something you shouldn\'t?',
		'What part of your body do you love, and which part do you hate?',
		'Have you ever had lice?',
		'Have you ever pooped your pants?',
		'What was the last R-rated movie you watched?',
		'Do you lick your plate?',
		'What is something that no one else knows about you?',
		'Do you write in a diary?',
	];
	const randomtruth = truth[Math.floor(Math.random() * truth.length)];
	if(!message.mentions.users.first()) {
		const embed = new Discord.EmbedBuilder()
			.setTitle(`Truth: ${randomtruth}`)
			.setColor('RANDOM')
			.setAuthor(message.author.username, message.author.avatarURL());
		message.channel.send(embed);
	}
	if(message.mentions.users.first()) {
		const embed = new Discord.EmbedBuilder()
			.setTitle(`${message.mentions.users.first().username}, ${message.author.username} is asking you a Truth`)
			.setDescription(`Truth: ${randomtruth}`)
			.setColor('RANDOM')
			.setAuthor(message.author.username, message.author.avatarURL());
		message.channel.send(embed);
	}
};


module.exports.help = {
	aliases: [],
	name: 'truth',
	description: 'Some random Truths 😳',
	usage: 's#truth',
};
