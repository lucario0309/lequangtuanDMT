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
        title:'Giường châu Âu 4',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường châu Âu 5',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường châu Âu 6',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường châu Âu 7',
        dec:'(Size lớn, trắng sữa)',
        price:'89898899'
    },
    {
        id:'SP01',
        img:'imges/DanhMuc/sp_01.jpg',
        title:'Giường châu Âu 8',
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
var pages = {
    soluongItem: 4,
    page: 1,
    soluongPage: 0,
    indexMin:0,
    indexMax:4,

}
function RenderPro(product){
    var render = `<div class="product-box">
                    <div class="${product.img}">
                        <img src="imges/DanhMuc/sp_01.jpg" alt="sp_01">
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