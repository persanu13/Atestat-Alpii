
x=-1;
animatie=false;

  $(document).ready(function(){
   
    $(".sageata1").click(function(){
      if(x<8 & !animatie){
        animatie=true;
      x+=1;
     y=($(".pozaF").eq(x).width())
     console.log(x);
     anime({
      targets: '.pozaF',
      translateX:"-="+y
    });
    setTimeout(function(){ animatie=false; }, 800);
  }

    });

    $(".sageata2").click(function(){
      if(x>-1 & !animatie){
        animatie=true;
     y=($(".pozaF").eq(x).width())
     console.log(x);
     anime({
      targets: '.pozaF',
      translateX:"+="+y
    });
    x-=1;
    setTimeout(function(){ animatie=false; }, 800);
  }

    });



  });