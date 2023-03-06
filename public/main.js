$(window).load(async function() {
    // 주소를 입력하여 데이터를 가져옴    
    let res = await getData('http://218.145.27.85:1337/api/photos?populate=*&filters');

    // 받아온 데이터의 url을 받아 html에 넣어줌
    let html ="";
    html += `<ul>`;
    for(let i = 0; i < res.data.length; i++){
        html += `<li><img src="${res.data[i].attributes.img.data.attributes.url}" alt=""></li>`;
    }
    html +=` </ul>
    <div class="nav next"></div>
    <div class="mask"></div>`;

    $("#default").append(html);

    $("#default").juicyslider({});

});

// fetch를 사용하여 json 데이터를 넘겨줌
async function getData(url){
    let res = await fetch(url);
    let data = await res.json();
    return data;
}