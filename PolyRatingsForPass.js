// var file_src = "http://polyratings.com";
//
// function prepareFrame() {
//   var ifrm = document.createElement("iframe");
//   ifrm.setAttribute("src", file_src);
//   ifrm.style.width = "640px";
//   ifrm.style.height = "480px";
//   document.body.appendChild(ifrm);
// }
//
// prepareFrame()
//
// x = document.getElementsByTagName('td');
// z = document.getElementsByTagName('th');
// red = "#ff4d4d";
// orange = "#ffd633";
// yellow = "#fcff4e";
// green = "#00cc44";
// gpa = 0;
//
// for (var i = 0; i < x.length; i++) {
//   var content = x[i].innerHTML;
//   var comma = new RegExp(",");
//   var exceptionPhrase = new RegExp("Section");
//   if (comma.test(content) && exceptionPhrase.test(content) == false) {
//     x[i].style.backgroundColor = yellow;
//     var a = document.createElement('a');
//     var newNode = document.createElement('td');
//     var newContent = document.createTextNode(gpa + "/4.00");
//     a.appendChild(newContent);
//     a.title = "?.??/4.00";
//     a.href = "http://www.polyratings.com/";
//     a.target = "_blank";
//     newNode.appendChild(a);
//     newNode.setAttribute("style", "background-color:" + yellow + ";");
//     var referenceNode = x[i]
//     referenceNode.after(newNode);
//   }
// }
// for (var i = 0; i < z.length; i++) {
//   var content = z[i].innerHTML;
//   var instruct = new RegExp("structor");
//   if (instruct.test(content)) {
//     var newNode = document.createElement('td');
//     var newContent1 = document.createTextNode("Poly Rating");
//     newNode.appendChild(newContent1);
//     newNode.setAttribute("style", "font-weight:bold;");
//     var referenceNode = z[i]
//     referenceNode.after(newNode);
//   }
// }