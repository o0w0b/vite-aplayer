const langs = [
    { title: '简体中文', path: '/zh-Hans/' },
    { title: 'English', path: '/en/' },
];

docute.init({
    landing: 'landing.html',
    title: 'Vite-APlayer',
    // repo: 'o0w0b/vite-aplayer',
    // 'edit-link': 'https://github.com/o0w0b/vite-aplayer/blob/main/docs/zh-Hans/README.md',
    // 自定义图标
    icons: [
        {
            icon: 'edit',
            label: '📝 Edit',
            link: 'https://github.com/o0w0b/vite-aplayer/blob/main/docs/zh-Hans/README.md'
        },
        {
            icon: 'github',
            label: '⭐ GitHub',
            link: 'https://github.com/o0w0b/vite-aplayer'
        }
    ],
    // 显示侧边栏
    sidebar: true,
    // 隐藏侧边栏按钮
    disableSidebarToggle: false,
    // 显示 h2 到 h4 的标题
    tocVisibleDepth: 3,
    nav: {
        default: [
            {
                title: '首页', path: '/'
            },
            {
                title: '选择语言', type: 'dropdown', items: langs
            }
        ],
        'zh-Hans': [
            {
                title: '首页', path: '/'
            },
            {
                title: '选择语言', type: 'dropdown', items: langs
            }
        ],
        'en': [
            {
                title: 'Home', path: '/'
            },
            {
                title: 'Languages', type: 'dropdown', items: langs
            }
        ],
    },
    plugins: [
        docsearch({
            apiKey: '',
            indexName: 'vite-aplayer',
            tags: ['zh-Hans', 'en'],
            url: 'https://aplayer.o0w0b.top'
        }),
        evanyou(),
        player()
    ]
});

