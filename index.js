fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
    .then(res =>{
        return res.json();
    })
    .then(data => {
        data.sort((a, b) => b.points - a.points);
        data.forEach(user => {
            const markup ='<div class="name"><div class="arrange"><p class="sno text">8</p><div class="scircle">'+'<img height="80px" src="'+user.avatar+'"/>'+'</div><p class="participant text">'+user.name+'</p></div><p class="score text">'+user.points+'</p></div>';
            document.querySelector('.cont').insertAdjacentHTML('beforeend',markup);
        });
        
    })