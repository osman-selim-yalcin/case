//toggle for header component
darkTheme = false;
themeSwitch = () => {
    this.darkTheme = !this.darkTheme;
    const htmlTag = document.getElementsByTagName("html")[0]
    let logos = htmlTag.querySelectorAll(".logo");
    if (darkTheme) {
        htmlTag.dataset.theme = "dark";
        for (let i = 0; i < logos.length; i++) {
            const logo = logos[i];
            logo.querySelector("img").src="./assets/images/munte-logo-white.svg"
            
        }
    } else {
        htmlTag.dataset.theme = "light";
        for (let i = 0; i < logos.length; i++) {
            const logo = logos[i];
            logo.querySelector("img").src="./assets/images/munte-logo-.svg"
            
        }

    }
}
//------end (toggle for header component) /-------

//menu for header component
openMenu = (e) => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileHeader = document.querySelector(".header");
    e.classList.toggle("opened");
    mobileMenu.classList.toggle("opened");
    mobileHeader.classList.toggle("menu-opened");
}
//------end(menu for header component) /-------




//------ passwoprd /-------
passwordSwitch = (e) => {
    let x = e.parentElement;
    let y = x.getElementsByTagName("input")[0]
    if (y.type === "password") {
        y.type = "text";
        x.classList.remove("hide");
        x.classList.add("show");
    } else {
        y.type = "password";
        x.classList.add("hide");
        x.classList.remove("show");
    }

}
//------ passwoprd /-------


// like bıuıtton market

// let likeButton = document.querySelectorAll(".like-button");
// for (var i = 0; i < likeButton.length; i++) {
//     var elem = likeButton[i];
//     elem.onclick = function () {
//         this.classList.toggle("liked")
//     };
// }




//------ quick buying-dropdown /-------

//------ end (quick buying-dropdown) /-------


//------ market-page mobile quick buying buttons /-------

//------ end (market-page mobile quick buying buttons) /-------






// window.addEventListener("load", function() {
//     var theTabs = document.querySelectorAll(".tab-navigation ul > li");

//     function theTabClicks(tabClickEvent) {
//         var clickedTab = tabClickEvent.currentTarget;
//         var tabParent = tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
//         var theTabs = tabParent.querySelectorAll(".tab-navigation ul > li");
//         for (var i = 0; i < theTabs.length; i++) {
//             theTabs[i].classList.remove("active");
//         }
        
//         clickedTab.classList.add("active");
//         tabClickEvent.preventDefault();
//         var contentPanes = tabParent.querySelectorAll(".tab-content>div");
//         for (i = 0; i < contentPanes.length; i++) {
//             contentPanes[i].classList.remove("active");
//         }
//         var anchorReference = tabClickEvent.target;
//         var activePaneId = anchorReference.dataset.tab;
//         var activePane = tabParent.querySelector("#"+activePaneId);
//         activePane.classList.add("active");
//     }
//     for (i = 0; i < theTabs.length; i++) {
//         theTabs[i].addEventListener("click", theTabClicks)
//     }
// });



//------ tabs /-------
tabs = () => {
    var bindAll = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    var clear = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    }

    var change = function (e) {
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    }

    bindAll();
}

tabs();


//------ navigation menu
var meuSelector = document.querySelectorAll(".has-sub");
var i;

for (i = 0; i < meuSelector.length; i++) {
    meuSelector[i].getElementsByTagName("a")[0].addEventListener("click", function(e) {
        this.classList.toggle("active");
        e.preventDefault();
    });
}
//------ navigation menu


//------end (tabs /-------


// const deleteMessage = () => {

//     Swal.fire({
//         title: '',
//         text: 'Mesajları kalıcı olarak silmek istediğinden emin misin?',
//         icon: 'question',
//         showCancelButton: true,
//         cancelButtonText: 'Vazgeç',
//         confirmButtonText: 'Evet'
//     }).then((result) => {

//         if (result.isConfirmed) {
//             Swal.fire({
//                 text: 'Mesalar kalıcı olarak silindi',
//                 icon: 'success',
//                 confirmButtonText: 'Tamam'
//             })

//         }
//     });

// }




// const startConfirm = () => {

//     Swal.fire({
//         text: 'Başarıyla kaydedildi',
//         icon: 'success',
//         showCancelButton: false,
//         confirmButtonText: 'Tamam'
//     })
// }
// const deleteCoupon = () => {

//     Swal.fire({
//         title: 'Emin misiniz?',
//         text: 'Kuponlar daha fazla müşteri çekmeniz için önemli bir araçtır.',
//         icon: 'question',
//         showCancelButton: true,
//         cancelButtonText: 'Vazgeç',
//         confirmButtonText: 'Evet'
//     }).then((result) => {

//         if (result.isConfirmed) {
//             Swal.fire({
//                 text: 'Kupon silindi',
//                 icon: 'success',
//                 confirmButtonText: 'Tamam'
//             })

//         }
//     })

// }







// const createCoupon = async () => {

//     const {
//         value: formValues
//     } = await Swal.fire({


//         html: '<div class="swall-title"><i class="bumerang-ticket"></i>Kupon Oluştur</div>' +
//             '<div class="container"><div class="f-row"><div  class="input-wrap"><input type="text"id="swal-input1" placeholder="Kupon adı" class="with--end"><i class="bumerang-ticket"></i></div></div></div>' +
//             '<div class="container"><div class="row row-cols-2"><div class="f-row"><div  class="input-wrap"><select name="" id="swal-input2" class="with--end"><option value="amount">Tutar</option><option value="percentage">Yüzde</option></select><i class="bumerang-select"></i></div></div> <div class="f-row"><div class="input-wrap"><input type="text"id="swal-input3" placeholder="İndirim miktarı" class="with--end"></div></div></div></div>',
//         focusConfirm: false,
//         showCancelButton: true,
//         cancelButtonText: 'Vazgeç',
//         preConfirm: () => {
//             return [
//                 document.getElementById('swal-input1').value,
//                 document.getElementById('swal-input2').value,
//                 document.getElementById('swal-input3').value
//             ]

//         }

//     })

//     if (formValues) {
//         Swal.fire({
//             text: 'Kupon oluşturuldu. Müşterileriniz artık ödeme sayfasında bu kuponu kullanarak indiriminizden yararlanabilirler.',
//             icon: 'success',
//             confirmButtonText: 'Tamam'
//         })
//         console.log(JSON.stringify(formValues))
//     }


// }

// const deleteAdvert = () => {

//     Swal.fire({
//         title: 'Emin misiniz?',
//         text: 'İlan kalıcı olarak silinecektir.',
//         icon: 'question',
//         showCancelButton: true,
//         cancelButtonText: 'Vazgeç',
//         confirmButtonText: 'Evet'
//     }).then((result) => {

//         if (result.isConfirmed) {
//             Swal.fire({
//                 text: 'İlan silindi',
//                 icon: 'success',
//                 confirmButtonText: 'Tamam'
//             })

//         }
//     })
// }
// const deleteBankInfo = () => {

//     Swal.fire({
//         title: 'Emin misiniz?',
//         text: 'Ödeme alabilmeniz için banka hesap numaranızın olması zorunludur.',
//         icon: 'question',
//         showCancelButton: true,
//         cancelButtonText: 'Vazgeç',
//         confirmButtonText: 'Yine de sil'
//     }).then((result) => {

//         if (result.isConfirmed) {
//             Swal.fire({
//                 text: 'Banka Hesap bilgileri silindi',
//                 icon: 'success',
//                 confirmButtonText: 'Tamam'
//             })

//         }
//     })
// }