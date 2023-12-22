var siteBookName = document.getElementById('siteBookName');
var siteBookUrl = document.getElementById('siteBookUrl');
var searchInput = document.getElementById('searchInput');
var siteList = [];
if(localStorage.getItem('todoList')!=null){
    siteList=JSON.parse(localStorage.getItem('todoList'));
displaySite();
}

function addSite(){
    if(validationName() == true && validationUrl() == true){
        var site = {
        name:siteBookName.value,
        url:siteBookUrl.value
    }
    siteList.push(site);
    //end add
    
    clearForm();
    displaySite();
    localStorage.setItem('todoList',JSON.stringify(siteList));
    }
}
//start clear
function clearForm(){
    //clear inputs
    siteBookName.value = "";
    siteBookUrl.value = "";
}
function displaySite(){
    var contain = "";
    for(var i =1; i<siteList.length;i++){
    contain +=`   

         <tr>
                    <td>${i}</td>
                    <td>${siteList[i].name}</td>
                    <td>
                    <button class="btn btn-visit" >
                        <i class="fa-solid fa-eye pe-2"></i>
                            <a href="${siteList[i].url}" target="blank">Visit</a>
                        
                    </button>
                    </td>
                    <td>
                    <button onclick=" deleteSite( ${ i } ) " class="btn  btn-delete">
                        <i class="fa-solid fa-trash-can pe-2"></i>
                         Delete
                    </button>
                    </td>
    </tr>
    `
    }
    
    
    document.getElementById('t-Body').innerHTML = contain
}

//delete part
function deleteSite(index){
    siteList.splice(index , 1);
    localStorage.setItem('todoList',JSON.stringify(siteList))
    displaySite();
}
//search part
function searchSite(){
    var term = searchInput.value;
    var contain = "";
    for(var i =1; i<siteList.length;i++){
        if(siteList[i].name.toLowerCase().includes(term.toLowerCase()) == true){
            contain +=`   

         <tr>
                    <td>${i}</td>
                    <td>${siteList[i].name}</td>
                    <td>
                    <button class="btn btn-visit" >
                        <i class="fa-solid fa-eye pe-2"></i>
                            <a href="${siteList[i].url}" target="blank">Visit</a>
                        
                    </button>
                    </td>
                    <td>
                    <button onclick=" deleteSite( ${ i } ) " class="btn btn-delete">
                        <i class="fa-solid fa-trash-can pe-2"></i>
                         Delete
                    </button>
                    </td>
    </tr>
    `
        }
    
    }
    
    
    document.getElementById('t-Body').innerHTML = contain;
}
//regex
var messageName = document.getElementById("messageName");
function validationName(){
    var text = siteBookName.value;
    var regexName = /^([a-z]|[أ-ي]){4,8}$/;
    ;
    if(regexName.test(text) == true){
        siteBookName.classList.add("is-valid");
        siteBookName.classList.remove("is-invalid");
        messageName.classList.add("d-none");
        return true;
    }
    else{
        siteBookName.classList.add("is-invalid");
        siteBookName.classList.add("is-valid");
        messageName.classList.remove("d-none");
        return false;
    }
}
var messageUrl = document.getElementById("messageUrl");
function validationUrl(){
    var text = siteBookUrl.value;
    var regexUrl = /^(https:\/\/)[a-z]{3,20}(\.com)$/;
    ;
    if(regexUrl.test(text) == true){
        siteBookUrl.classList.add("is-valid");
        siteBookUrl.classList.remove("is-invalid");
        messageUrl.classList.add("d-none");
        return true;
    }
    else{
        siteBookUrl.classList.add("is-invalid");
        siteBookUrl.classList.remove("is-valid");
        messageUrl.classList.remove("d-none");
        return false;
    }
}

