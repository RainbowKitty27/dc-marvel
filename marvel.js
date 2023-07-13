AFRAME.registerComponent("marvel", {
  schema:{
    state:{type:"string",default:"marvel-list"},
    selectedCard:{type:"string",default:"#card1"}
  },
    init: function () {
      this.marvelContainer = this.el;
      this.createCards()
    },
    tick:function(){
      const {state}=this.el.getAttribute("marvel")
      if(state==="view"){
        const other=document.querySelector("#dc-container")
        this.hideE1([this.marvelContainer,other])
        this.showview()
      }
    },
     hideE1:function(e1list){
      e1list.map(e1=>{
        e1.setAttribute("visible",false)
      })
      
    },
    showview:function(){
      const{selectedCard}=this.data
      const skye1=document.querySelector("#main-container")
      skye1.setAttribute("material",{
        src:`./stuff/${selectedCard}/summery.png`,
        color:"white"
      })
    },
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "hulk",
          title: "The Hulk",
          url: "./hulk.png",
        },
        {
          id: "thor",
          title: "Thor",
          url: "./thor.png",
        },
  
        {
          id: "gofg",
          title: "Gardians of the Galaxy",
          url: "./galaxy.png",
        },
        {
          id: "spooder",
          title: "Spiderman",
          url: "./spider.png",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = -11;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl=this.createBorder(position,item.id)
  
        // Thumbnail Element
       const thumbnail=this.createThumbnail(item)
       borderEl.appendChild(thumbnail)
  
        // Title Text Element
       const titleE1=this.createTitleE1(position,item)
       borderEl.appendChild(titleE1)
  
        this.marvelContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityE1=document.createElement("a-entity")
      entityE1.setAttribute("id",id)
      entityE1.setAttribute("visible",true)
      entityE1.setAttribute("geometry",{
        primitive:"plane",
        width:30, height:3
      })
      entityE1.setAttribute("position",position)
      entityE1.setAttribute("material",{
        color:"#1b4332",
        opacity:1
      })
      entityE1.setAttribute("cursor-listener", {});

      return entityE1
    },
    createThumbnail:function(item){
      const entityE1=document.createElement("a-entity")
      entityE1.setAttribute("visible",true)
      entityE1.setAttribute("geometry",{
        primitive:"plane",
         width:15, height:20
        
      })
      entityE1.setAttribute("material",{
        src:item.url
      })
      return entityE1
    },
    createTitleE1:function(position,item){
      const entityE1=document.createElement("a-entity")
      entityE1.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:50,
        color:"#f5f5ab",
        value:item.title
      })
      const e1position=position
      e1position.y=-20
      entityE1.setAttribute("postion",e1position)
      entityE1.setAttribute("visible",true)
      return entityE1
    }
    
    
  });
  