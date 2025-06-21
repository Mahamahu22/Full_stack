#  Frontend OS Detection Using JavaScript

##  Aim:
To detect the user's **operating system**, **platform**, and **browser details** using frontend JavaScript.

---

##  Description:

Web browsers give developers access to a built-in object called `navigator`. This object contains a lot of information about the environment the user is accessing the site from — including their **OS**, **platform (Windows, macOS, Android, etc.)**, **browser version**, and more.

This detection is useful when:
- You want to customize the UI based on device (e.g., show a mobile layout on phones).
- You need to collect device-related data for analytics or logs.
- You're debugging cross-platform bugs (e.g., something works on Mac but not on Android).

---

## 🧾 JavaScript Code Explanation:

```js
function getDeviceInfo() {
  console.log("User Agent:", navigator.userAgent);
  console.log("Platform:", navigator.platform);
  console.log("App Version:", navigator.appVersion);
  console.log("Language:", navigator.language);
  console.log("Online Status:", navigator.onLine ? "Online" : "Offline");
}

getDeviceInfo();
