
const url = 'http://localhost:3000/slider'

const Deleteparent1 = document.querySelector('.delete1') ; 
const ajouterParent1 = document.querySelector('.parent1');
const Deleteparent2 = document.querySelector('.delete2') ; 
const ajouterParent2 = document.querySelector('.parent2');
const Deleteparent3 = document.querySelector('.delete3') ; 
const ajouterParent3 = document.querySelector('.parent3');
const Deleteparent4 = document.querySelector('.delete4') ; 
const ajouterParent4 = document.querySelector('.parent4');
const Deleteparent5 = document.querySelector('.delete5') ; 
const ajouterParent5 = document.querySelector('.parent5');
const Deleteparent6 = document.querySelector('.delete6') ; 
const ajouterParent6 = document.querySelector('.parent6');
const Deleteparent7 = document.querySelector('.delete7') ; 
const ajouterParent7 = document.querySelector('.parent7');


    ajouterParent1.addEventListener('click', (e) =>{
        e.preventDefault() ;
        const url = 'http://localhost:3000/slider' ;

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json' 
        },

    body:JSON.stringify({
        NomPere:'Mohamed Darbali', 
        NomEnfant:'Mehdi Darbali',
        id:'1',
        photoPere:'img/user1.jpg',
        photoEnfant:'img/child1.jpg'

        }) 

    })
    .then(res => res.json())
    .then(data => {
        const dataArr =[] ; 
        dataArr.push(data) ; 
        afficherEtudiants(data);
    })

    })

    Deleteparent1.addEventListener('click', (e)=>{
        e.preventDefault() ; 
        let id = 1;
        //supprimer un etudiant 
        fetch(`${url}/${id}`,{
               method:'DELETE',
    
           })
           .then(res => res.json() )
           .then(() => location.reload())
      
    
    });

    ajouterParent2.addEventListener('click', (e) =>{
        e.preventDefault() ;
        const url = 'http://localhost:3000/slider' ;

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json' 
        },

    body:JSON.stringify({
        NomPere:'Ahmed Lameri', 
        NomEnfant:'ALI Lameri',
        id:'2',
        photoPere:'img/user2.jpg',
        photoEnfant:'img/child2.jpg'

        }) 

    })
    .then(res => res.json())
    .then(data => {
        const dataArr =[] ; 
        dataArr.push(data) ; 
        afficherEtudiants(data);
    })

    })

    Deleteparent2.addEventListener('click', (e)=>{
        e.preventDefault() ; 
        let id = 2;
        //supprimer un etudiant 
        fetch(`${url}/${id}`,{
               method:'DELETE',
    
           })
           .then(res => res.json() )
           .then(() => location.reload())
      
    
    });

    ajouterParent3.addEventListener('click', (e) =>{
        e.preventDefault() ;
        const url = 'http://localhost:3000/slider' ;

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json' 
        },

    body:JSON.stringify({
        NomPere:'Ayoub Lhasseni', 
        NomEnfant:'Said Lhasseni',
        id:'3',
        photoPere:'img/user3.jpg',
        photoEnfant:'img/child3.jpg'

        }) 

    })
    .then(res => res.json())
    .then(data => {
        const dataArr =[] ; 
        dataArr.push(data) ; 
        afficherEtudiants(data);
    })

    })

    Deleteparent3.addEventListener('click', (e)=>{
        e.preventDefault() ; 
        let id = 3;
        //supprimer un etudiant 
        fetch(`${url}/${id}`,{
               method:'DELETE',
    
           })
           .then(res => res.json() )
           .then(() => location.reload())
      
    
    });

    ajouterParent4.addEventListener('click', (e) =>{
        e.preventDefault() ;
        const url = 'http://localhost:3000/slider' ;

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json' 
        },

    body:JSON.stringify({
        NomPere:'Ali Legbouri', 
        NomEnfant:'sabri Legbouri',
        id:'4',
        photoPere:'img/user4.jpg',
        photoEnfant:'img/child4.jpg'

        }) 

    })
    .then(res => res.json())
    .then(data => {
        const dataArr =[] ; 
        dataArr.push(data) ; 
        afficherEtudiants(data);
    })

    })

    Deleteparent4.addEventListener('click', (e)=>{
        e.preventDefault() ; 
        let id = 4;
        //supprimer un etudiant 
        fetch(`${url}/${id}`,{
               method:'DELETE',
    
           })
           .then(res => res.json() )
           .then(() => location.reload())
      
    
    });

    ajouterParent5.addEventListener('click', (e) =>{
        e.preventDefault() ;
        const url = 'http://localhost:3000/slider' ;

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json' 
        },

    body:JSON.stringify({
        NomPere:'Hamza Bochouf', 
        NomEnfant:'ali Bochouf',
        id:'5',
        photoPere:'img/user5.jpg',
        photoEnfant:'img/child5.jpg'

        }) 

    })
    .then(res => res.json())
    .then(data => {
        const dataArr =[] ; 
        dataArr.push(data) ; 
        afficherEtudiants(data);
    })

    })

    Deleteparent5.addEventListener('click', (e)=>{
        e.preventDefault() ; 
        let id = 5;
        //supprimer un etudiant 
        fetch(`${url}/${id}`,{
               method:'DELETE',
    
           })
           .then(res => res.json() )
           .then(() => location.reload())
      
    
    });

    ajouterParent6.addEventListener('click', (e) =>{
        e.preventDefault() ;
        const url = 'http://localhost:3000/slider' ;

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json' 
        },

    body:JSON.stringify({
        NomPere:'Abdesalam Haida', 
        NomEnfant:'hassan Haida',
        id:'6',
        photoPere:'img/user6.jpg',
        photoEnfant:'img/child6.jpg'

        }) 

    })
    .then(res => res.json())
    .then(data => {
        const dataArr =[] ; 
        dataArr.push(data) ; 
        afficherEtudiants(data);
    })

    })

    Deleteparent6.addEventListener('click', (e)=>{
        e.preventDefault() ; 
        let id = 6;
        //supprimer un etudiant 
        fetch(`${url}/${id}`,{
               method:'DELETE',
    
           })
           .then(res => res.json() )
           .then(() => location.reload())
      
    
    });

    ajouterParent7.addEventListener('click', (e) =>{
        e.preventDefault() ;
        const url = 'http://localhost:3000/slider' ;

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json' 
        },

    body:JSON.stringify({
        NomPere:'Abdo sert', 
        NomEnfant:'youness imad',
        id:'7',
        photoPere:'img/user7.jpg',
        photoEnfant:'img/child7.jpg'

        }) 

    })
    .then(res => res.json())
    .then(data => {
        const dataArr =[] ; 
        dataArr.push(data) ; 
        afficherEtudiants(data);
    })

    })

    Deleteparent7.addEventListener('click', (e)=>{
        e.preventDefault() ; 
        let id = 7;
        //supprimer un etudiant 
        fetch(`${url}/${id}`,{
               method:'DELETE',
    
           })
           .then(res => res.json() )
           .then(() => location.reload())
      
    
    });