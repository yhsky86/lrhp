$(function(){


    var header = `
        <!--header 컴포넌트-->
        <header class="header">
            <div class="header-top">
                <h1 class="header-logo"><a href="#none"><i class="icon logo">롯데렌터카</i></a></h1>
                <button type="button" class="btn-mypage">
                    <i class="icon mypage">마이페이지</i>
                </button>
                <button type="button" class="btn-drawer" data-target="drawer" data-on="true" data-sort="none">
                    <i class="icon draw">메뉴열기</i>
                </button>
            </div>
            <nav class="header-nav">
                <a href="#" class="active">#카라이프</a>
                <a href="#">단기예약</a>
                <a href="#">신차장</a>
                <a href="#">중고차</a>
                <a href="#">고객지원</a>
            </nav>
        </header>
        <!--//header 컴포넌트-->
    `;


    $(".header").html(header);
    $(".header .header").unwrap();

});