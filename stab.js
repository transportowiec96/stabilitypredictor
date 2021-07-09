class ini {
    constructor(nm,pr,sp,hs,turns,require,tp) 
    {
        this.name = nm;
        this.price = pr;
        this.support = sp;
        this.hostile = hs;
        this.costtobuild = turns;
        this.requirementInitiative = require;
        this.type = tp;
    }
}
function findInInis(nam,arr)
{
    for (i=0;i<arr.length;i+=1)
    {
        if(nam === arr[i].name)
        {
            return i;
        }
    }
    return false;
}
function findInLang(nam)
{
    for (i=0;i<langs[0].length;i+=1)
    {
        if(nam === langs[0][i])
        {
            return i;
            
        }
    }
    return false;
}
const initiatives = 
[
    new ini("Services Discussions",3,0,0,0,"",'services'),
    new ini("Medical Supplies",2,0.56,2.24,16.21,"Services Discussions",'meds'),
    new ini("Water Supplies",2,0.63,2.52,20.84,"Services Discussions",'water'),
    new ini("Water Expansion",2,0.56,2.24,23.15,"Water Supplies",'water'),
    new ini("Basic Sanitation",2,0.56,2.24,20.84,"Water Supplies",'water'),
    new ini("Expanded Sanitation",2,0.56,2.24,23.15,"Basic Sanitation",'water'),
    new ini("Core Health Care",3,0.7,2.8,16.21,"Medical Supplies",'meds'),
    new ini("Expanded Health Care",2,0.56,2.24,18.52,"Core Health Care",'meds'),
    new ini("Personal Health Program",2,0.56,2.24,18.52,"Core Health Care",'meds'),
    new ini("Vaccine 1",3,0.6,2.4,11.57,"Core Health Care",'meds'),
    new ini("Vaccine 2",3,0.6,2.4,11.57,"Vaccine 1",'meds'),
    new ini("School Regeneration",2,0.49,1.47,13.89,"Services Discussions",'schools'),
    new ini("School Supplies",3,0.7,2.1,9.26,"School Regeneration",'schools'),
    new ini("School Expansion",3,0.49,1.47,11.57,"School Supplies",'schools'),
    new ini("Literacy Drive",3,0.49,1.47,9,26,"School Regeneration",'schools'),

    new ini("Jobs Discussions",3,0,0,0,"",'jobs'),
    new ini("Vocational Training",6,2.4,0.24,60.21,"Jobs Discussions",'genericjob'),
    new ini("Land Rights",5,2,0.2,60.21,"Jobs Discussions",'genericjob'),
    new ini("Development Bank",5,2,0.2,60.21,"Jobs Discussions",'city'),
    new ini("Agricultural Logistics",7,2.4,0.24,60.21,"Livestock Development",'agricultural'),
    new ini("Industrial Support",7,2.4,0.24,60.21,"Development Bank",'city'),
    new ini("Crop Development",6,2,0.2,60.21,"Livestock Development",'agricultural'),
    new ini("Export Agencies",5,1.6,0.16,60.21,"Land Rights",'genericjob'),
    new ini("Livestock Development",5,1.6,0.16,60.21,"Jobs Discussions",'agricultural'),
    new ini("Commercial Support",5,1.6,0.16,60.21,"Development Bank",'city'),
    new ini("Remote Subsidies",6,0.8,0.8,60.21,"Development Bank",'remote'),

    new ini("Infra Discussions",3,0,0,0,"",'infra'),
    new ini("Electricity 1",8,1,1,34.73,"Infra Discussions",'electricity'),
    new ini("Electricity 2",12,1,1,30.10,"Electricity 1",'electricity'),
    new ini("Road Building 1",8,0.3,0.3,38,"Infra Discussions",'roads'),
    new ini("Road Building 2",8,0.3,0.3,38,"Road Building 1",'roads'),
];
const reps = new ini("District Representatives",12,1,1,27.78,"",'reps');
var bought = [];
function calculate()
{
    alert('This message should not appear. Please notify the developer if it appears.')
}