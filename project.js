// adblocker for youtube
let adBlocker = true;
  const advertisement = document.getElementById('advertisement');
    function adBlocke() {
      if (adBlocker === true) {
        advertisement.style.display = "none";
      }
  }
if (adBlocke === true) {
  window.reload();
} else {
  console.log("adblocke didnt work.")
}
  switch (advertisement) {
    case 1:
      advertisement = advertisement
    break;
  }
adBlocke();
