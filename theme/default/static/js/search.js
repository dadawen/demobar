import { template, cloneDeep } from "lodash";

var tpl = `
<div class="list-group">
  <% for (var name in result) { %>
    <div class="list-group-wrap">
      <div class="list-header list-block <%= result[name].name %>">
        <span><%= name %></span>
        <span class="iwowenf iwo-weibiaoti35" aria-hidden="true"></span>
      </div>
      <div class="list-content">
        <% for (var page of result[name].pages) { %>
        <a href="<%= page.name %>" data-path="<%= page.path %>" class="list-item list-block <%= page.cssName %>"><%= page.title %></a>
        <% } %>
      </div>
    </div>
  <% } %>
</div>
`;

export function initSearch(callback) {
  document.getElementById("basic-addon1").onclick = function() {
    handleSearch();
    callback();
  };
  document.getElementById("search-input").onkeyup = function(event) {
    if (event.keyCode == 13) {
      handleSearch();
      callback();
    }
  };
}

function handleSearch() {
  let input = document.getElementById("search-input");
  let value = input.value;
  let pages = cloneDeep(pagesConfig);
  let result = search(pages, value);
  var compiled = template(tpl);
  $("#menu").html(compiled({ result }));
}

function search(pages, value) {
  let result = {};
  for (let folderName in pages) {
    // 先搜索父层标题，满足则返回
    if (folderName.indexOf(value) !== -1) {
      result[folderName] = pages[folderName];
      continue;
    }
    // 父层没有就找子集
    let pageArr = [];
    pages[folderName].pages.forEach(item => {
      if (item.title.indexOf(value) !== -1) {
        pageArr.push(item);
      }
    });
    if (pageArr.length > 0) {
      result[folderName] = pages[folderName];
      result[folderName].pages = pageArr;
    }
  }
  return result;
}
