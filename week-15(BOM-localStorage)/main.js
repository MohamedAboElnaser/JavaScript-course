let main_div=document.querySelector('.experiment');
let list_items=document.querySelectorAll('ul li');

if(localStorage.getItem('color')){
    // remove the active class from all the elements
    list_items.forEach(el=>{
        el.classList.remove('active');
    })

    // change the color of the main div to the stored color in local storage
    main_div.style.backgroundColor=localStorage.getItem('color');

    // add active class for the element whose color == the sotored color
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add('active');
}


list_items.forEach(li => {
   
    li.addEventListener('click',e =>{
        // console.log(e.currentTarget.dataset.color);
        // add the current clicked item's color to the local storage
        localStorage.color=e.currentTarget.dataset.color;
        
        // remove the active class from all the elements 
        list_items.forEach(el=>{
            el.classList.remove('active');
        })


        // add active class to the clicked element
        e.currentTarget.classList.add('active');

        // change the main div color to be the clicked one
        main_div.style.backgroundColor=localStorage.getItem('color');
    })

   
});