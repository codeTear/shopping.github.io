window.addEventListener('load',function(){
    //获取元素
    let front=this.document.querySelector('.front');
    let next=this.document.querySelector('.next');
    let focus=this.document.querySelector('.nav_c');

    let ul=focus.querySelector('ul');
    let ol=focus.querySelector('ol');
    let count=0;
    let focusWidth=focus.offsetWidth;
    //鼠标移动显示左右两个按钮

    focus.addEventListener('mouseover',function(){
        front.style.display='block';
        next.style.display='block';
        clearInterval(auto);
        auto=null;
    })

    //离开隐藏两个按钮
    focus.addEventListener('mouseout',function(){
        front.style.display='none';
        next.style.display='none';
        auto=setInterval(function(){
            next.click();
        },2000)
    })

    // console.log(ul.children.length);
    for(let i=0;i<ul.children.length;i++){
        let li=this.document.createElement('li');
        //创建圆圈并且给它写入属性
        li.setAttribute('index',i);
        ol.appendChild(li);
        li.addEventListener('click' ,function(){
            //把所有的非当前点击的圈类名给去掉
            for(let j=0;j<ol.children.length;j++){
                ol.children[j].className='';
            }
            //留下当前点击的这个圈
            this.className='styleName';
            //点击小圆圈，移动图片，注意移动的是ul
            //获得移动的距离 负值
            let index=this.getAttribute('index');
            count=index;
            circle=index;
            // console.log(focusWidth);
            // console.log(index);
            animate(ul,-index*focusWidth);
        })
    }
          let first=ul.children[0].cloneNode(true);
          ul.appendChild(first);
          ol.children[0].className='styleName';
          //声明一个小圆圈变量、控制小圆圈播放
          let circle=0;
          //右侧按钮和左侧按钮的点击事件
          next.addEventListener('click',function(){
            //如果走到最后一张，要把我们克隆的第一张图片left改为0
            if(count==4){
                ul.style.left=0;
                count=0;
            }
            count++;
            animate(ul,-count*focusWidth);
            //控制小圆圈的移动
            circle++;
            if(circle===4){
                circle=0;
            }
            for(let i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            ol.children[circle].className='styleName';
          })
           //左侧按钮和左侧按钮的点击事件
           front.addEventListener('click',function(){
            if(count==0){
                count=ul.children.length-1;
                ul.style.left=-(ul*focusWidth)+'px';
            }
            count--;
            animate(ul,-count*focusWidth);
            //控制小圆圈的移动
            circle--;
            if(circle<0){
                circle=3;
            }
            for(let i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            ol.children[circle].className='styleName';
          })
          //自动播放功能
          let auto=this.setInterval(function(){
            next.click();
          },2000)
})
   

