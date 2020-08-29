function viewlist(category = "all") {
  // let nodes = document.getElementsByTagName("li");
  let nodes = document.getElementsByTagName("li");
  for (let i = 0; i < nodes.length; i++) {
    var tag = nodes[i];
    if (tag.className === "navbar")
      continue;
    if (category === "all") {
      tag.style.display = "list-item";
    }
    else {
      var img = tag.firstChild
      if (img != null && img.tagName === "IMG" && img.alt === category) {
        tag.style.display = "list-item";
      }
      else {
        tag.style.display = "none";
      }
    }
  }
}
