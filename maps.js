class zone {
	constructor(name,hostileperc,popnum,srq,access,presupport,type) {
		this.name = name;
		this.hostileperc = hostileperc
		this.popnum = popnum;
		this.srq = srq;
		this.access = access;
		this.presupport = presupport;
		this.type = type
	}
}
const opium = 
[
	new zone("Bravo Whiskey",0.0505,20036,0.069,0.69,0.0024,'urban'),
	new zone("Alpha Whiskey",0.0423,46217,0.155,0.43,0.0012,'urban'),
	new zone("Alpha Romeo",0.0434,9631,0.113,0.23,0,'rural'),
	new zone("Bravo Papa",0.0399,10790,0.0131,0.33,0,'rural'),
];
const soon = 
[
	new zone("Hello There",0.99,10000,0.99,0.01,0)
]
const allmaps = [opium,soon]
const map_names = ["Opium Trail","Coming Soon"]