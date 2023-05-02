let p=document.getElementsByTagName('p')[0];
p.remove();

// let main=document.getElementById('our-element');
// // {/* <div class="start" title="Start Element" data-value="Start">Start</div> */}

// let start_div=document.createElement('div');
// start_div.className='start';
// start_div.title='Start Element';
// start_div.setAttribute('data-value',"Start");
// start_div.innerHTML='Start';
// console.log(start_div);



// main.before("adsasd");

let ourElement = document.querySelector(".our-element");
 
ourElement.insertAdjacentHTML(
  "beforebegin",
  `<div class="start" title="Start Element" data-value="Start">Start</div>`
);
ourElement.insertAdjacentHTML(
  "afterend",
  `<div class="end" title="End Element" data-value="End">End</div>`
);