// allpages



Vue.component('all-pages',{
    template: "#all-pages",
    props:{
        content: Array
    
    }
    
    });
    
Vue.component('item-page',{
template: "#item-page",
props:{
    cat: Object,
    index: Number

}

});

// page

Vue.component('page-content',{
template: '#page-content',
props:{
page: Object
}

});

Vue.component('page-blog',{
template: '#page-blog',
props: {
   pages: Array,
   lotes: Array
}

})

//mini blog
Vue.component('mini-blog',{
template: '#mini-blog',
props: {
    lot: Object,
    index: Number,
}
});

//blogbox
Vue.component('blog-box',{
    template: '#blog-box',
    props: {
        items: Array,
        headerBox: String,
        lotes: Array
    },
});

Vue.component('blog-item',{
    template: '#blog-item',
    props: {
        item: Object,
        index: Number,
    }
})

let app = new Vue({
el: '#app',
data: {
    blogItems: [
        {
            title: 'Учёные нашли самое старое живое позвоночное на Земле',
            shortText: 'Это был год, когда Мартин Лютер стал монахом, а король Генрих VIII отменил свою помолвку с Екатериной Арагонской… в общем, безумно давно.',
            url: '',
            imgLink: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6beace12202611.56258d0701829.gif',
            year: '06.02.2019',
            tags: [
                'Тренд',
                'Новости'
            ]
        },
        {
            title: 'Приводим в порядок плейлист Торрент-ТВ ',
            shortText: 'Определяет параметры видимости текста в блоке, если текст целиком не помещается в заданную область.',
            url: '',
            imgLink: 'https://images.unsplash.com/photo-1547532182-bf296f6be875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
            year: '06.02.2019',
            tags: [
                'Наука',
                'Новости'
            ]
        },
        {
            title: 'Lorem ipsum lorem ipsum',
            shortText: 'Определяет параметры видимости текста в блоке, если текст целиком не помещается в заданную область.',
            url: '',
            imgLink: 'https://images.unsplash.com/photo-1547626740-02cb6aed9ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            year: '06.02.2019',
            tags: [
                'Наука',
                'Новости'
            ]
        },
    ],
    blogMini: [
        {
            header: 'Что делать, если всё пошло не так?',
            tags: ['#Новости', '#Наука'],
            link: '#',
            dates: '07.02.2019'
    
        },
        {
            header: 'Выпущен инструмент для сборки node-пакетов одной командой',
            tags: ['#Новости', '#Наука'],
            link: '#',
            dates: '07.02.2019'
    
        },
        {
            header: 'Mail.ru Group запустила свой новый браузер Atom',
            tags: ['#Новости', '#Наука'],
            link: '#',
            dates: '07.02.2019'
    
        },
        {
            header: 'В бета-версии iOS 12.2 появились новые Animoji',
            tags: ['#Новости', '#Наука'],
            link: 'page.html',
            dates: '07.02.2019'
    
        }
    
    ],
    pageObject: [

{
    header: 'Mail.ru Group запустила свой новый браузер Atom',
    textBlog: 'Это был год, когда Мартин Лютер стал монахом, а король Генрих VIII отменил свою помолвку с Екатериной Арагонской… в общем, безумно давно.',
    resoursLink: '',
    resourseStr: 'Вконтакте',
    img: 'https://images.unsplash.com/photo-1547626740-02cb6aed9ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
}

    ],
    allPages: [
        {
            header: 'Что делать, если всё пошло не так?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed explicabo eligendi facere atque tenetur!',
            imgitem: 'https://images.unsplash.com/photo-1549417182-56f2bafc2c40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80'
    
        },
        {
            header: 'Выпущен инструмент для сборки node-пакетов одной командой',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed explicabo eligendi facere atque tenetur!',
            imgitem: 'https://images.unsplash.com/photo-1547979854-5333256878de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    
        },
        {
            header: 'Mail.ru Group запустила свой новый браузер Atom',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed explicabo eligendi facere atque tenetur!',
            imgitem: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80'
    
        },
        {
            header: 'В бета-версии iOS 12.2 появились новые Animoji',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed explicabo eligendi facere atque tenetur!',
            imgitem: 'https://images.unsplash.com/photo-1547994770-e5d8509b114d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    
        }
    
    ]
}
});



