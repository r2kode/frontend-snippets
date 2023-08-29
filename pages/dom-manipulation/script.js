const treeWalker = () => {
  const content = document.getElementById("content");
  const treeWalker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);

  let node;
  while ((node = treeWalker.nextNode())) {
    console.log(node.nodeValue.trim());
  }
};

treeWalker();
