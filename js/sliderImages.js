/*用來延遲執行方法*/
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  //window.addEventListener('scroll',e => console.count(e));

  const sliderImages = document.querySelectorAll('.slide-in');
  const headerHeight = document.querySelector("header");

  
  //console.log(headerHeight.offsetHeight); 803

  //console.log(window.scrollY); //926
  //console.log(window.innerHeight); //1249

  function checkSlide(e){
    
    sliderImages.forEach(slideImage =>{
      
      /*取得視窗下緣並預留2分之1的圖片高度*/
      const slideInAt = (window.scrollY + window.innerHeight) - slideImage.offsetHeight / 2;
      // const slideInAt = (window.scrollY + window.innerHeight) - slideImage.scrollHeight / 2;
      //console.log(slideInAt);
      /*取得圖片底部離視窗頂部的距離*/
      const imageBottom = (slideImage.offsetTop + headerHeight.offsetHeight * 0.1 ) + slideImage.offsetHeight;
      // console.log(slideImage.offsetTop);
      //console.log(imageBottom);
      const isHalfShown = slideInAt > (slideImage.offsetTop + headerHeight.offsetHeight * 0.1 );
      const isNotScrolledPast = window.scrollY < imageBottom;
      //console.log(isHalfShown);
      //console.log(isNotScrolledPast);

      /*取得圖片底部離視窗頂部的距離*/
      // const isHalfShown = slideInAt > (slideImage.offsetTop + headerHeight.offsetHeight);
      //const isHalfShown = slideInAt > (slideImage.scrollTop + headerHeight.offsetHeight);

      if(isHalfShown && isNotScrolledPast){
        slideImage.classList.add('active');
      }else{
        slideImage.classList.remove('active');
      }

    });
  };

 
  window.addEventListener('scroll',debounce(checkSlide));

  // window.addEventListener('scroll', checkSlide);


        

