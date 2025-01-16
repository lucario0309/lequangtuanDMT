var listPro =[
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường châu Âu 1',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường châu Âu 2',
        dec:'(Size lớn, trắng đen)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường châu Âu 3',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường ngủ 4',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường ngủ  5',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường ngủ 6',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường ngủ  7',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường ngủ  8',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường châu Âu 9',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường châu Âu 10',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
];

var listTemp = listPro;
var pages = {
    soluongItem: 4,
    page: 1,
    soluongPage: 0,
    indexMin:0,
    indexMax:4,
    search:'',

}
function RenderPro(product){
    var render = `<div class="product-box">
                    <div class="product-img">
                        <img src="${product.img}" alt="sp_01">
                    </div>
                    <div class="product-title">
                        <a href="#">
                            <h4>${product.title}</h4>
                            <p>
                                <span><i class="fa-solid fa-star cl-2"></i></span>
                                <span><i class="fa-solid fa-star cl-2"></i></span>
                                <span><i class="fa-solid fa-star cl-2"></i></span>
                                <span><i class="fa-solid fa-star cl-2"></i></span>
                                <span><i class="fa-solid fa-star cl-2"></i></span>
                            </p>
                            <p>${product.dec}</p>
                            <p>${product.price} VNĐ</p>
                        </a>
                    </div>
                </div>`
    return render
}
function RenderListPro(list){
    $("#list-product").html("");

    for(i=0;i<list.length;i++)
    {
        $("#list-product").append(RenderPro(list[i]))
    }
}
// RenderListPro(listPro)

function renderPages(number){
    $('.pagination').html('')
    $('.pagination').append('<li class="page-item"><a class="page-link" href="#">Previous</a></li>');
    for(let index =0; index <number; index++)
    {
        $('.pagination').append(`<li class="page-item"><a class="page-link" onclick="changePage(${index+1})">${index+1}</a></li>`);
    }
    $('.pagination').append('<li class="page-item"><a class="page-link" href="#">Next</a></li>');
   
}
 function calPage(list){
        pages.soluongPage = Math.round (list.length/pages.soluongItem + 0.499)
        pages.indexMin = pages.soluongItem*(pages.page-1);
        pages.indexMax = pages.soluongItem*pages.page- 1;
    }
// calPage(listPro)

// renderPages(3);

function renderListPage(list){
    calPage(list);
    renderPages(pages.soluongPage)
    $("#list-product").html("");

    for(i=pages.indexMin ; i<=pages.indexMax;i++)
    {
        $("#list-product").append(RenderPro(list[i]))
    }
}
renderListPage(listPro)

function changePage(index){
   pages.page =  parseInt(index);
   renderListPage(listPro);
}
function Search(){
   pages.search =  $('#input-search').val();
    listTemp = listPro.filter(x=>x.title.toUpperCase().includes(pages.search.toUpperCase()));
    renderListPage(listTemp)
}


// Mobile// 
var check = true;
$('#menu-mobile').on('click', ()=>{
    if(check){
        $('#menu-mobile>div>i').removeClass('fa-bars');
        $('#menu-mobile>div>i').addClass('fa-x');
        $('#menu-mobile>.nav').css("display","block");
        $('#menu-mobile').addClass('menu-mobile-active');

    }
    else{
        $('#menu-mobile>div>i').removeClass('fa-x');
        $('#menu-mobile>div>i').addClass('fa-bars');
        $('#menu-mobile>.nav').css("display","none");
        $('#menu-mobile').removeClass('menu-mobile-active')
    }
    check = !check
    
})