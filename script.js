const aside = document.querySelector('.sideMenu');
const openMenuBar = document.querySelector('.openMenuBar');
const closeMenuBar = document.querySelector('.closeMenuBar');
const lists = Array.from(document.querySelectorAll('.list'));

openMenuBar.addEventListener('click',()=>{
  aside.style.width = '55%';
  openMenuBar.style.display = 'none';
  closeMenuBar.style.transform = 'rotate(180deg)';
  closeMenuBar.style.opacity = '1';
  lists.map(list  => {
    list.style.display = 'block';
  });
});
    
closeMenuBar.addEventListener('click',()=>{
  openMenuBar.style.display = 'block';
  aside.style.width = '0px';
  closeMenuBar.style.opacity = '0';
  lists.map(list  => {
    list.style.display = 'none';
  })
});

const title = document.querySelector('.title');
const typeNote = document.querySelector('.typeNote');

const addNote = document.querySelector('#addNote');

const viewNoteCont = document.querySelector('.viewNoteCont');

const viewNoteWrapper = document.querySelector('.viewNoteWrapper');

let currentDate = new Date();
let month = currentDate.getMonth();
  
console.log(month+1);
// Creating User Text Field.

let storeData = [];

let createUserTextField = (ev) =>{
  ev.preventDefault();

  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let day = currentDate.getDate();
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();
    
  let period;

    const createUserTextFieldCont = document.createElement('div');
    const notetitle = document.createElement('p');
    const noteTypeText = document.createElement('p');
    const deleteNote = document.createElement('p');

    notetitle.classList.add('title');
    notetitle.append(title.value);

    
    noteTypeText.classList.add('noteTypeText');
    noteTypeText.append(typeNote.value);

    deleteNote.innerText = 'Delete';
    deleteNote.classList.add('deleteNote')

    createUserTextFieldCont.appendChild(notetitle);
    createUserTextFieldCont.appendChild(noteTypeText);
    // last edited date
    const createLastEdit = document.createElement('p');
    createLastEdit.classList.add('createdDate');

    createUserTextFieldCont.appendChild(deleteNote);
    createUserTextFieldCont.appendChild(createLastEdit);
    viewNoteWrapper.appendChild(createUserTextFieldCont);

    console.log(viewNoteCont)
    createLastEdit.setAttribute('class','lastEditedDate');

    if(hour >= 12){
        period = 'pm';
        createLastEdit.innerText = `Date Created: ${year}/${month+1}/${day}/${hour}:${minutes}${period}`;
    }if(hour < 12){
        period = 'am'
        createLastEdit.innerText = `Date Created: ${year}/${month+1}/${day}/${hour}:${minutes}${period}`;
    }
    let deleteUserNote = ()=>{
      createUserTextFieldCont.remove()
      
    }
    createLastEdit.innerText = `Last Edit: ${year}/${month}/${day}/${hour}/${minutes}`;
    deleteNote.addEventListener('click',deleteUserNote)
    function removeTextField(){
        title.value = '';
        typeNote.value = '';
    }removeTextField();
    
    // // Storing user data to the local storage
    let storeUserData = {
      id: Date.now(),
      userNote: noteTypeText.innerText,
      userTitle: notetitle.innerText
    }
    storeData.push(storeUserData);
    console.warn('Stored Data',{storeData});
    localStorage.setItem('Stored Data',JSON.stringify(storeData))
};

document.addEventListener('DOMContentLoaded',()=>{
  addNote.addEventListener('click',createUserTextField)
});