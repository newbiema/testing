function button1(){
    Swal.fire({
        title: "Si Tampan",
        text: "Namaku Tampan",
        imageUrl: "img/monyet.jpeg",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Custom image"
      });

}


document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    
    var nama = document.getElementById('nama').value;
  
    alert(nama);

  });

  function button2(){

    Swal.fire("Selamat Datang",nama);


  }

