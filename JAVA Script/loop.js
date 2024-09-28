//  let i;
// for(i = 10; i>=1; i--)
// {
//     console.log(i);
// }

 //print odd number between 1 to 15
//    let i;
//  for(i = 1; i<=15 ; i+=2)
//   {
//     console.log(i);
//  }
 
 // reverse
/*for(let i = 15; i>=1 ; i-=2)
{
    console.log(i);
}
    */
   // print even number between 1 to 15 
    /* for(let i = 0 ; i<= 15 ; i+=2)
   {
    console.log(i);
   }
    */
   // reverse 
   /*
   for(let i = 14 ; i>=2; i-=2)
   {
    console.log(i);
   }
    */
   // multiplication table for 5
    /*for(let i=1;i<=10;i++)
        {
            console.log(i*5);
        } 
            */
     /*let n = prompt("enter a number that  you  want to print multiplication table");
      n = parseInt(n);
     for(let i = n ; i<=n*10;i+n)
     {
        console.log(i);
     }
        */
       // nested loop
       /*for(let i=1; i<=5;i++)
       {
        console.log("outer loop",i);
        for(let j=1; j<=5;j++)
        {
            console.log(j);
        }
       }
        */
      /* let i = 1;
       while(i<=10)
       {
        console.log(i);
        i++;
       }
        */
       // practice question 
       /*let favmovie = "god";
       let guess = prompt("Guess the movies");
       while(favmovie!=guess && (guess!="quit"))
       {
        console.log("Wrong Guess");
        guess = prompt("Try agin");
       }
        */
       // Guessing game
       /*const max = prompt("Enter a max number");
       const random = Math.floor(Math.random() * max) + 1;
       console.log(random);
       let guess = prompt("guess the number");
       while(true)
       {
        if(guess == "quit")
        {
            console.log("user Quit");
            break;
        }
        if(guess == random)
        {
            console.log("congrats!, you are right, Random number is",random);
            break;

        }else if(guess < random)
        {
            guess = prompt("Hint: your guess is to small, plz try agin");
        }else
        guess = prompt("your guess was too large, plz try agin");
       }
        */


