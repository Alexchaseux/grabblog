// allpages
Vue.component('item-page',{
template: `
<div>

<div v-for="item in content" class="box_all">
                                <div class="row">

                                    <div class="col-lg-3">
                                        <div class="img_box ">
                                            <img :src="item.imgitem"
                                                alt="img">

                                        </div>


                                    </div>
                                    <div class="col-lg-6">

                                        <h1>{{ item.header }}</h1>
                                        <p>{{ item.text }}</p>

                                    </div>

                                    <div class="col-lg-3">

                                        <a class="read_all " href="#">
                                            Читать
                                        </a>
                                    </div>

                                </div>


                            </div>

</div>

`,
props:{
    content: Array

}

});

// page

Vue.component('page-blog',{
template:  `
<div class="container">
    <div class="row">
        <div class="col-12 col-lg-8 pr-lg-0 pr-3">
            <div class="page">

                <div :style="{ 'background-image': 'url(' + linkimg + ')' }" class="img_page"></div>
                <h1>
                   {{ header }}

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
        <div class="col-lg-4 pr-lg-0 pr-3">

            <mini-blog></mini-blog>

        </div>



    </div>
</div>

`,
props: {
    header: String,
    textBlog: String,
    resourseStr: String,
    linkimg: String,
    resourseStr: String,
    resoursLink: String,


}

})

//mini blog
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

//blogbox
Vue.component('blog-box',{
    template: '#blog-box',
    props: {
        items: Array,
        headerBox: String,
    },
});
Vue.component('blog-item',{
    template: '#blog-item',
    props: {
        item: Object,
        index: Number,
    },
})

let app = new Vue({
el: '#app',
data: {
    blogItems: [
        {
            title: 'Учёные нашли самое старое живое позвоночное на Земле',
            shortText: 'Это был год, когда Мартин Лютер стал монахом, а король Генрих VIII отменил свою помолвку с Екатериной Арагонской… в общем, безумно давно.',
            url: '',
            imgLink: 'https://habrastorage.org/webt/pq/mk/kb/pqmkkbutce19qwwcylauyuc8kau.png',
            year: '06.02.2019',
            tags: [
                'Порно',
                'Новости'
            ]
        },
        {
            title: 'Приводим в порядок плейлист Торрент-ТВ ',
            shortText: '',
            url: '',
            imgLink: 'https://images.unsplash.com/photo-1547532182-bf296f6be875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
            year: '06.02.2019',
            tags: [
                'Порно',
                'Новости'
            ]
        },
        {
            title: 'Как же блять голова болит пиздец',
            shortText: '',
            url: '',
            imgLink: 'https://images.unsplash.com/photo-1547626740-02cb6aed9ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            year: '06.02.2019',
            tags: [
                'Порно',
                'Новости'
            ]
        },
    ]
}
});



