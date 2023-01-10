/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./frontend/script.js ***!
  \****************************/
var input = document.querySelector("#title");
var button = document.querySelector("#submit");
button.addEventListener("click", function (e) {
  if (!input.value) {
    e.preventDefault();
    var errorMessage = document.createElement("p");
    errorMessage.classList.add("alert-danger");
    errorMessage.classList.add("alert");
    errorMessage.textContent = "O campo acima n\xE3o pode ficar vazio.";
    input.parentNode.insertBefore(errorMessage, input.nextSibling);
    return;
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDOUMsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7QUFFaERDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLENBQUMsRUFBSztFQUV0QyxJQUFJLENBQUNMLEtBQUssQ0FBQ00sS0FBSyxFQUFFO0lBQ2hCRCxDQUFDLENBQUNFLGNBQWMsRUFBRTtJQUNsQixJQUFNQyxZQUFZLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUNoREQsWUFBWSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDMUNILFlBQVksQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ25DSCxZQUFZLENBQUNJLFdBQVcsMkNBQXdDO0lBQ2hFWixLQUFLLENBQUNhLFVBQVUsQ0FBQ0MsWUFBWSxDQUFDTixZQUFZLEVBQUVSLEtBQUssQ0FBQ2UsV0FBVyxDQUFDO0lBQzlEO0VBQ0Y7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldG8tbm90ZXMvLi9mcm9udGVuZC9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblxuICBpZiAoIWlucHV0LnZhbHVlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiYWxlcnQtZGFuZ2VyXCIpXG4gICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJhbGVydFwiKVxuICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IGBPIGNhbXBvIGFjaW1hIG7Do28gcG9kZSBmaWNhciB2YXppby5gO1xuICAgIGlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVycm9yTWVzc2FnZSwgaW5wdXQubmV4dFNpYmxpbmcpO1xuICAgIHJldHVybjtcbiAgfVxufSk7XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJpbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImVycm9yTWVzc2FnZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyJdLCJzb3VyY2VSb290IjoiIn0=