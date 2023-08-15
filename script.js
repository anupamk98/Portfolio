console.log("script on");
document.querySelector('.cross').style.display='none';
document.querySelector('.ham').addEventListener ("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebar-ja');
    if(document.querySelector('.sidebar').classList.contains('sidebar-ja')) {
        document.querySelector('.cross').style.display='none';
        document.querySelector('.ham').style.display='inline';
    }
    else {
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';
        },400)
        document.querySelector('.ham').style.display='none';
    }
    document.querySelector('.cross').addEventListener("click",()=>{
        document.querySelector('.sidebar').classList.add('sidebar-ja');
        document.querySelector('.cross').style.display='none';
        document.querySelector('.ham').style.display='inline';
    })
})
