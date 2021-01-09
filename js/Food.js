class Food{
    constructor(){
        this.foodStock=0;
        this.lastFeed=0;
        this.image=loadImage("images/Milk.png");
    }

 getFoodStock(){
        var foodStockRef=database.ref("Food");
        foodStockRef.on("value",(data)=>{
            this.foodStock=data.val();
        });  
    }

    updateFoodStock(fooddata){
        database.ref("/").update({
            Food: fooddata
        })
    }

   getFeedTime(){
        var foodTimeRef=database.ref("FeedTime");
        console.log(foodTimeRef);
        foodTimeRef.on("value",(data)=>{
            console.log(data.val())
            lastFeds=data.val();
        });
    }

    updateFeedTime(feeddata){
        database.ref("/").update({
            FeedTime: feeddata
        })
    }

    display(){
       // Food.getFoodStock()
        //console.log(this.foodStock);
        var x=80,y=100;
        imageMode(CENTER)

        if(this.foodStock!==null){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=80
                    y += 50
                }
                image(this.image,x,y,50,50)
                x += 30
            }
        }
    }
}
