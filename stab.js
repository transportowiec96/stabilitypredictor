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
    new ini("PR & Media Office",0,0,0,0,"",'pr'),
    new ini("Strategic Communications",0,0,0,0,"",'pr'),
    new ini("District Representatives",12,1,1,27.78,"",'reps')
];

var bought = [];
function calculate()
{
    var turns = 24;
    var pr_buff = 1;
    var calculated_zone = allmaps[document.getElementById('map_pick').value][document.getElementById('zone_pick').value];
    var requirement = calculated_zone.srq;
    var sup_amount = calculated_zone.presupport;
    var num_hammer = 4;
    if (calculated_zone.type === 'remote')
    {
        num_hammer = 2;
    }
    if(document.getElementById('ishq').checked)
    {
        requirement *=0.635;
    }
    var built = [];
    var building = [];
    var temp_build = [];
    for(z=0;z<bought.length;z+=1)
    {
        building[z] = initiatives[bought[z]];
        console.log(building)
        building[z].costtobuild = building[z].costtobuild/(1+calculated_zone.access);
        building[z].costtobuild += (document.getElementById('month_pick_'+bought[z]).value*1-18) + document.getElementById('year_pick_'+bought[z]).value*1;
    }
    ;
    while(requirement>sup_amount && turns < 10000)
    {
        temp_build = [...building];
        var spliced_el = 0;
        for(z=0;z<building.length;z+=1)
        {
            if(z-num_hammer <= 0)
            {
                var build_type = []
                if (building.length===2)
                {
                    build_type = [building[0].type,building[1].type]
                    if(isjob(building[z].type) === true)
                    {
                        switch(matches_thing(build_type))
                        {
                            case 1:
                                building[z].costtobuild -= 1;
                                break;
                            case 2:
                                building[z].costtobuild -= 0.9;
                                break;
                        }
                    }
                    else
                    {
                        building[z].costtobuild -= 1;
                    }
                }
                else if (building.length===3)
                {
                    build_type = [building[0].type,building[1].type,building[2].type]
                    if(isjob(building[z].type) === true)
                    {
                        switch(matches_thing(build_type))
                        {
                            case 1:
                                building[z].costtobuild -= 1;
                                break;
                            case 2:
                                building[z].costtobuild -= 0.9;
                                break;
                            case 3:
                                building[z].costtobuild -= 0.825;
                                break;
                        }
                    }
                    else
                    {
                        building[z].costtobuild -= 1;
                    }
                }
                else if(building.length > 3)
                {
                    building[z].costtobuild -= 0.725;
                }
                else
                {
                    building[z].costtobuild -= 1;
                }
            }
            if(building[z].costtobuild < 1)
            {
                built.push(building[z])
                temp_build.splice(z-spliced_el,1)
                spliced_el+=1;
                if(building[z].name === "PR & Media Office")
                {
                    pr_buff=1.9;
                }
                if(building[z].name === "Strategic Communications")
                {
                    pr_buff=2.4;
                }
                console.log("built " + building[z].name);
            }
        }
        building=[...temp_build];
        var supportchange = 0;
        for(z=0;z<built.length;z+=1)
        {
            supportchange += (36/calculated_zone.size)*(support(built[z],calculated_zone,pr_buff));
        }
        supportchange = (supportchange*0.015);
        sup_amount += (supportchange/100);
        turns+=1;
        console.log("turn "+turns+" "+sup_amount+"% supporters");
    }
    if(turns < 9995)
    {
        document.getElementById("year").innerHTML = Math.floor(turns/72)+2002;
        document.getElementById("month").innerHTML = months[document.getElementById('lang_choosen').value][Math.floor(turns%72/6)];
    }
    else
    {
        document.getElementById("year").innerHTML = '';
        document.getElementById("month").innerHTML = 'undefined';
    }
}
function support(ini,zone,prmod)
{
    switch(ini.type)
    {
        case 'genericjob':
        case 'agricultural':
        case 'city':
            var job_multiplier = 1;
            if(zone.type === ini.type && ini.type != 'genericjob')
            {
                job_multiplier = 1.5;
            }
            else if(ini.type === 'genericjob')
            {
                job_multiplier = 1;
            }
            else 
            {
                job_multiplier = 0.75;
            }
            var hostile_multiplier = (1-((zone.hostileperc*4)));
            if(hostile_multiplier < 0.01)
            {
                hostile_multiplier = 0.01;
            }
            return ini.support*job_multiplier*0.55*hostile_multiplier*prmod;
        default:
            return  ini.support*0.4325*prmod;

    }

}
function matches_thing(arey)
{
    var jobberinos = 0;
    if(arey.length > 0)
    {
        if(isjob(arey[0]))
        {
            jobberinos += 1;
        }
        if(arey.length > 1)
        {
            if(isjob(arey[1]))
            {
                jobberinos += 1;
            }
            if(arey.length > 2)
            {
                if(isjob(arey[2]))
                {
                    jobberinos += 1;
                }
                if(arey.length > 3)
                {
                    if(isjob(arey[3]))
                    {
                        jobberinos += 1;
                    }
                }
            }
        }
        
    }
    return jobberinos;
}
function isjob(thingy)
{
    if(thingy === 'genericjob' || thingy === 'agricultural' || thingy === 'city')
    {
        return true;
    }
    return false;
}