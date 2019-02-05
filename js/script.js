Vue.component('page-blog',{
template:  `
<div class="container">
    <div class="row">
        <div class="col-12 col-lg-8 pr-lg-0 pr-3">
            <div class="page">

                <div :style="{ 'background-image': 'url(' + linkimg + ')' }" class="img_page"></div>
                <h1>
                    Банки — это бизнес, но не в России

                </h1>
                <p>
                {{ textBlog }} </p>
                <p>
                 
{{ textBlog }}
                </p>
                <hr class="mt-5 mb-0">
                <div class="resours">
                    <div class="row">

                        <div class="col-6">
                            <p>Источник</p>
                        </div>
                        <div class="col-6">
                            <a :href=" resoursLink ">{{ resourseStr }}</a>
                        </div>

                    </div>
                </div>
          



            </div>

        </div>
        <div class="col-12 col-lg-4 pl-lg-0 pl-0 pr-0">

            <mini-blog
            v-for="c in 5"></mini-blog>

        </div>



    </div>
</div>

`,
data(){
    return{
  textBlog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe harum neque quas!',
  resourseStr: 'Вконтакте',
  resoursLink: '#',
  linkimg: 'https://sun7-3.userapi.com/c543108/v543108289/3d789/-ZDeSzMWC9A.jpg'

    }
}

})


Vue.component('mini-blog',{
template: ` 
<div class="row">
<div v-for="item in grab" class="col-12">
<div class="boxBlog_mini">
        <ul>
                <li>{{ item.tags }}</li>
            </ul>
            <h2>{{ item.header }}</h2>
            <span> {{ dates }} </span> <a class="btn_arrow" :href="linkPage"></a>

</div>
</div>

</div>




`,
props: ['item'],
data(){
return {
    dates: new Date().getFullYear(),
    linkPage: '/page.html',
    grab: [
        {
            header: 'Что делать, если всё пошло не так?',
            tags: '#memes'
    
        },
        {
            header: 'Выпущен инструмент для сборки node-пакетов одной командой',
            tags: '#IT'
    
        },
        {
            header: 'Mail.ru Group запустила свой новый браузер Atom',
            tags: '#News'
    
        },
        {
            header: 'В бета-версии iOS 12.2 появились новые Animoji',
            tags: '#Move'
    
        }
    
    ]
    

   
   

}
}

});

Vue.component('blog-box',{
template: `

<div class="container"> 
<div class="row">
<div class="col-12">
    <h1 class="one_he">{{ headerBox }}</h1>
</div>
</div>
<div class="row">
<div v-for="colin in parseOut" class="col-lg-8 pr-lg-0 pr-3">
    <div class="row">
        <div class="col-lg-12">
            <div :style="{ 'background-image': 'url(' + colin.linkimg + ')' }" class="boxBlog">
                <div class="category">
                    <ul>
                        <li>{{ colin.tags }}</li>
                       
                    </ul>

                </div>
                <h2>{{ colin.header }}</h2>
                <p> {{ colin.text }} </p>
                <div class="but_data">

                    <a class="btn_read" :href="linkPage">ЧИТАТЬ</a> <span>

                    {{ dates }}
                    </span>
                </div>



            </div>
        </div>
        <div class="col-lg-6 pr-lg-0 pr-md-3 ">
            <div class="boxBlog" style=" background-image: url(/css/img/box_two.png)">
                <div class="category">
                    <ul>
                        <li>#Новости</li>
                       
                    </ul>

                </div>
                <h2>{{ header }}</h2>
                <p>{{ texthere }} </p>
                <div class="but_data">

                    <a class="btn_read" :href="linkPage">ЧИТАТЬ</a> <span>

                    Дата
                    </span>
                </div>
            
            </div>
        </div>
        <div class="col-lg-6 ">
                     <div class="boxBlog" style="background-image: url(/css/img/box_two.png)">
                <div class="category">
                    <ul>
                        <li>#Новости</li>
                       
                    </ul>

                </div>
                <h2>{{ header }}</h2>
                <p> {{ texthere }} </p>
                <div class="but_data">

                    <a class="btn_read" :href="linkPage">ЧИТАТЬ</a> <span>

                    {{ dates }}
                    </span>
                </div>
            
            </div>
        </div>


    </div>

</div>
<div class="col-lg-4 pr-lg-0 pr-3">
    
     
      <mini-blog
      
      ></mini-blog>
 
    

</div>

</div>
<div class="container">
                    <hr class="mt-5 mb-0">
               
                </div>
                
</div>


   
`,

props: ['colin'],
data(){
    return {
        dates: new Date().getFullYear(),
        parseOut: [{
            tags: '#Новости',
            header: 'Всё вроде как работает, но это не точно',
            text: 'В компании отмечают, что при создании браузера разработчики делали акцент на безопасность и приватность пользователей. В Atom можно будет «в один клик» блокировать рекламу и предложения подписаться на уведомления сайтов.',
            linkimg: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            link: 'https://unsplash.com/photos/phIFdC6lA4E'
            
            },
        
        
        ]
        
    }
    }
})
let app = new Vue({
el: '#app'
});



