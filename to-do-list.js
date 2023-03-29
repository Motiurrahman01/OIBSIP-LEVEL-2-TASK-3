function save()
{
    // document.getElementById('para').innerHTML='hibban';
    // document.getElementById('div1').style.border='2px solid black';
    document.getElementById('div1').style.backgroundColor='white';
    document.getElementById('div1').style.color='black';
    document.getElementById('div1').style.height='60px';
    document.getElementById('div1').style.marginTop='10px';
    document.getElementById('div1').style.display='flex';
    document.getElementById('div1').style.paddingLeft='40px';
    document.getElementById('div1').style.borderRadius='10px';
    
    document.getElementById('cancel').style.width='40px';
    document.getElementById('cancel').style.height='30px';
    document.getElementById('cancel').style.backgroundColor='#f5242e';
    document.getElementById('cancel').style.marginLeft='24%';
    document.getElementById('cancel').style.marginTop='13px';
    document.getElementById('cancel').style.borderRadius='5px';


    document.getElementById('cancel-icon').innerHTML='X';
    document.getElementById('cancel-icon').style.color='white';
    document.getElementById('cancel-icon').style.textAlign='center';
    document.getElementById('cancel-icon').style.fontSize='35px';
    document.getElementById('cancel-icon').style.marginTop='-5px';

    // document.getElementById('para').style.marginRight='100px';
    document.getElementById('para').innerHTML=document.getElementById('title').value;
    document.getElementById('para').style.width='27%';
    document.getElementById('para').style.textAlign='left';

    document.getElementById('desc').innerHTML=document.getElementById('Description').value;
    document.getElementById('desc').style.width='40%';
    document.getElementById('desc').style.textAlign='center';

    
}
function save2()
{

    var div=document.getElementById('div1').classList;
    div.add('div1');

    var para=document.getElementById('para').classList;
    para.add('para');
    document.getElementById('para').innerHTML=document.getElementById('title').value;

    var desc=document.getElementById('desc').classList;
    desc.add('desc');
    document.getElementById('desc').innerHTML=document.getElementById('Description').value;

    var cancel_icon=document.getElementById('cancel-icon').classList;
    cancel_icon.add('cancel-icon');
    document.getElementById('cancel-icon').innerHTML='X';

    var cancel=document.getElementById('cancel').classList;
    cancel.add('cancel');
}
function save3()
{
    var div=document.createElement('div');
    var x=document.getElementById('title').value;
    var y=document.getElementById('Description').value;

    var para=document.createElement('p');
    var title=document.createTextNode(x);

    para.appendChild(title);
    para.style.width='27%';
    para.style.textAlign='left';

    var desc=document.createElement('p');
    var Description=document.createTextNode(y);

    desc.appendChild(Description);
    desc.style.width='40%';
    desc.style.textAlign='center';

    var cancel=document.createElement('div');
    var cancel_icon=document.createTextNode('X');

    cancel.style.width='40px';
    cancel.style.height='30px';
    cancel.style.backgroundColor='#f5242e';
    cancel.style.marginLeft='24%';
    cancel.style.marginTop='13px';
    cancel.style.borderRadius='5px';
    cancel.style.color='white';
    cancel.style.textAlign='center';
    cancel.style.fontSize='35px';

    cancel.appendChild(cancel_icon);

    div.style.backgroundColor='white';
    div.style.color='black';
    div.style.height='60px';
    div.style.marginTop='10px';
    div.style.display='flex';
    div.style.paddingLeft='40px';
    div.style.borderRadius='10px';

    div.appendChild(para);
    div.appendChild(desc);
    div.appendChild(cancel);
    document.getElementById('div1').appendChild(div);


    cancel.addEventListener('click', () => {
       div.style.display='none';
    });

}
function canceled()
{
    document.getElementById('div1').style.display='none';
}
