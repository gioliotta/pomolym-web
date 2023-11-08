import donwloadIcon from "../assets/download-icon.svg";

function Download() {
  function pomoLymAPK() {
    const pomolymApkUrl =
        "https://expo.dev/artifacts/eas/fPsGgEwHKyfRUNd3yogMFd.apk",
      link = document.createElement("a");
    link.href = pomolymApkUrl;
    link.setAttribute("download", "pomolym.apk");
    link.role = "link";
    link.ariaLabel = "Download APK";
    link.click();
  }

  return (
    <div className="container-download">
      <p className="download-text">
        <span onClick={pomoLymAPK}>Download for Android</span>
        Version: 1.0.1 &nbsp;&nbsp;&nbsp;Size: 30,39 MB
      </p>
      <img
        style={{ cursor: "pointer" }}
        onClick={pomoLymAPK}
        src={donwloadIcon}
        title="Download APK"
        alt="Download Icon"
      />
    </div>
  );
}

export default Download;
