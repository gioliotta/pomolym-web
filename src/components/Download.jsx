import donwloadIcon from "../assets/download-icon.svg";

function Download() {
  function pomoLymAPK() {
    const pomolymApkUrl =
        "https://expo.dev/artifacts/eas/fpF5TWRhfgcnYrgzpRjsMY.apk",
      link = document.createElement("a");
    link.href = pomolymApkUrl;
    link.download = "pomolym.apk";
    link.role = "link";
    link.ariaLabel = "Download APK";
    link.click();
  }

  return (
    <div className="container-download">
      <p className="download-text">
        <span onClick={pomoLymAPK}>Download for Android</span>
        Version: 1.0.0 &nbsp;&nbsp;&nbsp;Size: 39.43mb
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
