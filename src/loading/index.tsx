export const LoadingComponent = () => {
  return (
    <div
      className="logo-banner"
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#fff",
        left: 0,
        top: "0%",
        zIndex: 999,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.117/mercadolibre/pt_logo_large_plus@2x.webp"
        style={{ animation: "bounce .8s ease infinite" }}
      />
    </div>
  );
};
