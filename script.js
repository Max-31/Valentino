function display(){
    event.preventDefault();

    let str= document.getElementById('inputId').value;
    // console.log(str);


    let display;
    fetch('./flower.html')
    .then(
        (res)=>res.text()
    )
    .then(
        (htmlStr)=>{
            const parse= new DOMParser();
            const doc= parse.parseFromString(htmlStr, 'text/html');
            display= doc.getElementById('nameId');
            // console.log(display);
            
            if(display)
                display.innerHTML= str;

            const newHtml= doc.documentElement.outerHTML;
            const newWin= window.open();
            newWin.document.open();
            newWin.document.writeln(newHtml);
            newWin.document.close();

            window.open('./flower.html');
        }   
    )

}