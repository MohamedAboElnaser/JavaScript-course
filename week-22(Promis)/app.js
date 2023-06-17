
//callback helllllll
setTimeout(() => {
    console.log("task-1");
    setTimeout(() => {
        console.log("task-2");
        setTimeout(()=>{
            console.log("task-3");
        },1000);
    }, 1000);
}, 1000);