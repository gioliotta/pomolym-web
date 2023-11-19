import donwloadIcon from "../assets/download-icon.svg";

function Download() {
  function pomoLymAPK() {
    const pomolymApkUrl =
        "https://expo.dev/artifacts/eas/fPsGgEwHKyfRUNd3yogMFd.apk",
      link = document.createElement("a");
    link.href = pomolymApkUrl;
    link.setAttribute("download", "pomolym.apk");
    link.role = "link";
    link.ariaLabel = "Descargar APK";
    link.click();
  }

  return (
    <div className="container-download">
      <p className="download-text">
        <span onClick={pomoLymAPK}>Descargar para Android</span>
        Versión: 1.0.1 &nbsp;&nbsp;&nbsp;Tamaño: 30,39 MB
      </p>
      <img
        style={{ cursor: "pointer" }}
        onClick={pomoLymAPK}
        src={donwloadIcon}
        title="Descargar APK"
        alt="Descargar Icono"
      />
    </div>
  );
}

export default Download;
