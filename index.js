let btn=document.getElementById('btn1')
let getupdated=()=>{
    let title=document.getElementById('title').value
    let desc=document.getElementById('description').value
    if(localStorage.getItem('itemjson')==null){
        itemjsonarr=[];
        itemjsonarr.push([title,desc])
        localStorage.setItem('itemjson',JSON.stringify(itemjsonarr))
    }
    else{
        itemjsonarrstr=localStorage.getItem('itemjson')
        itemjsonarr=JSON.parse(itemjsonarrstr)
        itemjsonarr.push([title,desc])
        localStorage.setItem('itemjson',JSON.stringify(itemjsonarr))
    }
    updated()

}

let updated=()=>{
    if(localStorage.getItem('itemjson')==null){
       itemjsonarr=[]
       
        localStorage.setItem('itemjson',JSON.stringify(itemjsonarr))
    }
    else{
        itemjsonarrstr=localStorage.getItem('itemjson')
        itemjsonarr=JSON.parse(itemjsonarrstr) 
        

    }
 
    let tbody=document.getElementById('tbody')
    let str=''
    itemjsonarr.forEach((element,index) => {
        str+=`
            <tr>
            <td>${index+1}</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-danger"onclick="deleted(${index})">Delete</button></td>
            </tr>
        `
        
    });
    tbody.innerHTML=str;
 
}


btn.addEventListener('click',getupdated);
updated()

let deleted=(itemindex)=>{
 itemjsonarrstr=localStorage.getItem('itemjson')
 itemjsonarr=JSON.parse(itemjsonarrstr)

 itemjsonarr.splice(itemindex,1)
 localStorage.setItem('itemjson',JSON.stringify(itemjsonarr))
 updated()

}

