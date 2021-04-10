$(document).ready(function() {
   $("input").click(function()
    {
       var numberOfListItem = $("#choices li").length;
       var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
       
       if(randomChildNumber == 0 || randomChildNumber == 1)
       {
        $("h2").text("幸運的女神降臨了！恭喜你抽到最高獎賞！");
        $("h1").text($("#choices li").eq(randomChildNumber).text());
       }
       else
       {
        $("h2").text("恭喜你抽到");
        $("h1").text($("#choices li").eq(randomChildNumber).text());
       }
       //documnet.getElementById("img").setAttribute("src",randomChildNumber+".jpg");
       switch(randomChildNumber)
           {
                case 0:
                    $("#img").attr("src","RandomSelecter/Kartrider/BlackKnight-X.png");
                break;
                case 1:
                    $("#img").attr("src","RandomSelecter/Kartrider/R8-X.png");
                break;
                case 2:
                    $("#img").attr("src","RandomSelecter/Kartrider/ThunderKing-X.png");
                break;
                case 3:
                    $("#img").attr("src","RandomSelecter/Kartrider/HellDog-X.png");
                break;
                case 4:
                    $("#img").attr("src","RandomSelecter/Kartrider/Cotton-X XE.png");
                break;
                case 5:
                    $("#img").attr("src","RandomSelecter/Kartrider/Pirea-X.png");
                break;
                case 6:
                    $("#img").attr("src","RandomSelecter/Kartrider/Taiwan-X.png");
                break;
                case 7:
                    $("#img").attr("src","RandomSelecter/Kartrider/Cotton-X Black.png");
                break;
                case 8:
                    $("#img").attr("src","RandomSelecter/Kartrider/Cotton-X.png");
                break;
           }
              
    });               
});