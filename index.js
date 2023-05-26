fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
    .then(res =>{
        return res.json();
    })
    .then(data => {
        data.sort((a, b) => b.points - a.points);
        $(".one .round").text(data[0].name+'.'+data[0].points);
        $(".two .round").text(data[1].name+'.'+data[1].points);
        $(".three .round").text(data[2].name+'.'+data[2].points);
        $(".one .main").html('<img height="100px" src="'+data[0].avatar+'"/>');
        $(".two .sub").html('<img height="75px" src="'+data[1].avatar+'"/>');
        $(".three .sub").html('<img height="75px" src="'+data[2].avatar+'"/>');
        for(var i=3;i<data.length;i++){
            const markup ='<div class="name"><div class="arrange"><p class="sno text">'+(i+1)+'</p><div class="scircle">'+'<img height="80px" src="'+data[i].avatar+'"/>'+'</div><p class="participant text">'+data[i].name+'</p></div><p class="score text">'+data[i].points+'</p></div>';
            document.querySelector('.cont').insertAdjacentHTML('beforeend',markup);
        }
        
    })