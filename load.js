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
    document.getElementById('map_picture').src = 'maps/'+map_names[document.getElementById('map_pick').value]+'.PNG'
    update_lang();
    populate_zones(document.getElementById('map_pick').value);
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
    alert('This message should not appear. Please notify the developer if it appears.')
    bought.push(initiatives[num]);
}