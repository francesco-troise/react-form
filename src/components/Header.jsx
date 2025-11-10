import Logo from "../assets/img/Logo.png";

export default function HeaderContent() {
  return (
    <header className="py-3 bg-light">
      <div className="container d-flex align-items-center">
        <img src={Logo} />
        <span>BOOL-MARKETPLACE</span>
      </div>
    </header>
  );
}
