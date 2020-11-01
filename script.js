const funActivities= ["Host a dinner party and ask everyone to bring a dish to share. If you are not comfortable with cooking, maybe try and learn how to cook a new dish together with your friends.",
"Give each other manicures. Try out new hairstyles. Make some facial masks or exfoliates using natural, at-home ingredients. Then drink mimosas.",
"Log into Netflix and watch every episode of “Stranger Things” Or do an ’80s movie marathon, watching “Pretty in Pink,” “The Breakfast Club” and all of our old favorites. Don’t have a Netflix membership? Get the free trial just for the marathon!",
"You know all of those cool Pinterest crafts you say you’re going to do? Do them. At home one night with friends. Then make up some of those bacon-wrapped whatevers you’ve been dying to try!",
"Pack a picnic. Hang out. Watch people. Play on the swings.","Set up a day of each weekend where you go to each of your friends’ houses and help them clean out a closet, a room, a garage, whatever. Serve drinks and food and trade stuff among yourselves.",
"Not into board games? OK. Well, how about a video game tournament? Whether it’s the latest dancing game or “Call of Duty,” play against each other and award prizes (or food) to the winners.",
"Grab a basketball or a tennis racket. Most parks have courts and fields you can use for free as long as there isn’t an organized event going on.","This might cost a little for admission, but it’s a great way to support your community and have a fun time.",
"Bring your friends over and have an Iron Chef night where you cook dinner out of only the items in your pantry. No buying anything!",
"Yup. I said it. Check out the dumpsters in your area and see what you can find. You might even find dinner! Here are some tips for respectful diving."
];
let randomActivityIndex=Math.floor(Math.random() *funActivities.length);
console.log("Your activity fot today:"+funActivities[randomActivityIndex] );