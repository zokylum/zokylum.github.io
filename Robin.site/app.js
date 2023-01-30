/*let sun = document.getElementById("switch").display;
let moon = document.getElementById("switchy").display;
let link = document.getElementById("linkyBoah").href;*/

function light() {
  document.getElementById("linkyBoah").href = "./style/light.css";
  //document.getElementById("switch").style.display = "none";
  //document.getElementById("switchy").style.display = "inline";
  console.log("hi");
}

function dark() {
  document.getElementById("linkyBoah").href = "./style/style.css";
  //document.getElementById("switch").style.display = "inline";
  //document.getElementById("switchy").style.display = "none";
  console.log("yo");
}