function player() {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            aplayer0();
            aplayer1();
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer() {
    for (let i = 0; i < 10; i++) {
        if (window['ap' + i]) {
            window['ap' + i].destroy();
        }
    }
}

function aplayer0() {
    window.ap0 = new APlayer({
        container: document.getElementById('aplayer0'),
        fixed: true,
        lrcType: 3,
        audio: [{
            name: 'Brave Shine',
            artist: 'Aimer',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/BraveShine.mp3',
            cover: 'https://p1.music.126.net/1YZCAkIOAiv3JpV77u7xkw==/109951166045411898.jpg?param=130y130',
            lrc: 'lrc/BraveShine.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'BOYS DON\'T CRY',
            artist: 'VISUAL ARTS',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/visual.mp3',
            cover: 'https://p2.music.126.net/YNv3iHnWBvWpiMxvjqDgsg==/109951169976583206.jpg?param=130y130',
            lrc: 'lrc/visual.lrc',
            theme: '#46718b'
        }, {
            name: 'ninelie',
            artist: 'Aimer / EGOIST',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/ninelie.mp3',
            cover: 'https://p2.music.126.net/g7aakYG_Wfmrn1_IDfVUXA==/109951165050166241.jpg?param=130y130',
            lrc: 'lrc/ninelie.lrc',
            theme: '#505d6b'
        }]
    });
}

function aplayer1() {
    window.ap1 = new APlayer({
        container: document.getElementById('aplayer1'),
        theme: '#F57F17',
        lrcType: 3,
        audio: [{
            name: 'Brave Shine',
            artist: 'Aimer',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/BraveShine.mp3',
            cover: 'https://p1.music.126.net/1YZCAkIOAiv3JpV77u7xkw==/109951166045411898.jpg?param=130y130',
            lrc: 'lrc/BraveShine.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'BOYS DON\'T CRY',
            artist: 'VISUAL ARTS',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/visual.mp3',
            cover: 'https://p2.music.126.net/YNv3iHnWBvWpiMxvjqDgsg==/109951169976583206.jpg?param=130y130',
            lrc: 'lrc/visual.lrc',
            theme: '#46718b'
        }, {
            name: 'ninelie',
            artist: 'Aimer / EGOIST',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/ninelie.mp3',
            cover: 'https://p2.music.126.net/g7aakYG_Wfmrn1_IDfVUXA==/109951165050166241.jpg?param=130y130',
            lrc: 'lrc/ninelie.lrc',
            theme: '#505d6b'
        }]
    });
}

function aplayer2() {
    window.ap2 = new APlayer({
        container: document.getElementById('aplayer2'),
        audio: [{
            name: 'Brave Shine',
            artist: 'Aimer',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/BraveShine.mp3',
            cover: 'https://p1.music.126.net/1YZCAkIOAiv3JpV77u7xkw==/109951166045411898.jpg?param=130y130',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer3() {
    window.ap3 = new APlayer({
        container: document.getElementById('aplayer3'),
        mini: false,
        autoplay: false,
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        listMaxHeight: 90,
        lrcType: 3,
        audio: [{
            name: 'Brave Shine',
            artist: 'Aimer',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/BraveShine.mp3',
            cover: 'https://p1.music.126.net/1YZCAkIOAiv3JpV77u7xkw==/109951166045411898.jpg?param=130y130',
            lrc: 'lrc/BraveShine.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'BOYS DON\'T CRY',
            artist: 'VISUAL ARTS',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/visual.mp3',
            cover: 'https://p2.music.126.net/YNv3iHnWBvWpiMxvjqDgsg==/109951169976583206.jpg?param=130y130',
            lrc: 'lrc/visual.lrc',
            theme: '#46718b'
        }, {
            name: 'ninelie',
            artist: 'Aimer / EGOIST',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/ninelie.mp3',
            cover: 'https://p2.music.126.net/g7aakYG_Wfmrn1_IDfVUXA==/109951165050166241.jpg?param=130y130',
            lrc: 'lrc/ninelie.lrc',
            theme: '#505d6b'
        }]
    });
}

function aplayer4() {
    window.ap4 = new APlayer({
        container: document.getElementById('aplayer4'),
        lrcType: 3,
        audio: [{
            name: 'Brave Shine',
            artist: 'Aimer',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/BraveShine.mp3',
            cover: 'https://p1.music.126.net/1YZCAkIOAiv3JpV77u7xkw==/109951166045411898.jpg?param=130y130',
            lrc: 'lrc/BraveShine.lrc',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer5() {
    window.ap5 = new APlayer({
        container: document.getElementById('aplayer5'),
        lrcType: 3,
        audio: [{
            name: 'Brave Shine',
            artist: 'Aimer',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/BraveShine.mp3',
            cover: 'https://p1.music.126.net/1YZCAkIOAiv3JpV77u7xkw==/109951166045411898.jpg?param=130y130',
            lrc: 'lrc/BraveShine.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'BOYS DON\'T CRY',
            artist: 'VISUAL ARTS',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/visual.mp3',
            cover: 'https://p2.music.126.net/YNv3iHnWBvWpiMxvjqDgsg==/109951169976583206.jpg?param=130y130',
            lrc: 'lrc/visual.lrc',
            theme: '#46718b'
        }, {
            name: 'ninelie',
            artist: 'Aimer / EGOIST',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/ninelie.mp3',
            cover: 'https://p2.music.126.net/g7aakYG_Wfmrn1_IDfVUXA==/109951165050166241.jpg?param=130y130',
            lrc: 'lrc/ninelie.lrc',
            theme: '#505d6b'
        }]
    });
}

function aplayer6() {
    window.ap6 = new APlayer({
        container: document.getElementById('aplayer6'),
        mini: true,
        audio: [{
            name: 'Brave Shine',
            artist: 'Aimer',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/BraveShine.mp3',
            cover: 'https://p1.music.126.net/1YZCAkIOAiv3JpV77u7xkw==/109951166045411898.jpg?param=130y130',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer7() {
    window.ap7 = new APlayer({
        container: document.getElementById('aplayer7'),
        audio: [{
            name: 'Brave Shine(HLS)',
            artist: 'Aimer',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/HLS/BraveShine.m3u8',
            cover: 'https://p1.music.126.net/1YZCAkIOAiv3JpV77u7xkw==/109951166045411898.jpg?param=130y130',
            theme: '#ebd0c2',
            type: 'hls'
        }, {
            name: 'Brave Shine',
            artist: 'Aimer',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/BraveShine.mp3',
            cover: 'https://p1.music.126.net/1YZCAkIOAiv3JpV77u7xkw==/109951166045411898.jpg?param=130y130',
            theme: '#ebd0c2'
        }, {
            name: 'BOYS DON\'T CRY',
            artist: 'VISUAL ARTS',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/visual.mp3',
            cover: 'https://p2.music.126.net/YNv3iHnWBvWpiMxvjqDgsg==/109951169976583206.jpg?param=130y130',
            theme: '#46718b'
        }, {
            name: 'ninelie',
            artist: 'Aimer / EGOIST',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/ninelie.mp3',
            cover: 'https://p2.music.126.net/g7aakYG_Wfmrn1_IDfVUXA==/109951165050166241.jpg?param=130y130',
            theme: '#505d6b'
        }]
    });
}

function aplayer8() {
    window.ap8 = new APlayer({
        container: document.getElementById('aplayer8'),
        theme: '#e9e9e9',
        audio: [{
            name: 'Brave Shine',
            artist: 'Aimer',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/BraveShine.mp3',
            cover: 'https://p1.music.126.net/1YZCAkIOAiv3JpV77u7xkw==/109951166045411898.jpg?param=130y130',
        }, {
            name: 'BOYS DON\'T CRY',
            artist: 'VISUAL ARTS',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/visual.mp3',
            cover: 'https://p2.music.126.net/YNv3iHnWBvWpiMxvjqDgsg==/109951169976583206.jpg?param=130y130',
        }, {
            name: 'ninelie',
            artist: 'Aimer / EGOIST',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/ninelie.mp3',
            cover: 'https://p2.music.126.net/g7aakYG_Wfmrn1_IDfVUXA==/109951165050166241.jpg?param=130y130',
        }]
    });

    const colorThief = new ColorThief();
    window.ap8.on('switchaudio', function (index) {
        if (!window.ap8.options.audio[index].theme) {
            colorThief.getColorAsync(window.ap8.options.audio[index].cover, function (color) {
                window.ap8.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
            });
        }
    });
}

function aplayer9() {
    window.ap9 = new APlayer({
        container: document.getElementById('aplayer9'),
        fixed: true,
        lrcType: 3,
        audio: [{
            name: 'Brave Shine',
            artist: 'Aimer',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/BraveShine.mp3',
            cover: 'https://p1.music.126.net/1YZCAkIOAiv3JpV77u7xkw==/109951166045411898.jpg?param=130y130',
            lrc: 'lrc/BraveShine.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'BOYS DON\'T CRY',
            artist: 'VISUAL ARTS',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/visual.mp3',
            cover: 'https://p2.music.126.net/YNv3iHnWBvWpiMxvjqDgsg==/109951169976583206.jpg?param=130y130',
            lrc: 'lrc/visual.lrc',
            theme: '#46718b'
        }, {
            name: 'ninelie',
            artist: 'Aimer / EGOIST',
            url: 'https://cdn.jsdelivr.net/gh/o0w0b/vite-aplayer@main/docs/music/ninelie.mp3',
            cover: 'https://p2.music.126.net/g7aakYG_Wfmrn1_IDfVUXA==/109951165050166241.jpg?param=130y130',
            lrc: 'lrc/ninelie.lrc',
            theme: '#505d6b'
        }]
    });
}