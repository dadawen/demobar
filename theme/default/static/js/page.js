import nProgress from "nprogress";

// * 监听hash变化，设置内嵌页面
export function pageChange() {
  const pathName = window.location.hash.substr(2);
  if (pathName && pathName.length > 1) {
    nProgress.start();
    setIframeSrc(pathName);
    return pathName;
  } else {
    // 初始化页面后默认加载第一个页面
    const aList = $(".list-content a");
    if (aList && aList.length) {
      const hashpath = aList[0].getAttribute("data-path");
      window.location.hash = hashpath;
    }
  }
}

export function setNavItemClickEvent() {
  $(".list-content a").click(function(e) {
    const pathName = $(this).attr("data-path");
    window.location.hash = pathName;
    e.preventDefault();
  });
}

export function clearPath() {
  window.location.hash = "";
}

// * 设置iframe标签src
function setIframeSrc(pathName) {
  $("#iframe-box").attr("src", pathName);
}
