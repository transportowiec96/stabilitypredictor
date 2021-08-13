class zone 
{
	constructor(name,hostileperc,popnum,srq,access,presupport,size,type) 
	{
		this.name = name;
		this.hostileperc = hostileperc
		this.popnum = popnum;
		this.srq = srq;
		this.access = access;
		this.presupport = presupport;
		this.type = type;
		this.size = size;
	}
}
const opium = 
[
	new zone("Alpha Whiskey",0.0423,46217,0.155,0.43,0.0012,56,'city'),
	new zone("Alpha Romeo",0.0434,9631,0.113,0.23,0,45,'agricultural'),
	new zone("Bravo Papa",0.0399,10790,0.131,0.33,0,54,'agricultural'),
	new zone("Bravo Whiskey",0.0505,20036,0.069,0.69,0.0024,25,'city'),
];
const pass = 
[
	new zone('Alpha Tango',0.0381,13688,0.132,0.46,0,61,'agricultural'),
	new zone('Alpha Victor',0.0258,42268,0.11,0.62,0.0016,56,'city'),
	new zone('Alpha Whiskey',0.045,20308,0.119,0.62,0.0012,50,'city'),
	new zone('Bravo Lima',0.1192,3672,0.246,0.05,0,61,'remote'),
	new zone('Bravo Kilo',0.2603,2735,0.498,0.04,0,68,'remote'),
	new zone('Bravo Juliett',0.1425,4661,0.356,0.04,0,74,'remote'),
	new zone('Bravo Mike',0.0414,3134,0.103,0.06,0,47,'remote'),
	new zone('Charlie Yankee',0.0496,20467,0.165,0.34,0,66,'city'),
	new zone('Charlie Romeo',0.0552,8065,0.128,0.39,0,50,'agricultural'),
	new zone('Charlie Papa',0.0405,12764,0.096,0.65,0,43,'agricultural'),
	new zone('Delta Oscar',0.0993,4906,0.208,0.05,0,58,'remote'),
	new zone('Delta Kilo',0.307,4866,0.416,0.06,0,49,'remote'),
	new zone('Delta Juliett',0.1083,2938,0.298,0.04,0,79,'remote'),
	new zone('Delta Lima',0.0819,3999,0.136,0.07,0,43,'remote'),
	new zone('Echo Tango',0.0587,8401,0.143,0.36,0,54,'agricultural'),
	new zone("Echo Whiskey",0.0445,18863,0.123,0.43,0,52,'city'),
	new zone("Echo Uniform",0.04,13428,0.144,0.43,0,65,'agricultural'),
	new zone("Echo Victor",0.0411,47613,0.134,0.63,0,55,'city'),
	new zone("Echo Romeo",0.0553,10437,0.093,0.78,0,36,'agricultural'),
	new zone('Foxtrot Romeo',0.0432,12816,0.071,0.48,0,41,'agricultural'),
	new zone('Foxtrot Uniform',0.0373,11563,0.071,0.85,0,33,'agricultural'),
	new zone('Golf Mike',0.119,4372,0.328,0.03,0,81,'remote'),
	new zone('Golf Lima',0.2991,2734,0.7,0.03,0,85,'remote'),
	new zone('Golf Tango',0.1025,3154,0.258,0.04,0,71,'remote'),
	new zone('Hotel Sierra',0.0578,12114,0.14,0.37,0,53,'agricultural'),
	new zone('Hotel Romeo',0.0402,10661,0.092,0.48,0,41,'agricultural'),
	new zone("Zulu Sierra",0.0686,4436,0.131,0.24,0,46,'remote'),
]
const desert = 
[
	new zone('Delta Romeo',0.0476,13684,0.99,0.48,0,39,'agricultural'),
	new zone('Delta Yankee',0.0419,20351,0.088,0.59,0,36,'city'),
	new zone('Delta Whiskey',0.0668,19178,0.158,0.57,0,51,'city'),
	new zone('Zulu Victor',0.0453,46478,0.152,0.59,0,56,'city')
];
const forest = 
[
	new zone('Charlie Yankee',0.0351,29306,0.096,0.51,0,44,'city'),
	new zone('Charlie Papa',0.0439,13059,0.135,0.34,0,58,'agricultural'),
	new zone('Echo Tango',0.0428,10698,0.125,0.36,0,55,'agricultural'),
	new zone('Echo Whiskey',0.0615,72045,0.162,0.69,0.0037,50,'city')
];
//new zone(name,hostileperc,popnum,srq,access,presupport,size,type),
const soon = 
[
	new zone("Hello There",0.99,10000,0.99,0.01,0,1,'city')
]
const allmaps = [pass,desert,forest,opium,soon]
const map_names = ["Mountain Pass","Southern Desert","Pistachio Forest","Opium Trail","Coming Soon"]