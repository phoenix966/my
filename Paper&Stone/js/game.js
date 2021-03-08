
let Game = {
    scoreUser: 0,
    scoreAI: 0,
    userAnswer: 0,
    aiAnswer: 0,
    dataResult:['stone','cut','paper'],
    arrayTools: ['<img src="img/stone.png" alt="img" class="game__img">','<img src="img/cut.png" alt="img" class="game__img">','<img src="img/paper.png" alt="img" class="game__img">'],
    randomAiAnswer(){
        let a = Math.floor(Math.random() * 3 + 1);
        switch(a){
            case 1:this.aiAnswer = this.dataResult[0]
            break;
            case 2:this.aiAnswer = this.dataResult[1]
            break;
            case 3:this.aiAnswer = this.dataResult[2]
        }
    },
    pushBtncheckUserAnswer(user,comp){
        if(user === comp){
            console.log('У Вас ничья')
            $('.header__text').text('У Вас Ничья')
        } else if(user === this.dataResult[0] && comp === this.dataResult[1] 
            || user === this.dataResult[1] && comp === this.dataResult[2]
            || user === this.dataResult[2] && comp === this.dataResult[0]
            ){
                console.log('Вы выйграли!')
                $('.header__text').text('Вы выйграли!')
                this.scoreUser++
        } else{
                console.log("Вы проиграли!")
                $('.header__text').text('Вы проиграли!')
                this.scoreAI++ 
            }
    }

}


let actionOnBtnClick = function(nth,i){
    $('.nav__btn:nth-of-type'+ nth).on('click',() => {   // стрелочная функция!! Теперь будет работать в Методе
        $('.game__img').remove();
        Game.userAnswer = 0;
        Game.randomAiAnswer();
        $('#user').append(Game.arrayTools[i]);
        Game.userAnswer = Game.dataResult[i];
    })
}

actionOnBtnClick('(1)',2)
actionOnBtnClick('(2)',0)
actionOnBtnClick('(3)',1)


$('.nav__btn:nth-of-type(4)').on('click',function(){
    if(Game.userAnswer === 0){
        $('.header__text').text('Вначале сделайте выбор!')
    } else{
        $('#comp .game__img').remove()
    Game.randomAiAnswer()

   switch(Game.aiAnswer){
        case Game.dataResult[0]:{
            $('#comp').append(Game.arrayTools[0])
            
        } break;
        case Game.dataResult[1]:{
            $('#comp').append(Game.arrayTools[1])
        } break;
        case Game.dataResult[2]:{
            $('#comp').append(Game.arrayTools[2])
        } break;
   }
   Game.pushBtncheckUserAnswer(Game.userAnswer,Game.aiAnswer)
   $('.game__score--user').text('Счет: '+ Game.scoreUser)
   $('.game__score--ai').text('Счет: '+ Game.scoreAI)
    }
    
})





