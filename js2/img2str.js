var str;
let img2str = () =>{
    let imageFile = document.getElementById('img').files[0]
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.addEventListener("load",()=>{
        if(reader.result){
            str = reader.result;
            document.getElementById('data_tag').innerHTML = reader.result
        }
    })
}

let str2img = () =>{
    document.getElementsByTagName('img')[0].src=str;
}