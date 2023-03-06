$(window).load(async function() {
    // 주소를 입력하여 데이터를 가져옴    
    let res = await getData('http://218.145.27.85:1337/api/photos?populate=*&filters');

    // 받아온 데이터의 url을 받아 html에 넣어줌
    let html ="";
    html += `<ul>`;
    for(let i = 0; i < res.data.length; i++){
        html += `<li><img src="${res.data[i].attributes.img.data.attributes.url}" alt=" "></li>`;
    }
    html +=` </ul>
    <div class="nav next"></div>
    <div class="nav prev"></div>
    <div class="mask"></div>`;

    // 각각의 ID에 HTML 요소를 추가
    $("#default").append(html);
    $("#drop_effect").append(html);
    $("#puff_effect").append(html);
    $("#contain_mode").append(html);


    // 기본 세팅 슬라이더
    $("#default").juicyslider({
        width:'100%',
        height: 400,
    });

    // drop 효과
    $("#drop_effect").juicyslider({
        mask: 'strip',
        autoplay: 6000,
        show: {effect: 'drop', duration: 3000},
        hide: {effect: 'drop', duration: 5000},
        width:'30%',
        height: 200,
    });

    // puff 효과
    $("#puff_effect").juicyslider({
        mask: 'square',
        autoplay: 7000,
        show: {effect: 'puff', duration: 5000},
        hide: {effect: 'puff', duration: 3000},
        width:'30%',
        height: 200,
    });

    // contain 모드로 변경
    $("#contain_mode").juicyslider({
        mode: 'contain',
        bgcolor: '#FFF',
        width:'30%',
        height: 200,
    });
});

// fetch를 사용하여 json 데이터를 넘겨줌
async function getData(url){
    let res = await fetch(url);
    let data = await res.json();
    return data;
}