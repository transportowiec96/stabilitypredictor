function update_lang()
{
    var lang_id = document.getElementById('lang_choosen').value;
    var lang_strings = document.getElementsByClassName('lang_string');
    for(j = 0; j < lang_strings.length;j+=1)
    {
        lang_strings[j].innerHTML = langs[lang_id][findInLang(lang_strings[j].id)]
        
    }
}
function go_to_program()
{
    change_map();
    update_lang();
    document.getElementById('lang_chooser').style.display = 'none';
    document.getElementById('program').style.display = 'flex';
}
function change_map()
{
    document.getElementById('map_picture').src = 'maps/'+map_names[document.getElementById('map_pick').value]+'_'+allmaps[document.getElementById('map_pick').value][0].name+'.PNG'
    update_lang();
    populate_zones(document.getElementById('map_pick').value);
}
function change_zone_pic()
{
    document.getElementById('map_picture').src = 'maps/'+map_names[document.getElementById('map_pick').value]+'_'+allmaps[document.getElementById('map_pick').value][document.getElementById('zone_pick').value].name+'.PNG'
}
function populate_zones(map_num)
{
    zone_pick = document.getElementById('zone_pick');
    zone_pick.options.length = 0;
    for(k=0;k<allmaps[map_num].length;k+=1)
    {
        zone_pick.options[zone_pick.options.length] = new Option(allmaps[map_num][k].name, k);
    }
}
function buy(num)
{
    bought.push(num);
    document.getElementById(initiatives[num].name).parentElement.removeChild(document.getElementById(initiatives[num].name).parentElement.childNodes[1]);
    var testerino = document.createElement("select");
    testerino.id = 'month_pick_'+num;
    document.getElementById(initiatives[num].name).parentElement.appendChild(testerino); 
    testerino = document.createElement("select");
    testerino.id = 'year_pick_'+num;
    document.getElementById(initiatives[num].name).parentElement.appendChild(testerino); 
    yr_pick = document.getElementById('year_pick_'+num);
    yr_pick.options[yr_pick.options.length] = new Option('2002', 0);
    yr_pick.options[yr_pick.options.length] = new Option('2003', 54);
    yr_pick.options[yr_pick.options.length] = new Option('2004', 126);
    yr_pick.options[yr_pick.options.length] = new Option('2005', 198);
    yr_pick.options[yr_pick.options.length] = new Option('2006', 270);
    mt_pick = document.getElementById('month_pick_'+num);
    var id_lang = document.getElementById('lang_choosen').value;
    for(l=0;l<months[id_lang].length;l+=1)
    {
        mt_pick.options[mt_pick.options.length] = new Option(months[id_lang][l], l*6);
    }
    mt_pick.value = mt_pick.options[3].value;
}