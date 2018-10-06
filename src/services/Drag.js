/* 拖动功能 */

// 初始化宽高
let oW,oH;
let oLeft = 0;
let oTop = 0;
let htmlWidth = document.documentElement.clientWidth;
let htmlHeight = document.documentElement.clientHeight;
let bWidth = 0;
let bHeight = 0;
let block = null;

export default {
  // 初始化
  init(_block) {
    // 更新dom元素及其宽度和高度
    block = _block;
    bWidth = block.offsetWidth;
    bHeight = block.offsetHeight;
    // 监听
    this.listen(block);
  },
  // 拖动功能
  documentMove(e) {
    // 区分移动端和PC端
    (e.touches) && (e = e.touches[0]);
    oLeft = e.clientX - oW;
    oTop = e.clientY - oH;
    // 控制可拖动范围
    if(oLeft < 0) {
      oLeft = 0;
    } else if (oLeft > htmlWidth - bWidth) {
      oLeft = (htmlWidth - bWidth);
    }
    if(oTop < 0) {
      oTop = 0;
    } else if (oTop > htmlHeight - bHeight) {
      oTop = (htmlHeight - bHeight);
    }

    block.style.left = oLeft + "px";
    block.style.top = oTop + "px";
  },

  // 监听功能
  listen(block) {
    // 支持 移动端
    block.addEventListener("touchstart", (e)=>{
      e = e.touches[0];
      oW = e.clientX - block.offsetLeft;
      oH = e.clientY - block.offsetTop;
      
      // 监听document touchmove
      document.addEventListener("touchmove", this.documentMove ,false);

      // 监听document touchend
      document.addEventListener("touchend", (e) => {
          document.removeEventListener("touchmove", this.documentMove, false);
      },false);
    },false);

    // 支持PC端
    block.addEventListener("mousedown", (e)=>{
      oW = e.clientX - block.offsetLeft;
      oH = e.clientY - block.offsetTop;

      // 监听document mousemove
      document.addEventListener("mousemove", this.documentMove ,false);

      // 监听document mouseup
      document.addEventListener("mouseup", (e)=>{
          document.removeEventListener("mousemove", this.documentMove, false);
      },false);
      
      // 监听document mouseleave
      document.addEventListener("mouseleave", ()=>{
          document.removeEventListener("mousemove", this.documentMove, false);
      }, false);
    },false);
  }
}