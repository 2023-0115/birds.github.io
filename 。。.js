// js
$(window).scroll(function(event){
    checkscroll()
  });
  function checkscroll(){
    var winPos = $(window).scrollTop(); //屏幕位置
    var NodePos = [$('#a').offset().top,$('#b').offset().top,$('#c').offset().top,$('#d').offset().top,$('#e').offset().top,$('#f').offset().top,$('#g').offset().top],//提前获取好元素位置
        length = NodePos .length; 
   //console.log(NodePos)
    if(winPos<=NodePos[1]){
      $('.btn a').removeClass('active');
      $('.btn a:nth-child(1)').addClass('active');
    }else{
      for(var i = 1;i<length; i++){
        if((i < length -1 && winPos<NodePos[i+1]&&winPos>=NodePos[i]) || (i == length -1 && winPos<=NodePos[i])){
          $('.btn a').removeClass('active');
          $('.btn a:nth-child('+(i+1)+')').addClass('active');
          break;
        }
      }
    }
  }

