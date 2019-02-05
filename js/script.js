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
<div class="col-12">
<div class="boxBlog_mini">
        <ul>
                <li v-for="tags in categoryTag">{{ tags }}</li>
            </ul>
            <h2>{{ header }}</h2>
            <span> {{ dates }} </span> <a class="btn_arrow" :href="linkPage"></a>

</div>
</div>



`,

props: {
    categoryTag: Array,
    header: Array
    
},
data(){
return {
    dates: new Date().getFullYear(),
    linkPage: '/page.html',
    categoryTag: ['Привет'],

   
   

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
<div class="col-lg-8 pr-lg-0 pr-3">
    <div class="row">
        <div class="col-lg-12">
            <div :style="{ 'background-image': 'url(' + linkimg + ')' }" class="boxBlog">
                <div class="category">
                    <ul>
                        <li>#Новости</li>
                        <li>#Огодакактак</li>
                    </ul>

                </div>
                <h2>{{ header }}</h2>
                <p>Экс-банкир Илья Зибарев о том, почему государство не должно заниматься банками, какова
                    стратегия ЦБ и что такое повседневная благотворительность, — в интервью <b>Инне Лунёвой
                    </b>. </p>
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

                    {{ dates }}
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
    <div class="row">
     
      <mini-blog
      :category-tag="categoryNumb[0]"
      :header="categoryNumb[0]"
      v-for="blog in categoryNumb"></mini-blog>
 
    </div>

</div>

</div>
<div class="container">
                    <hr class="mt-5 mb-0">
               
                </div>
                
</div>


   
`,

props: {
header: String,
linkimg: String,
texthere: String,
headerBox: String,
categoryNumb: Array
},
data(){
    return {
        dates: new Date().getFullYear(),
        linkPage: '',
        categoryNumb: [2,4]
        
        
    }
    }
})
let app = new Vue({
el: '#app'
});